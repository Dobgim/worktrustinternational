# WorkTrust International Ltd. — Modern React & Tailwind CSS Platform

A professional, high-performance clone and modernization of **WorkTrust International** (`worktrustinternational.ltd`), built with **React**, **Vite**, and **Tailwind CSS**.

---

## 🚀 Quick Start

### 1. Development Server
Run the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
Compile and bundle optimized production assets:
```bash
npm run build
```
Built files will be output to `/dist`.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ✨ Features Included

### 1. Authentic Brand & Visual Hierarchy
- **Header & Navigation**: Top contact bar (`info@worktrustinternational.ltd`, direct phone desk), ISO 27001 security badge, language indicator, responsive mobile drawer menu, and quick CTA buttons.
- **Hero Section**: High-converting value proposition with dual-wallet highlights, interactive 3D virtual debit card mockup (`4928 •••• •••• 8421`), floating live balances, and real-time transaction speed counters.

### 2. Core Financial Modules
- **Dual-Wallet Architecture**:
  - **Main Wallet**: For day-to-day balance, deposits, loan repayments, and wire transfers.
  - **Profit Wallet**: Segregated wallet receiving automated high-yield returns from DPS/FDR and multi-tier referral commissions.
  - **1-Click Inter-Wallet Transfer**: Move earnings from Profit to Main seamlessly.
- **Online Loan Facilities ($500 – $40,000)**:
  - Micro Fast Loan ($500 – $2,500)
  - Business Growth Loan ($3,000 – $15,000)
  - Premier Commercial Loan ($15,000 – $40,000)
  - Interactive Loan Application modal with real-time EMI calculation.
- **Deposit Pension Scheme (DPS)**:
  - Silver Growth DPS ($100/mo, 9.5% p.a.)
  - Gold Retirement DPS ($300/mo, 12.0% p.a.)
  - Platinum Wealth DPS ($1,000/mo, 14.5% p.a.)
- **Fixed Deposit Receipt (FDR)**:
  - 90-Day Quarterly Yield (7.0% APR)
  - 1-Year Annual Sovereign FDR (11.5% APR)
  - 3-Year Triennial Wealth Builder (15.0% APR)
- **Interactive Financial Calculator**:
  - Live slider for borrowing/principal amounts ($500 to $100,000)
  - Tenure adjustment (3 to 36 months)
  - Interest rate slider with real-time monthly EMI, total interest, and maturity yield projections.

### 3. Customer Engagement & Portals
- **Interactive Client Portal Simulator**:
  - Live account overview (Account ID: `WTI-89410294`, KYC Verified status).
  - Real-time Wire Transfer module (simulate sending funds to any account ID or IBAN).
  - Instant Deposit module (supports Wire Transfer, ACH, Credit Card, and Crypto settlement).
  - Complete historical ledger table with status badges and downloadable statements.
- **Authentication**:
  - **Account Sign In Modal**: Includes a 1-click demo login shortcut for immediate testing.
  - **Open Free Account Modal**: Country selection with international dial codes, phone, email, and referral tracking.
- **Frequently Asked Questions (FAQ)**: Interactive searchable accordion.
- **Contact & Direct Support**: Contact form routed to `info@worktrustinternational.ltd`, office addresses (New York One World Trade Center & London Canary Wharf), and response time commitments.

---

## 📁 Project Structure

```
worktrustinternational.ltd/
├── dist/                     # Optimized production build assets
├── public/
│   └── favicon.ico           # WorkTrust brand icon
├── src/
│   ├── components/
│   │   ├── AuthModals.jsx    # Sign In & Open Account modals
│   │   ├── ContactSection.jsx# Contact form & corporate office details
│   │   ├── DashboardModal.jsx# Full interactive Client Portal / Wallet
│   │   ├── FAQ.jsx           # Searchable accordion
│   │   ├── Footer.jsx        # Footer with legal disclaimers & sitemap
│   │   ├── Hero.jsx          # Hero section with interactive card widget
│   │   ├── HowItWorks.jsx    # 4-step onboarding journey
│   │   ├── InvestmentPlans.jsx# DPS and FDR subscription cards
│   │   ├── LoanCalculator.jsx# Real-time loan & investment calculator
│   │   ├── LoanPlans.jsx     # Loan tiers & application modal
│   │   ├── Navbar.jsx        # Responsive navigation & announcement bar
│   │   ├── Services.jsx      # Financial services grid
│   │   └── Testimonials.jsx  # Client feedback & ratings
│   ├── data/
│   │   └── mockData.js       # Structured data, plans, and demo transactions
│   ├── App.jsx               # Application root connecting state and modals
│   ├── index.css             # Tailwind CSS & custom styling
│   └── main.jsx              # React 18 mount
├── index.html                # Vite HTML template
├── package.json              # Dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind theme colors and extensions
└── vite.config.js            # Vite configuration
```

