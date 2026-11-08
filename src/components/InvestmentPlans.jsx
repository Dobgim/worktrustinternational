import React, { useState } from 'react';
import { 
  PiggyBank, 
  Landmark, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Percent, 
  Sparkles,
  TrendingUp,
  X
} from 'lucide-react';
import { DPS_PLANS, FDR_PLANS } from '../data/mockData';

export default function InvestmentPlans({ onSubscribeSuccess }) {
  const [activeTab, setActiveTab] = useState('dps'); // 'dps' or 'fdr'
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [investAmount, setInvestAmount] = useState(1000);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subSuccess, setSubSuccess] = useState(false);

  const handleOpenModal = (plan) => {
    setSelectedPlan(plan);
    setInvestAmount(plan.minInstallment || plan.minDeposit || 100);
    setSubSuccess(false);
  };

  const handleConfirmSubscription = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubSuccess(true);
      if (onSubscribeSuccess) {
        onSubscribeSuccess({
          planName: selectedPlan.name,
          type: activeTab.toUpperCase(),
          amount: investAmount
        });
      }
    }, 900);
  };

  return (
    <section id="investments" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold tracking-wide uppercase border border-brand-200/60 mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>High-Yield Wealth Accumulation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Guaranteed Yield DPS & FDR Schemes
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Choose between disciplined monthly pension deposits (DPS) or locked fixed deposit receipts (FDR) with verified capital security and auto-credited profit yields.
          </p>

          {/* Tab Selector */}
          <div className="mt-8 inline-flex p-1.5 rounded-xl bg-slate-200/80 border border-slate-300">
            <button
              onClick={() => setActiveTab('dps')}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 flex items-center space-x-2 ${
                activeTab === 'dps'
                  ? 'bg-white text-navy-900 shadow-md'
                  : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              <PiggyBank className="w-4 h-4 text-brand-600" />
              <span>DPS (Deposit Pension Scheme)</span>
            </button>
            <button
              onClick={() => setActiveTab('fdr')}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 flex items-center space-x-2 ${
                activeTab === 'fdr'
                  ? 'bg-white text-navy-900 shadow-md'
                  : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              <Landmark className="w-4 h-4 text-brand-600" />
              <span>FDR (Fixed Deposit Receipt)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: DPS Plans */}
        {activeTab === 'dps' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch animate-fadeIn">
            {DPS_PLANS.map((plan) => (
              <div 
                key={plan.id}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60">
                      {plan.badge}
                    </span>
                    <span className="text-xs font-semibold text-emerald-600 flex items-center space-x-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{plan.interestRate}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mb-6">Structured monthly installment scheme for disciplined wealth compounding.</p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                    <p className="text-[11px] text-slate-500 uppercase font-semibold">Monthly Installment</p>
                    <p className="text-2xl font-extrabold text-navy-900 mt-0.5">{plan.installment}</p>
                    <div className="mt-2 pt-2 border-t border-slate-200/60 flex justify-between text-xs text-slate-600">
                      <span>Tenure: <strong>{plan.duration}</strong></span>
                      <span>Maturity: <strong className="text-brand-600">{plan.totalReturn}</strong></span>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-600 mb-6">
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Auto-deduct or manual deposit option</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Profits credited directly to Profit Wallet</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Eligible for 70% emergency loan facility</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenModal(plan)}
                  className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition shadow-md shadow-brand-600/20 flex items-center justify-center space-x-2"
                >
                  <span>Start This DPS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: FDR Plans */}
        {activeTab === 'fdr' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch animate-fadeIn">
            {FDR_PLANS.map((plan) => (
              <div 
                key={plan.id}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      {plan.interestRate}
                    </span>
                    <span className="text-xs text-slate-500">{plan.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mb-6">Lump-sum capital lock with guaranteed high fixed yield payout.</p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                    <p className="text-[11px] text-slate-500 uppercase font-semibold">Deposit Bracket</p>
                    <p className="text-xl font-extrabold text-navy-900 mt-0.5">
                      ${plan.minDeposit.toLocaleString()} - ${plan.maxDeposit.toLocaleString()}
                    </p>
                    <div className="mt-2 pt-2 border-t border-slate-200/60 flex justify-between text-xs text-slate-600">
                      <span>Payout: <strong>{plan.payout}</strong></span>
                      <span>Lock: <strong>{plan.duration}</strong></span>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-600 mb-6">
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>100% Capital Principal Guaranteed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Instant digital certificate generation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Premature exit permitted per terms</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenModal(plan)}
                  className="w-full py-3 rounded-xl bg-navy-900 hover:bg-brand-600 text-white font-semibold text-sm transition shadow-md shadow-navy-900/10 flex items-center justify-center space-x-2"
                >
                  <span>Deposit Into FDR</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Subscription Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {subSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Plan Activated!</h3>
                <p className="text-sm text-slate-600">
                  Congratulations! Your subscription to <strong>{selectedPlan.name}</strong> has been successfully registered. Regular profit yields will automatically credit to your Profit Wallet.
                </p>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="w-full py-3 rounded-xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-500 transition"
                >
                  Back to Dashboard
                </button>
              </div>
            ) : (
              <form onSubmit={handleConfirmSubscription} className="space-y-5">
                <div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-brand-50 text-brand-700 uppercase">
                    {activeTab.toUpperCase()} Subscription
                  </span>
                  <h3 className="text-xl font-bold text-navy-900 mt-2">{selectedPlan.name}</h3>
                  <p className="text-xs text-slate-500">Fixed rate: {selectedPlan.interestRate} • Duration: {selectedPlan.duration}</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {activeTab === 'dps' ? 'Monthly Installment Amount ($)' : 'Lump-Sum Deposit Amount ($)'}
                  </label>
                  <input
                    type="number"
                    min={selectedPlan.minInstallment || selectedPlan.minDeposit}
                    max={selectedPlan.maxDeposit || 100000}
                    value={investAmount}
                    onChange={(e) => setInvestAmount(Number(e.target.value))}
                    className="w-full text-base font-bold py-2.5 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    Minimum allowed: ${selectedPlan.minInstallment || selectedPlan.minDeposit} USD
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
                  <div className="flex justify-between">
                    <span>Payment Source:</span>
                    <strong className="text-slate-800">Main Wallet Balance ($12,450.00)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Target Profit Account:</span>
                    <strong className="text-brand-600">Profit Wallet</strong>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition shadow-lg shadow-brand-600/30 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? 'Confirming with Blockchain/Vault...' : 'Authorize & Start Plan'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

