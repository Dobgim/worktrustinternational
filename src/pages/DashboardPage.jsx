import React, { useState } from 'react';
import { 
  Wallet, 
  TrendingUp, 
  Send, 
  PlusCircle, 
  ShieldCheck, 
  RefreshCw, 
  Download, 
  CheckCircle2, 
  CreditCard,
  Building2,
  Copy,
  Check,
  User,
  ArrowRight,
  ArrowUpRight,
  ArrowDownLeft,
  FileCheck,
  Lock
} from 'lucide-react';
import { INITIAL_USER_DATA } from '../data/mockData';
import { Link } from 'react-router-dom';

export default function DashboardPage({ user, onLogout }) {
  const [userData, setUserData] = useState(INITIAL_USER_DATA);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'transfer', 'deposit', 'transactions', 'card'
  const [copied, setCopied] = useState(false);

  // Transfer form state
  const [transferData, setTransferData] = useState({
    recipient: '',
    amount: '',
    note: ''
  });
  const [transferSuccess, setTransferSuccess] = useState(false);

  // Deposit form state
  const [depositData, setDepositData] = useState({
    amount: '',
    method: 'International Wire (SWIFT)'
  });
  const [depositSuccess, setDepositSuccess] = useState(false);

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
      alert("Insufficient balance in Main Wallet!");
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
      setTransferData({ recipient: '', amount: '', note: '' });
      setActiveTab('overview');
    }, 1500);
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
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-100 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Card */}
        <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/10 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-teal flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-black">{user?.name || userData.name}</h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>KYC Verified</span>
                </span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-slate-400 mt-1">
                <span>Account Number: <strong className="text-white font-mono">{userData.accountNo}</strong></span>
                <button 
                  onClick={handleCopyAccount}
                  className="hover:text-white transition flex items-center space-x-1 bg-white/10 px-2 py-0.5 rounded text-[11px]"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('transfer')}
              className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold shadow transition flex items-center justify-center space-x-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Money</span>
            </button>
            <button
              onClick={() => setActiveTab('deposit')}
              className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow transition flex items-center justify-center space-x-2"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Add Funds</span>
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-sm mb-8 flex space-x-2 overflow-x-auto">
          {[
            { id: 'overview', label: 'Dashboard Overview' },
            { id: 'transfer', label: 'Wire Transfer' },
            { id: 'deposit', label: 'Deposit Liquidity' },
            { id: 'card', label: 'Virtual Card' },
            { id: 'transactions', label: 'Historical Ledger' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-brand-600 text-white shadow'
                  : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Dual Wallet Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Main Wallet */}
              <div className="rounded-3xl p-7 bg-gradient-to-br from-navy-950 via-navy-900 to-brand-950 text-white shadow-xl border border-white/10 relative overflow-hidden">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-300">
                      <Wallet className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-semibold text-slate-400">Main Operational Balance</p>
                      <p className="text-[10px] text-slate-400">Available for wire transfers & loan servicing</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-brand-500/30 text-brand-300 border border-brand-500/40">
                    USD
                  </span>
                </div>

                <p className="text-4xl font-black text-white tracking-tight mt-2">
                  ${userData.mainBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Total Inflow: <strong className="text-white">${userData.totalDeposited.toLocaleString()}</strong></span>
                  <button
                    onClick={() => setActiveTab('transfer')}
                    className="px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-semibold transition"
                  >
                    Wire Transfer →
                  </button>
                </div>
              </div>

              {/* Profit Wallet */}
              <div className="rounded-3xl p-7 bg-gradient-to-br from-slate-900 via-brand-950 to-navy-950 text-white shadow-xl border border-white/10 relative overflow-hidden">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-semibold text-slate-400">Profit & Yield Wallet</p>
                      <p className="text-[10px] text-emerald-400 font-medium">DPS, FDR & Affiliate Commissions</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-500/30 text-emerald-300 border border-emerald-500/40">
                    Auto-Credited
                  </span>
                </div>

                <p className="text-4xl font-black text-white tracking-tight mt-2">
                  ${userData.profitBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
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
                            desc: 'Transfer Profit to Main Wallet',
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
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition flex items-center space-x-1"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Move to Main Balance</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Quick Financial Overview Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-xs font-semibold text-slate-500 uppercase">Active Loan</p>
                <p className="text-2xl font-extrabold text-navy-900 mt-1">{userData.activeLoans} Active</p>
                <Link to="/loans" className="text-[11px] text-brand-600 font-semibold hover:underline mt-1 block">
                  Business Growth Tier →
                </Link>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-xs font-semibold text-slate-500 uppercase">DPS Subscriptions</p>
                <p className="text-2xl font-extrabold text-navy-900 mt-1">{userData.activeDPS} Running</p>
                <Link to="/investments" className="text-[11px] text-emerald-600 font-semibold hover:underline mt-1 block">
                  12.0% p.a. Compounding →
                </Link>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-xs font-semibold text-slate-500 uppercase">FDR Certificates</p>
                <p className="text-2xl font-extrabold text-navy-900 mt-1">{userData.activeFDR} Fixed Term</p>
                <Link to="/investments" className="text-[11px] text-brand-600 font-semibold hover:underline mt-1 block">
                  View Certificate →
                </Link>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-xs font-semibold text-slate-500 uppercase">Affiliate Network</p>
                <p className="text-2xl font-extrabold text-navy-900 mt-1">14 Referrals</p>
                <Link to="/referrals" className="text-[11px] text-amber-600 font-semibold hover:underline mt-1 block">
                  Tier 1 & 2 Active →
                </Link>
              </div>
            </div>

            {/* Transaction Activity Table */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-lg font-bold text-navy-900">Recent Transactions Ledger</h3>
                <button
                  onClick={() => setActiveTab('transactions')}
                  className="text-xs font-bold text-brand-600 hover:underline"
                >
                  View Complete Ledger →
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 uppercase font-semibold text-xs">
                      <th className="pb-3">Reference</th>
                      <th className="pb-3">Description</th>
                      <th className="pb-3">Wallet</th>
                      <th className="pb-3">Date</th>
                      <th className="pb-3 text-right">Amount</th>
                      <th className="pb-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {userData.transactions.slice(0, 5).map((tx) => (
                      <tr key={tx.id} className="hover:bg-slate-50">
                        <td className="py-3.5 font-mono font-medium text-slate-700">{tx.id}</td>
                        <td className="py-3.5 font-semibold text-navy-900">{tx.desc}</td>
                        <td className="py-3.5">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                            tx.wallet === 'Profit' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-brand-50 text-brand-700 border border-brand-200'
                          }`}>
                            {tx.wallet}
                          </span>
                        </td>
                        <td className="py-3.5 text-slate-500 text-xs">{tx.date}</td>
                        <td className={`py-3.5 font-bold text-right ${tx.amount > 0 ? 'text-emerald-600' : 'text-slate-800'}`}>
                          {tx.amount > 0 ? `+$${tx.amount.toFixed(2)}` : `-$${Math.abs(tx.amount).toFixed(2)}`}
                        </td>
                        <td className="py-3.5 text-right">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
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

        {/* TAB 2: WIRE TRANSFER */}
        {activeTab === 'transfer' && (
          <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 border border-slate-200 shadow-xl animate-fadeIn">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 mx-auto flex items-center justify-center mb-2">
                <Send className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-navy-900">Instant Wire Transfer</h2>
              <p className="text-xs text-slate-500">Transmit funds instantaneously across internal WorkTrust accounts or global IBANs.</p>
            </div>

            {transferSuccess ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">Transfer Dispatched!</h3>
                <p className="text-xs text-slate-600">
                  ${transferData.amount} has been debited from your Main Wallet. Digital transfer receipt generated.
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
                    <label className="text-xs font-semibold text-slate-700">Amount ($ USD) *</label>
                    <span className="text-[11px] text-slate-500">Available: <strong>${userData.mainBalance.toLocaleString()}</strong></span>
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
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Reference Note</label>
                  <input
                    type="text"
                    placeholder="e.g. Supplier invoice or personal support"
                    value={transferData.note}
                    onChange={(e) => setTransferData({ ...transferData, note: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Routing Fee:</span>
                    <strong className="text-emerald-600">$0.00 (Zero Fee Member Rail)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Settlement Speed:</span>
                    <strong className="text-navy-900">Real-Time Instant Settlement</strong>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition shadow-lg shadow-brand-600/30 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Authorize Transfer</span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* TAB 3: DEPOSIT */}
        {activeTab === 'deposit' && (
          <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 border border-slate-200 shadow-xl animate-fadeIn">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-2">
                <PlusCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-navy-900">Deposit Capital</h2>
              <p className="text-xs text-slate-500">Fund your Main Wallet via SWIFT, SEPA, Cards, or Cryptocurrency.</p>
            </div>

            {depositSuccess ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">Funds Deposited!</h3>
                <p className="text-xs text-slate-600">
                  Your Main Wallet has been credited with ${depositData.amount} USD.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDepositSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Gateway Rail</label>
                  <select
                    value={depositData.method}
                    onChange={(e) => setDepositData({ ...depositData, method: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option>International Wire (SWIFT / SEPA)</option>
                    <option>Visa / Mastercard Commercial Gateway</option>
                    <option>USDT Crypto Settlement (TRC20 / ERC20)</option>
                    <option>Bitcoin (BTC Vault Clearing)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Deposit Sum ($ USD) *</label>
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

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Surcharge:</span>
                    <strong className="text-emerald-600">0.00% Free</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Custody:</span>
                    <strong className="text-slate-800">Air-Gapped Escrow Vault</strong>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition shadow-lg shadow-emerald-600/30 flex items-center justify-center space-x-2"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Execute Deposit</span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* TAB 4: VIRTUAL CARD */}
        {activeTab === 'card' && (
          <div className="max-w-2xl mx-auto space-y-6 animate-fadeIn">
            {/* Card Widget */}
            <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900 via-navy-950 to-brand-950 text-white shadow-2xl border border-white/20 relative overflow-hidden">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <span className="text-lg font-black tracking-wide">WorkTrust</span>
                  <p className="text-[9px] uppercase tracking-widest text-slate-400">International Platinum Debit</p>
                </div>
                <div className="w-11 h-8 rounded bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 border border-amber-300/40 flex items-center justify-center">
                  <div className="w-9 h-6 border border-black/20 rounded-sm"></div>
                </div>
              </div>

              <div className="font-mono text-2xl tracking-widest text-slate-100 font-semibold mb-8">
                4928 •••• •••• 8421
              </div>

              <div className="flex justify-between items-end pt-3 border-t border-white/10 text-xs">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase">Cardholder</p>
                  <p className="font-bold text-white uppercase">{user?.name || userData.name}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase">Expires</p>
                  <p className="font-mono text-white">11/29</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase">CVV</p>
                  <p className="font-mono text-white">842</p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-navy-900">Virtual Card Security Controls</h3>
              <div className="flex items-center justify-between py-2 border-b border-slate-100 text-xs">
                <span>Card Status:</span>
                <span className="font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">Active & Unlocked</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100 text-xs">
                <span>Daily Online Limit:</span>
                <strong className="text-navy-900">$10,000.00 USD</strong>
              </div>
              <div className="flex items-center justify-between py-2 text-xs">
                <span>Contactless NFC Rail:</span>
                <strong className="text-emerald-600">Enabled</strong>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: TRANSACTIONS LEDGER */}
        {activeTab === 'transactions' && (
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-5 animate-fadeIn">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h3 className="text-lg font-bold text-navy-900">Complete Financial Ledger</h3>
                <p className="text-xs text-slate-500">Historical archive of all settlements, DPS profit disbursements, and wire transfers.</p>
              </div>
              <button
                onClick={() => alert("PDF Statement downloaded!")}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition flex items-center space-x-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Export Statement (PDF)</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 uppercase font-semibold text-xs">
                    <th className="pb-3">Reference ID</th>
                    <th className="pb-3">Transaction Description</th>
                    <th className="pb-3">Ledger Wallet</th>
                    <th className="pb-3">Timestamp</th>
                    <th className="pb-3 text-right">Amount</th>
                    <th className="pb-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {userData.transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-slate-50">
                      <td className="py-3.5 font-mono font-medium text-slate-700">{tx.id}</td>
                      <td className="py-3.5 font-semibold text-navy-900">{tx.desc}</td>
                      <td className="py-3.5">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                          tx.wallet === 'Profit' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-brand-50 text-brand-700 border border-brand-200'
                        }`}>
                          {tx.wallet}
                        </span>
                      </td>
                      <td className="py-3.5 text-slate-500 text-xs">{tx.date}</td>
                      <td className={`py-3.5 font-bold text-right ${tx.amount > 0 ? 'text-emerald-600' : 'text-slate-800'}`}>
                        {tx.amount > 0 ? `+$${tx.amount.toFixed(2)}` : `-$${Math.abs(tx.amount).toFixed(2)}`}
                      </td>
                      <td className="py-3.5 text-right">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
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
  );
}

