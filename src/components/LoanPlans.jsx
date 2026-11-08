import React, { useState } from 'react';
import { 
  Coins, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Percent, 
  Calendar,
  X,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { LOAN_PLANS } from '../data/mockData';

export default function LoanPlans({ onOpenRegister, isLoggedIn, onApplyLoanSuccess }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loanAmount, setLoanAmount] = useState(5000);
  const [loanTenure, setLoanTenure] = useState(12);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);

  const handleOpenModal = (plan) => {
    setSelectedPlan(plan);
    setLoanAmount(plan.minAmount + (plan.maxAmount - plan.minAmount) / 2);
    setApplySuccess(false);
  };

  const calculateMonthlyInstallment = () => {
    if (!selectedPlan) return 0;
    const rate = parseFloat(selectedPlan.interestRate) / 100 / 12;
    const n = loanTenure;
    const emi = (loanAmount * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
    return isNaN(emi) ? (loanAmount / n).toFixed(2) : emi.toFixed(2);
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setApplySuccess(true);
      if (onApplyLoanSuccess) {
        onApplyLoanSuccess({
          planName: selectedPlan.name,
          amount: loanAmount,
          tenure: loanTenure,
          monthly: calculateMonthlyInstallment()
        });
      }
    }, 1000);
  };

  return (
    <section id="loans" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold tracking-wide uppercase border border-emerald-200/60 mb-3">
            <Coins className="w-3.5 h-3.5" />
            <span>Transparent Borrowing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Flexible Online Loans From $500 up to $40,000
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Fast automated eligibility evaluation, flexible repayment schedules, and transparent interest rates with zero prepayment penalties.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {LOAN_PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.recommended
                  ? 'bg-gradient-to-b from-navy-950 via-navy-900 to-brand-950 text-white shadow-2xl scale-105 border-2 border-brand-500/50 z-10'
                  : 'bg-white text-slate-800 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {/* Badge */}
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-navy-950 text-xs font-bold uppercase tracking-wider shadow-md flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${plan.recommended ? 'text-brand-300' : 'text-brand-600'}`}>
                    {plan.category}
                  </span>
                  {!plan.recommended && (
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <h3 className={`text-2xl font-bold mb-2 ${plan.recommended ? 'text-white' : 'text-navy-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs leading-relaxed mb-6 ${plan.recommended ? 'text-slate-300' : 'text-slate-500'}`}>
                  {plan.description}
                </p>

                {/* Amount Limits */}
                <div className={`p-4 rounded-xl mb-6 ${plan.recommended ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-100'}`}>
                  <p className={`text-[11px] uppercase font-semibold ${plan.recommended ? 'text-slate-400' : 'text-slate-500'}`}>Loan Amount Range</p>
                  <p className={`text-2xl font-extrabold mt-1 ${plan.recommended ? 'text-brand-300' : 'text-navy-900'}`}>
                    ${plan.minAmount.toLocaleString()} <span className="text-sm font-normal text-slate-400">to</span> ${plan.maxAmount.toLocaleString()}
                  </p>
                </div>

                {/* Specifications List */}
                <div className="space-y-3 pt-2 mb-8">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className={`flex items-center space-x-2 ${plan.recommended ? 'text-slate-300' : 'text-slate-600'}`}>
                      <Percent className="w-4 h-4 text-brand-400" />
                      <span>Interest Rate</span>
                    </span>
                    <span className="font-bold">{plan.interestRate} Fixed APR</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className={`flex items-center space-x-2 ${plan.recommended ? 'text-slate-300' : 'text-slate-600'}`}>
                      <Clock className="w-4 h-4 text-brand-400" />
                      <span>Repayment Tenure</span>
                    </span>
                    <span className="font-semibold">{plan.tenure}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className={`flex items-center space-x-2 ${plan.recommended ? 'text-slate-300' : 'text-slate-600'}`}>
                      <Calendar className="w-4 h-4 text-brand-400" />
                      <span>Installment Cycle</span>
                    </span>
                    <span className="font-semibold">{plan.installments}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className={`flex items-center space-x-2 ${plan.recommended ? 'text-slate-300' : 'text-slate-600'}`}>
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Collateral Policy</span>
                    </span>
                    <span className="font-medium text-emerald-500">None Required</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleOpenModal(plan)}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg ${
                  plan.recommended
                    ? 'bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white shadow-brand-600/40'
                    : 'bg-navy-900 hover:bg-brand-600 text-white shadow-slate-900/10'
                }`}
              >
                <span>Apply For This Loan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Loan Application Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {applySuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Application Submitted!</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Your loan request for <strong className="text-navy-900">${loanAmount.toLocaleString()}</strong> under the <strong>{selectedPlan.name}</strong> has been logged. Our risk review team will update your account status within 4 to 12 hours.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                  <div className="flex justify-between">
                    <span>Requested Amount:</span>
                    <span className="font-bold">${loanAmount.toLocaleString()} USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Monthly EMI:</span>
                    <span className="font-bold text-emerald-600">${calculateMonthlyInstallment()} / mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tenure:</span>
                    <span className="font-bold">{loanTenure} Months</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="w-full py-3 rounded-xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-500 transition"
                >
                  Close & View Dashboard
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-brand-50 text-brand-700 uppercase tracking-wide">
                    {selectedPlan.name}
                  </span>
                  <h3 className="text-2xl font-bold text-navy-900 mt-2">Configure Loan Parameters</h3>
                  <p className="text-xs text-slate-500 mt-1">Adjust your desired amount and repayment term to view real-time installment calculations.</p>
                </div>

                {/* Amount Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700">Loan Amount:</span>
                    <span className="font-extrabold text-navy-900 text-lg">${Number(loanAmount).toLocaleString()} USD</span>
                  </div>
                  <input
                    type="range"
                    min={selectedPlan.minAmount}
                    max={selectedPlan.maxAmount}
                    step={100}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Min: ${selectedPlan.minAmount}</span>
                    <span>Max: ${selectedPlan.maxAmount}</span>
                  </div>
                </div>

                {/* Tenure Selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Repayment Duration (Months)
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[3, 6, 12, 24].map((m) => (
                      <button
                        type="button"
                        key={m}
                        onClick={() => setLoanTenure(m)}
                        className={`py-2 rounded-lg text-xs font-semibold border transition ${
                          loanTenure === m
                            ? 'bg-brand-600 text-white border-brand-600'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {m} Mos
                      </button>
                    ))}
                  </div>
                </div>

                {/* Monthly EMI calculation highlight */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-brand-50 to-blue-50 border border-brand-200/60 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-600 font-medium">Estimated Monthly Installment:</p>
                    <p className="text-2xl font-extrabold text-brand-700">${calculateMonthlyInstallment()} <span className="text-xs font-normal text-slate-500">/ mo</span></p>
                  </div>
                  <div className="text-right text-xs text-slate-500">
                    <p>Rate: <strong className="text-slate-800">{selectedPlan.interestRate}</strong></p>
                    <p>Approval: <strong className="text-emerald-600">Automated</strong></p>
                  </div>
                </div>

                {/* Purpose of Loan */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Purpose of Loan</label>
                  <select className="w-full text-sm py-2.5 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white">
                    <option>Business Expansion / Working Capital</option>
                    <option>Personal & Emergency Contingency</option>
                    <option>Equipment or Inventory Purchase</option>
                    <option>Debt Consolidation</option>
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition shadow-lg shadow-brand-600/30 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Verifying Application...</span>
                    </span>
                  ) : (
                    <span>Confirm & Submit Application</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

