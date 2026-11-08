import React, { useState } from 'react';
import { 
  X, 
  Wallet, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Send, 
  PlusCircle, 
  CreditCard, 
  ShieldCheck, 
  Coins, 
  RefreshCw, 
  Search, 
  Download,
  CheckCircle2,
  AlertCircle,
  Building2,
  Copy,
  Check
} from 'lucide-react';
import { INITIAL_USER_DATA } from '../data/mockData';

export default function DashboardModal({ isOpen, onClose, user }) {
  const [userData, setUserData] = useState(INITIAL_USER_DATA);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'transfer', 'deposit', 'transactions'
  const [copied, setCopied] = useState(false);

  // Transfer form state
  const [transferData, setTransferData] = useState({
    recipient: '',
    amount: '',
    note: '',
    wallet: 'Main'
  });
  const [transferSuccess, setTransferSuccess] = useState(false);

  // Deposit form state
  const [depositData, setDepositData] = useState({
    amount: '',
    method: 'International Wire (SWIFT)',
  });
  const [depositSuccess, setDepositSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(userData.accountNo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendTransfer = (e) => {
    e.preventDefault();
    const amt = parseFloat(transferData.amount);
    if (isNaN(amt) || amt <= 0) return;
    if (amt > userData.mainBalance) {
      alert("Insufficient funds in Main Wallet!");
      return;
    }

    const newTx = {
      id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
      type: 'transfer',
      desc: `Transfer to ${transferData.recipient}`,
      amount: -amt,
      date: 'Just now',
      status: 'Completed',
      wallet: 'Main'
    };

    setUserData({
      ...userData,
      mainBalance: userData.mainBalance - amt,
      transactions: [newTx, ...userData.transactions]
    });

    setTransferSuccess(true);
    setTimeout(() => {
      setTransferSuccess(false);
      setTransferData({ recipient: '', amount: '', note: '', wallet: 'Main' });
      setActiveTab('overview');
    }, 1800);
  };

  const handleDepositSubmit = (e) => {
    e.preventDefault();
    const amt = parseFloat(depositData.amount);
    if (isNaN(amt) || amt <= 0) return;

    const newTx = {
      id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
      type: 'deposit',
      desc: `${depositData.method} Inflow`,
      amount: amt,
      date: 'Just now',
      status: 'Completed',
      wallet: 'Main'
    };

    setUserData({
      ...userData,
      mainBalance: userData.mainBalance + amt,
      totalDeposited: userData.totalDeposited + amt,
      transactions: [newTx, ...userData.transactions]
    });

    setDepositSuccess(true);
    setTimeout(() => {
      setDepositSuccess(false);
      setDepositData({ amount: '', method: 'International Wire (SWIFT)' });
      setActiveTab('overview');
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-slate-100 rounded-2xl max-w-5xl w-full shadow-2xl relative border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[92vh]">
        
        {/* Top Header Bar */}
        <div className="bg-navy-950 text-white p-5 sm:px-8 flex justify-between items-center border-b border-white/10 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-teal flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base sm:text-lg font-bold">{user?.name || userData.name}</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center space-x-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>KYC Verified</span>
                </span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <span>Account ID: <strong className="text-slate-200 font-mono">{userData.accountNo}</strong></span>
                <button 
                  onClick={handleCopyAccount}
                  className="hover:text-white transition"
                  title="Copy account number"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-1 text-xs text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Live Ledger Connected</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition"
              aria-label="Close portal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="bg-white px-5 sm:px-8 border-b border-slate-200 flex space-x-4 sm:space-x-8 text-xs sm:text-sm font-semibold text-slate-600 shrink-0 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 border-b-2 transition whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-brand-600 text-brand-600 font-bold'
                : 'border-transparent hover:text-navy-900'
            }`}
          >
            Dashboard Overview
          </button>
          <button
            onClick={() => setActiveTab('transfer')}
            className={`py-3.5 border-b-2 transition whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'transfer'
                ? 'border-brand-600 text-brand-600 font-bold'
                : 'border-transparent hover:text-navy-900'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send / Wire Transfer</span>
          </button>
          <button
            onClick={() => setActiveTab('deposit')}
            className={`py-3.5 border-b-2 transition whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'deposit'
                ? 'border-brand-600 text-brand-600 font-bold'
                : 'border-transparent hover:text-navy-900'
            }`}
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Add Funds (Deposit)</span>
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`py-3.5 border-b-2 transition whitespace-nowrap ${
              activeTab === 'transactions'
                ? 'border-brand-600 text-brand-600 font-bold'
                : 'border-transparent hover:text-navy-900'
            }`}
          >
            Transactions Ledger
          </button>
        </div>

        {/* Dashboard Content Container */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 flex-1">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Dual Wallet Display Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Main Wallet */}
                <div className="rounded-2xl p-6 bg-gradient-to-br from-navy-950 via-navy-900 to-brand-950 text-white shadow-xl border border-white/10 relative overflow-hidden">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-brand-300">
                        <Wallet className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase font-semibold text-slate-400">Main Account Balance</p>
                        <p className="text-[10px] text-slate-400">Available for transfers & loans</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-brand-500/30 text-brand-300 border border-brand-500/40">
                      USD
                    </span>
                  </div>

                  <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    ${userData.mainBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Total Deposited: <strong className="text-white">${userData.totalDeposited.toLocaleString()}</strong></span>
                    <button
                      onClick={() => setActiveTab('transfer')}
                      className="px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-medium transition flex items-center space-x-1"
                    >
                      <Send className="w-3 h-3" />
                      <span>Transfer</span>
                    </button>
                  </div>
                </div>

                {/* Profit Wallet */}
                <div className="rounded-2xl p-6 bg-gradient-to-br from-slate-900 via-brand-950 to-navy-950 text-white shadow-xl border border-white/10 relative overflow-hidden">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase font-semibold text-slate-400">Profit & Yield Wallet</p>
                        <p className="text-[10px] text-emerald-400 font-medium">DPS, FDR & Referral Yields</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/30 text-emerald-300 border border-emerald-500/40">
                      Yield Active
                    </span>
                  </div>

                  <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    ${userData.profitBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Total Withdrawn: <strong className="text-white">${userData.totalWithdrawn.toLocaleString()}</strong></span>
                    <button
                      onClick={() => {
                        const amt = userData.profitBalance;
                        setUserData({
                          ...userData,
                          mainBalance: userData.mainBalance + amt,
                          profitBalance: 0,
                          transactions: [
                            {
                              id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
                              type: 'transfer',
                              desc: 'Transfer Profit Wallet to Main Wallet',
                              amount: amt,
                              date: 'Just now',
                              status: 'Completed',
                              wallet: 'Main'
                            },
                            ...userData.transactions
                          ]
                        });
                        alert(`Successfully transferred $${amt.toFixed(2)} from Profit Wallet to Main Wallet!`);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition flex items-center space-x-1"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Move to Main</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Facility Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase">Active Loan Facility</p>
                  <p className="text-xl font-bold text-navy-900 mt-1">{userData.activeLoans} Active</p>
                  <span className="text-[10px] text-emerald-600 font-medium">Next EMI: Nov 28</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase">DPS Subscriptions</p>
                  <p className="text-xl font-bold text-navy-900 mt-1">{userData.activeDPS} Running</p>
                  <span className="text-[10px] text-brand-600 font-medium">Monthly yield active</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase">FDR Certificates</p>
                  <p className="text-xl font-bold text-navy-900 mt-1">{userData.activeFDR} Fixed Term</p>
                  <span className="text-[10px] text-slate-500">Maturity: Aug 2027</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase">Referral Network</p>
                  <p className="text-xl font-bold text-navy-900 mt-1">14 Members</p>
                  <span className="text-[10px] text-amber-600 font-medium">Tier 1 & 2 Active</span>
                </div>
              </div>

              {/* Recent Activity Table Preview */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-base font-bold text-navy-900">Recent Transactions & Disbursals</h4>
                  <button
                    onClick={() => setActiveTab('transactions')}
                    className="text-xs font-semibold text-brand-600 hover:underline"
                  >
                    View All Activity →
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-400 uppercase font-semibold">
                        <th className="pb-3">Reference</th>
                        <th className="pb-3">Description</th>
                        <th className="pb-3">Target Wallet</th>
                        <th className="pb-3">Date</th>
                        <th className="pb-3 text-right">Amount</th>
                        <th className="pb-3 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {userData.transactions.slice(0, 4).map((tx) => (
                        <tr key={tx.id} className="hover:bg-slate-50">
                          <td className="py-3 font-mono font-medium text-slate-700">{tx.id}</td>
                          <td className="py-3 font-medium text-navy-900">{tx.desc}</td>
                          <td className="py-3">
                            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                              {tx.wallet}
                            </span>
                          </td>
                          <td className="py-3 text-slate-500">{tx.date}</td>
                          <td className={`py-3 font-bold text-right ${tx.amount > 0 ? 'text-emerald-600' : 'text-slate-800'}`}>
                            {tx.amount > 0 ? `+$${tx.amount.toFixed(2)}` : `-$${Math.abs(tx.amount).toFixed(2)}`}
                          </td>
                          <td className="py-3 text-right">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              {tx.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: TRANSFER / WIRE */}
          {activeTab === 'transfer' && (
            <div className="max-w-xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md animate-fadeIn">
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 mx-auto flex items-center justify-center mb-2">
                  <Send className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">Instant Global Wire & Member Transfer</h3>
                <p className="text-xs text-slate-500">Send money instantly using recipient WorkTrust Account ID or international IBAN.</p>
              </div>

              {transferSuccess ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-navy-900">Transfer Completed Successfully!</h4>
                  <p className="text-xs text-slate-600">
                    Funds have been debited from your Main Wallet and settlement notification has been transmitted to recipient.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendTransfer} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Recipient Account ID or IBAN *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. WTI-662890 or US89WTBK..."
                      value={transferData.recipient}
                      onChange={(e) => setTransferData({ ...transferData, recipient: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-semibold text-slate-700">Transfer Amount ($ USD) *</label>
                      <span className="text-[11px] text-slate-500">
                        Available: <strong>${userData.mainBalance.toLocaleString()}</strong>
                      </span>
                    </div>
                    <input
                      type="number"
                      required
                      min={1}
                      max={userData.mainBalance}
                      step={0.01}
                      placeholder="500.00"
                      value={transferData.amount}
                      onChange={(e) => setTransferData({ ...transferData, amount: e.target.value })}
                      className="w-full text-base font-bold px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Payment Reference / Note</label>
                    <input
                      type="text"
                      placeholder="e.g. Invoice settlement or Personal transfer"
                      value={transferData.note}
                      onChange={(e) => setTransferData({ ...transferData, note: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Network Routing Fee:</span>
                      <strong className="text-emerald-600">$0.00 (Zero Fee Member Rail)</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Execution Speed:</span>
                      <strong className="text-navy-900">Instant Real-Time Settlement</strong>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition shadow-lg shadow-brand-600/30 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Authorize Wire Transfer</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 3: DEPOSIT */}
          {activeTab === 'deposit' && (
            <div className="max-w-xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md animate-fadeIn">
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-2">
                  <PlusCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">Deposit Funds to Main Wallet</h3>
                <p className="text-xs text-slate-500">Fund your account seamlessly via bank wire, cards, or digital clearing.</p>
              </div>

              {depositSuccess ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-navy-900">Deposit Processed Successfully!</h4>
                  <p className="text-xs text-slate-600">
                    Your Main Wallet balance has been credited immediately. You can now subscribe to DPS/FDR or wire funds.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDepositSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Deposit Payment Method</label>
                    <select
                      value={depositData.method}
                      onChange={(e) => setDepositData({ ...depositData, method: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      <option>International Wire (SWIFT / SEPA)</option>
                      <option>Domestic ACH Direct Transfer</option>
                      <option>Visa / Mastercard Commercial Gateway</option>
                      <option>Crypto Settlement (USDT / USDC / BTC)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Deposit Amount ($ USD) *</label>
                    <input
                      type="number"
                      required
                      min={50}
                      step={10}
                      placeholder="1000.00"
                      value={depositData.amount}
                      onChange={(e) => setDepositData({ ...depositData, amount: e.target.value })}
                      className="w-full text-base font-bold px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">Minimum deposit: $50.00 USD</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
                    <div className="flex justify-between">
                      <span>Destination Wallet:</span>
                      <strong className="text-brand-600">Main Account Balance</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Gateway Fee:</span>
                      <strong className="text-emerald-600">0.00% Promotional Waiver</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Security:</span>
                      <strong className="text-slate-800">Bank-Grade Escrow Vault</strong>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition shadow-lg shadow-emerald-600/30 flex items-center justify-center space-x-2"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Confirm & Fund Wallet</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 4: TRANSACTIONS LEDGER */}
          {activeTab === 'transactions' && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <h4 className="text-base font-bold text-navy-900">Complete Financial Ledger</h4>
                  <p className="text-xs text-slate-500">Historical archive of all deposits, DPS returns, and wire transfers.</p>
                </div>
                <button
                  onClick={() => alert("Statement generated! Downloading PDF statement...")}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition flex items-center space-x-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Statement</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 uppercase font-semibold">
                      <th className="pb-3">Reference ID</th>
                      <th className="pb-3">Details</th>
                      <th className="pb-3">Wallet</th>
                      <th className="pb-3">Timestamp</th>
                      <th className="pb-3 text-right">Amount</th>
                      <th className="pb-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {userData.transactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-slate-50">
                        <td className="py-3 font-mono font-medium text-slate-700">{tx.id}</td>
                        <td className="py-3 font-medium text-navy-900">{tx.desc}</td>
                        <td className="py-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                            tx.wallet === 'Profit' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-brand-50 text-brand-700 border border-brand-200'
                          }`}>
                            {tx.wallet} Wallet
                          </span>
                        </td>
                        <td className="py-3 text-slate-500">{tx.date}</td>
                        <td className={`py-3 font-bold text-right ${tx.amount > 0 ? 'text-emerald-600' : 'text-slate-800'}`}>
                          {tx.amount > 0 ? `+$${tx.amount.toFixed(2)}` : `-$${Math.abs(tx.amount).toFixed(2)}`}
                        </td>
                        <td className="py-3 text-right">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {tx.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

