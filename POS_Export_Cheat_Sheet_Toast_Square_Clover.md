# MarginVault AI — 2-Minute POS & Delivery Export Cheat Sheet
**Subtitle:** *Exact Click-by-Click Instructions to Export Your Baseline Item Prices & Delivery Chargebacks in Under 120 Seconds*  
**Read-Only Onboarding Email:** `support@marginvaultai.com` | **Security Note:** *MarginVault AI only needs Read-Only Reporting & CSV Exports—never share your master bank login or employee payroll access.*

---

## 1. Toast POS (Restaurants, Bakeries, Cafes & Taquerias)

### Part A: Export Your Current Menu Item Price CSV (`60 Seconds`)
1. Log into **Toast Web** (`pos.toasttab.com`) from any laptop, tablet, or back-office computer.
2. In the left-hand navigation sidebar, click **Menus** -> **Bulk Management** -> **Advanced Properties**.
3. Click the **Show/Hide** drop-down menu in the top-right corner and check:
   * `[x] Base Price`
   * `[x] SKU` / `PLU` (if used)
   * `[x] Menu Groups` & `[x] Menu Items`
4. Click the **Expand All** button so all menu groups open up.
5. Click the **Export** icon (top right above the table) -> Download **`Menu_Advanced_Properties.csv`**.
6. **Also Export 90-Day Item Sales Mix (`30 Seconds`):**
   * Left sidebar -> **Reports** -> **Menus** -> **Product Mix (PMIX)**.
   * Set Date Range to **Last 90 Days** -> Click the **Download CSV** button in the top-right corner.

### Part B: Add `support@marginvaultai.com` with Read-Only Reporting Permissions (`30 Seconds`)
1. In Toast Web, go to **Employees** -> **Employee Management** -> **Employees**.
2. Click **+ Add New Employee** at the top right.
3. Enter:
   * **First / Last Name:** `MarginVault AI (Read-Only)`
   * **Email:** `support@marginvaultai.com`
4. Under **Access Permissions**, uncheck all register/cash-drawer/employee-edit permissions and check **ONLY**:
   * `[x] 4.1 Sales Reports (Read-Only)`
   * `[x] 4.2 Menu Reports / Product Mix (Read-Only)`
5. Click **Save & Send Invite**. *(You can revoke this read-only access with one click at any time.)*

---

## 2. Square for Restaurants & Square Retail (Cafes, Bakeries, Delis & Markets)

### Part A: Export Your Item Library & Barcode Price CSV (`45 Seconds`)
1. Sign into your **Square Dashboard** (`squareup.com/dashboard`).
2. In the left navigation menu, click **Items & orders** (or **Items**) -> **Items** -> **Item library**.
3. Click the **Actions** button in the top-right corner -> select **Export Library**.
4. Select **Export to CSV** (or **Microsoft Excel (.xlsx)**) -> Click **Export**.
   * *What this gives us:* Every item name, variation, GTIN/UPC barcode, current register price, and unit cost (if entered)—without touching any live register settings.

### Part B: Export 90-Day Item Sales Summary (`30 Seconds`)
1. In Square Dashboard, click **Reports** -> **Sales** -> **Item sales**.
2. Click the **Date Selector** at the top left -> choose **Last 90 Days** (or **Last 3 Months**).
3. Click **Export** (top right) -> **Detail CSV**.

### Part C: Optional Read-Only Team Permission (`30 Seconds`)
1. Go to **Staff** -> **Team** -> **Team members** -> **Add team member**.
2. Enter `MarginVault AI` (`support@marginvaultai.com`) and assign a custom **Read-Only Reporting** permission set (**View Sales Reports & View Items Only**—no POS checkout, bank, or team management access).

---

## 3. Clover POS & Liquor/C-Store Barcode Scanners (NRG / Verifone / Gilbarco / KORONA)

### Option A: Clover POS (Delis, Markets, Bakeries & Quick-Serve)
1. Log into your **Clover Web Dashboard** (`clover.com/dashboard`).
2. Click **Inventory** -> **Items** on the left sidebar.
3. Click the **More** (or **3-Dots `...` / Export**) button at the top right of your Items list -> select **Export Items**.
4. Save the downloaded `.xlsx` / `.csv` spreadsheet (contains `Name`, `Price`, `Product Code / UPC Barcode`, `SKU`, and `Cost`).
5. **90-Day Item Sales:** Click **Reporting** -> **Item Sales** -> set date range to **Last 90 Days** -> click **Export CSV** at the top right.

### Option B: Liquor & Convenience Store Scanners (NRG / Verifone Ruby2 & Commander / Gilbarco Passport / KORONA / Modisoft)
* **KORONA POS / Modisoft / PetroSoft C-Store Office:**
  1. Open Back-Office Cloud -> **Inventory / Pricebook** -> **Products / Items**.
  2. Click **Export -> CSV / Excel** and include columns: `UPC Barcode`, `Item Description`, `Department (Liquor/Beer/Wine/Tobacco/Grocery)`, `Case Pack Size`, `Last Unit Cost`, and `Current Retail Price`.
* **Verifone Commander / Ruby2 & Gilbarco Passport / NRG Register:**
  1. Open your Back-Office PC Pricebook utility (or Verifone Configuration Manager).
  2. Go to **PLU / Pricebook Maintenance** -> **Export PLU File (`.CSV` or `.XML`)**.
  3. **Don't want to touch the back-office PC?** Just snap a photo of your latest **Southern Glazer's, Reyes Beer, RNDC, or Core-Mark paper invoice** and text it to your MarginVault number—we build your high-volume SKU price book directly from your invoices and barcode scans!

---

## 4. DoorDash Merchant Portal & Uber Eats Manager (Chargeback & Dispute Export)

### Part A: DoorDash Merchant Portal (`merchant-portal.doordash.com`) — `45 Seconds`
1. Log into the **DoorDash Merchant Portal** (`merchant-portal.doordash.com`).
2. **Download Weekly Error Charges & Missing Item Deductions CSV:**
   * In the left sidebar, click **Financials** -> **Transactions** (or **Reports** -> **Financials Report**).
   * Filter **Transaction Type** by **`Error Charges / Order Refunds / Adjustments`** and set Date Range to **Last 30 Days**.
   * Click **Export CSV** in the top-right corner.
3. **Where We Submit Timestamp Disputes (`Operations -> Customer Feedback / Order History`):**
   * Go to **Orders** -> filter by **`Error Charge`**.
   * Click any order marked *"Missing Item"* or *"Incorrect Order"* -> click **Dispute Charge**.
   * MarginVault AI provides the exact **POS Kitchen Ticket Print Timestamp + Bag-Check Verification Note** so your dispute wins in 1 click (or we submit it automatically via **Settings -> Users -> Add User -> `alan@marginvaultai.com` -> Role: Store Operator / Analyst**).

### Part B: Uber Eats Manager (`merchants.ubereats.com`) — `45 Seconds`
1. Log into **Uber Eats Manager** (`merchants.ubereats.com`).
2. **Download Order Error Adjustments CSV:**
   * In the left navigation bar, click **Payments** -> **Payout Summary** (or **Reports** -> **Payment Details Report**).
   * Select the **Last 30 Days** -> click **Download CSV** and check **`Include Order Error Adjustments`**.
3. **Where We Submit Disputes (`Orders -> Order Errors / Refunds`):**
   * Click **Orders** in the left sidebar -> filter by **`Order Accuracy / Refunded to Customer`**.
   * Select the flagged order -> click **Dispute This Refund** -> paste the **MarginVault Kitchen Ticket & Prep-Time Proof Packet** before the 30-day dispute window closes.

---

## Quick 60-Second Checklist Before You Put Your Phone Away

- [ ] **1.** Exported your POS Item Price CSV (`Toast`, `Square`, `Clover`, or `C-Store Pricebook`) and emailed to `alan@marginvaultai.com`
- [ ] **2.** Snapped smartphone photos of **3 to 5 recent supplier paper invoices** (Sysco, BakeMark, US Foods, Southern Glazer's, Reyes, etc.) and texted them to your MarginVault number
- [ ] **3.** *(Optional — Tier 2 & Tier 3)* Exported your last 30 days of DoorDash/UberEats `Error Charges` CSV so we can recover your first `$200–$800` in unfair delivery deductions this week!
