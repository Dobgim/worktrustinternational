export const COMPANY_INFO = {
  name: "WorkTrust International",
  legalName: "WorkTrust International Ltd.",
  tagline: "Global Digital Banking & Specialized Financial Solutions",
  email: "info@worktrustinternational.ltd",
  phone: "+1 (800) 492-7821",
  address: "One World Trade Center, Suite 8500, New York, NY 10007, USA",
  secondaryAddress: "25 Bank Street, Canary Wharf, London E14 5JP, United Kingdom",
  hours: "Mon - Sat: 08:00 AM - 09:00 PM (EST)",
  supportStatus: "24/7 Live Monitoring"
};

export const STATS = [
  { label: "Active Account Holders", value: "240,000+", change: "+18% this quarter" },
  { label: "Total Volume Processed", value: "$1.85B+", change: "Over 85 countries" },
  { label: "Average Loan Approval", value: "< 24 Hrs", change: "Fast automated review" },
  { label: "System Uptime & SLA", value: "99.98%", change: "Bank-grade infrastructure" },
];

export const SERVICES = [
  {
    id: "savings-dps",
    title: "DPS (Deposit Pension Scheme)",
    shortDesc: "Disciplined recurring savings with guaranteed fixed high returns to build reliable long-term capital.",
    icon: "PiggyBank",
    highlight: "Up to 14.5% Annual ROI",
    features: [
      "Flexible monthly installment options",
      "Automatic deductions or manual deposits",
      "Zero hidden management fees",
      "Full principal protection & guaranteed yield"
    ]
  },
  {
    id: "fdr-deposits",
    title: "FDR (Fixed Deposit Receipt)",
    shortDesc: "Secure your surplus capital in fixed-term deposits with upfront agreed interest and high security.",
    icon: "Landmark",
    highlight: "Locked High-Yield Returns",
    features: [
      "Terms ranging from 3 months to 5 years",
      "Compounded or monthly interest payouts",
      "Instant loan against FDR capability (up to 80%)",
      "Premature withdrawal flexibility"
    ]
  },
  {
    id: "smart-loans",
    title: "Online Loans & Financing",
    shortDesc: "Fast-track personal and enterprise loans from $500 up to $40,000 with flexible installments and transparent terms.",
    icon: "Coins",
    highlight: "Instant Assessment",
    features: [
      "Competitive low fixed APR rates",
      "Custom installment tenure (3 to 36 months)",
      "Zero collateral required for standard tiers",
      "Direct disbursement into your WorkTrust wallet"
    ]
  },
  {
    id: "fund-transfers",
    title: "Instant Global Wire Transfers",
    shortDesc: "Seamless fund transfers across international accounts and internal WorkTrust members in real-time.",
    icon: "ArrowLeftRight",
    highlight: "Real-Time Settlement",
    features: [
      "Internal peer-to-peer 0% fee transfers",
      "SWIFT / SEPA / ACH integrated gateway",
      "Multi-currency conversion at spot exchange rates",
      "Automated PDF transfer receipts & alerts"
    ]
  },
  {
    id: "dual-wallet",
    title: "Dual-Wallet Management System",
    shortDesc: "Separate your operational funds from your profit, referral bonuses, and investment returns effortlessly.",
    icon: "WalletCards",
    highlight: "Automated Segregation",
    features: [
      "Main Wallet for daily expenses & transfers",
      "Profit Wallet for investment yield & bonuses",
      "Instant 1-click inter-wallet transfers",
      "Comprehensive downloadable statements"
    ]
  },
  {
    id: "hr-outsourcing",
    title: "HR & Enterprise Outsourcing",
    shortDesc: "Corporate payroll management, contract workforce solutions, and international HR financial settlement.",
    icon: "Building2",
    highlight: "Corporate Solutions",
    features: [
      "Automated mass payroll disbursements",
      "Compliance and tax documentation support",
      "Contractor cross-border contractor payouts",
      "Dedicated corporate account relationship managers"
    ]
  }
];

export const LOAN_PLANS = [
  {
    id: "starter-loan",
    name: "Micro Fast Loan",
    category: "Personal & Emergency",
    minAmount: 500,
    maxAmount: 2500,
    interestRate: "4.5%",
    tenure: "3 to 6 Months",
    installments: "Weekly or Monthly",
    recommended: false,
    badge: "Quick Disbursal",
    description: "Designed for immediate personal requirements, medical contingencies, or rapid short-term capital."
  },
  {
    id: "growth-loan",
    name: "Business Growth Loan",
    category: "Small Business & SME",
    minAmount: 3000,
    maxAmount: 15000,
    interestRate: "6.2%",
    tenure: "6 to 18 Months",
    installments: "Monthly",
    recommended: true,
    badge: "Most Popular",
    description: "Empower inventory restocking, equipment purchases, or working capital expansion with zero friction."
  },
  {
    id: "enterprise-loan",
    name: "Premier Commercial Loan",
    category: "Corporate & Investment",
    minAmount: 15000,
    maxAmount: 40000,
    interestRate: "7.8%",
    tenure: "12 to 36 Months",
    installments: "Monthly or Bi-Monthly",
    recommended: false,
    badge: "High Capital",
    description: "Substantial capital deployment for institutional ventures, international trade financing, and acquisitions."
  }
];

export const DPS_PLANS = [
  {
    id: "dps-silver",
    name: "Silver Growth DPS",
    installment: "$100 / Month",
    minInstallment: 100,
    duration: "12 Months",
    interestRate: "9.5% p.a.",
    totalReturn: "$1,314.00",
    badge: "Entry Tier"
  },
  {
    id: "dps-gold",
    name: "Gold Retirement DPS",
    installment: "$300 / Month",
    minInstallment: 300,
    duration: "24 Months",
    interestRate: "12.0% p.a.",
    totalReturn: "$8,064.00",
    badge: "Recommended"
  },
  {
    id: "dps-platinum",
    name: "Platinum Wealth DPS",
    installment: "$1,000 / Month",
    minInstallment: 1000,
    duration: "36 Months",
    interestRate: "14.5% p.a.",
    totalReturn: "$43,920.00",
    badge: "High Net Worth"
  }
];

export const FDR_PLANS = [
  {
    id: "fdr-3m",
    name: "Quarterly Fixed Yield",
    minDeposit: 1000,
    maxDeposit: 10000,
    duration: "90 Days (3 Months)",
    interestRate: "7.0% APR",
    payout: "At Maturity"
  },
  {
    id: "fdr-1y",
    name: "Annual Sovereign FDR",
    minDeposit: 5000,
    maxDeposit: 50000,
    duration: "1 Year",
    interestRate: "11.5% APR",
    payout: "Monthly or Maturity"
  },
  {
    id: "fdr-3y",
    name: "Triennial Wealth Builder",
    minDeposit: 10000,
    maxDeposit: 100000,
    duration: "3 Years",
    interestRate: "15.0% APR",
    payout: "Quarterly"
  }
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Open Your Account",
    desc: "Complete registration in less than 2 minutes. Provide basic identity credentials and select your country.",
    icon: "UserCheck"
  },
  {
    step: "02",
    title: "Fund Your Main Wallet",
    desc: "Deposit funds securely through bank transfer, crypto gateway, or debit/credit card with zero latency.",
    icon: "ShieldAlert"
  },
  {
    step: "03",
    title: "Select Plans or Send Money",
    desc: "Subscribe to high-yield DPS/FDR, apply for an instant online loan, or wire funds internationally.",
    icon: "Sparkles"
  },
  {
    step: "04",
    title: "Track & Withdraw Profits",
    desc: "Watch interest credited directly to your Profit Wallet. Request instant withdrawals to your bank anytime.",
    icon: "CheckCircle2"
  }
];

export const TESTIMONIALS = [
  {
    name: "Marcus Vance",
    role: "Managing Director, Vance Logistics Ltd.",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    text: "WorkTrust International restructured our corporate payroll and provided our SME growth loan within 18 hours. The dual-wallet transparency and wire transfer reliability are unmatched in modern fintech.",
    rating: 5
  },
  {
    name: "Elena Rostova",
    role: "Private Investor & Consultant",
    location: "Zurich, Switzerland",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    text: "I have held three FDR certificates and a Gold DPS with WorkTrust over the past two years. Returns are always credited on the exact calendar day. Customer support via email is remarkably attentive.",
    rating: 5
  },
  {
    name: "Adebayo Olawale",
    role: "Founder, Apex Cloud Innovations",
    location: "Toronto, Canada",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    text: "Having a platform where we can manage enterprise loans, fixed yields, and international employee transfers under a single responsive dashboard has streamlined our business operations completely.",
    rating: 5
  }
];

export const FAQS = [
  {
    question: "How does WorkTrust International's Dual-Wallet system operate?",
    answer: "Your account is divided into two distinct, high-security balances: the Main Wallet (used for deposits, sending funds, loan repayments, and day-to-day balance) and the Profit Wallet (where daily/monthly interest from DPS, FDR, and multi-tier referral commissions are credited). You can transfer between wallets or withdraw from either with one click."
  },
  {
    question: "What are the requirements to apply for an online loan?",
    answer: "You must hold an active WorkTrust International account in good standing. Applications range from $500 up to $40,000 depending on the selected plan. You choose your installment tenure (3 to 36 months) and submit online. Our automated risk scoring evaluates requests typically within 2 to 24 hours."
  },
  {
    question: "What is the difference between DPS and FDR?",
    answer: "DPS (Deposit Pension Scheme) is an installment-based monthly savings program where you deposit a fixed sum every month (e.g., $100/mo) and receive compounding high returns. FDR (Fixed Deposit Receipt) is a one-time lump-sum deposit locked for a specific timeframe (e.g., 1 Year at 11.5% APR) with regular interest payouts."
  },
  {
    question: "Are international fund transfers subject to delays or hidden fees?",
    answer: "Transfers between internal WorkTrust account holders are 100% instant and have zero network fees. External international wire transfers (SWIFT/SEPA) are dispatched within the same business day at transparent, institutional foreign exchange rates."
  },
  {
    question: "How does the Multi-Level Referral program work?",
    answer: "Every registered member receives a unique referral link. When your invited members deposit or activate DPS/FDR plans, you earn tier-based referral commissions (Level 1: 5%, Level 2: 3%, Level 3: 1%) credited immediately to your Profit Wallet."
  },
  {
    question: "How is my personal data and account capital protected?",
    answer: "WorkTrust employs military-grade 256-bit AES encryption, ISO/IEC 27001 compliant cloud infrastructure, automated anti-fraud monitoring, and strict cold-storage protocols for user reserves."
  }
];

export const COUNTRIES = [
  { code: "US", name: "United States", dial: "+1" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "CA", name: "Canada", dial: "+1" },
  { code: "AU", name: "Australia", dial: "+61" },
  { code: "DE", name: "Germany", dial: "+49" },
  { code: "FR", name: "France", dial: "+33" },
  { code: "CH", name: "Switzerland", dial: "+41" },
  { code: "SG", name: "Singapore", dial: "+65" },
  { code: "AE", name: "United Arab Emirates", dial: "+971" },
  { code: "ZA", name: "South Africa", dial: "+27" },
  { code: "NG", name: "Nigeria", dial: "+234" },
  { code: "IN", name: "India", dial: "+91" },
  { code: "MY", name: "Malaysia", dial: "+60" },
  { code: "BR", name: "Brazil", dial: "+55" }
];

export const INITIAL_USER_DATA = {
  name: "Alexander Hayes",
  email: "alexander.hayes@example.com",
  accountNo: "WTI-89410294",
  country: "United States",
  mainBalance: 12450.00,
  profitBalance: 3180.50,
  totalDeposited: 25000.00,
  totalWithdrawn: 9369.50,
  activeLoans: 1,
  activeDPS: 2,
  activeFDR: 1,
  transactions: [
    { id: "TX-9012", type: "deposit", desc: "Wire Transfer Deposit", amount: 5000.00, date: "Nov 06, 2026", status: "Completed", wallet: "Main" },
    { id: "TX-9011", type: "profit", desc: "Gold Retirement DPS Monthly Return", amount: 36.00, date: "Nov 05, 2026", status: "Credited", wallet: "Profit" },
    { id: "TX-9010", type: "transfer", desc: "Transfer to WT-66289 (Canary Tech)", amount: -1200.00, date: "Nov 03, 2026", status: "Completed", wallet: "Main" },
    { id: "TX-9009", type: "loan", desc: "Business Growth Loan Installment", amount: -420.00, date: "Oct 28, 2026", status: "Paid", wallet: "Main" },
    { id: "TX-9008", type: "referral", desc: "Tier 1 Referral Bonus (user: SarahM)", amount: 85.00, date: "Oct 22, 2026", status: "Credited", wallet: "Profit" }
  ]
};

