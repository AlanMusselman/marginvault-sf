/**
 * MarginVault AI Service Worker (sw.js)
 * Implements Cache-First app shell caching and Background Sync for offline walk-in cooler resilience.
 */
const CACHE_NAME = 'marginvault-shell-v2';
const SHELL_ASSETS = [
  '/',
  '/snap.html',
  '/snap',
  '/gatekeeper.html',
  '/logo.svg',
  '/Sample_Monthly_Found_Money_Scorecard.html',
  '/MarginVault_AI_Client_Brochure.pdf'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(SHELL_ASSETS.map((url) => cache.add(url)))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((k) => {
          if (k !== CACHE_NAME) return caches.delete(k);
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 1. Bypass Service Worker cache for API mutation endpoints
  if (url.pathname.startsWith('/api/')) {
    return;
  }

  // 2. Cache-First Strategy for App Shell and Static Assets
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
        return networkResponse;
      }).catch(() => {
        // Fallback to cached snap.html for any navigation request if network is dead
        if (event.request.mode === 'navigate') {
          return caches.match('/snap.html');
        }
      });
    })
  );
});

// Background Sync Event (Chromium Browsers)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-offline-invoices') {
    event.waitUntil(flushIndexedDBQueue());
  }
});

async function flushIndexedDBQueue() {
  const db = await openVaultDB();
  const tx = db.transaction('offline_invoices', 'readonly');
  const store = tx.objectStore('offline_invoices');
  const req = store.index('by_status').getAll('QUEUED');

  return new Promise((resolve) => {
    req.onsuccess = async () => {
      const items = req.result || [];
      for (const item of items) {
        try {
          const resp = await fetch('/api/snap-upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              store: item.storeSlug,
              fileName: item.fileName,
              base64Image: item.base64Image,
              alertId: item.alertId,
              exp: item.exp,
              nonce: item.nonce,
              sig: item.sig
            })
          });
          if (resp.ok) {
            const data = await resp.json();
            const updateTx = db.transaction('offline_invoices', 'readwrite');
            const uStore = updateTx.objectStore('offline_invoices');
            item.status = 'SYNCED';
            item.syncedAt = Date.now();
            item.serverAudit = data;
            uStore.put(item);

            // Notify open browser tabs of sync success
            const clientsList = await self.clients.matchAll();
            for (const client of clientsList) {
              client.postMessage({
                type: 'OFFLINE_INVOICE_SYNCED',
                id: item.id,
                msgId: data.msg_id,
                audit: data.audit_report
              });
            }
          }
        } catch (e) {
          // Connection still spotty; retry on next event
        }
      }
      resolve();
    };
    req.onerror = () => resolve();
  });
}

function openVaultDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('MarginVaultLocalVault', 1);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('offline_invoices')) {
        const store = db.createObjectStore('offline_invoices', { keyPath: 'id' });
        store.createIndex('by_status', 'status', { unique: false });
        store.createIndex('by_timestamp', 'capturedAt', { unique: false });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
