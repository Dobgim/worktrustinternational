import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, Calendar, Percent, ShieldCheck } from 'lucide-react';

export default function LoanCalculator({ onOpenRegister }) {
  const [calcMode, setCalcMode] = useState('loan'); // 'loan' or 'investment'
  const [amount, setAmount] = useState(10000);
  const [tenure, setTenure] = useState(12); // months
  const [rate, setRate] = useState(6.5); // %

  // Loan EMI formula: E = P * r * (1+r)^n / ((1+r)^n - 1)
  const calculateEMI = () => {
    const monthlyRate = rate / 100 / 12;
    if (monthlyRate === 0) return (amount / tenure).toFixed(2);
    const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
    return isNaN(emi) ? 0 : emi.toFixed(2);
  };

  const monthlyEMI = Number(calculateEMI());
  const totalLoanRepayment = (monthlyEMI * tenure).toFixed(2);
  const totalLoanInterest = (totalLoanRepayment - amount).toFixed(2);

  // Investment Simple/Compound Yield
  const calculateInvestmentMaturity = () => {
    const years = tenure / 12;
    const interest = amount * (rate / 100) * years;
    return (amount + interest).toFixed(2);
  };

  const totalInvestmentMaturity = Number(calculateInvestmentMaturity());
  const totalInvestmentProfit = (totalInvestmentMaturity - amount).toFixed(2);

  return (
    <section id="calculator" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wide uppercase border border-slate-200 mb-3">
            <Calculator className="w-3.5 h-3.5 text-brand-600" />
            <span>Real-Time Estimation Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Interactive Financial & Loan Calculator
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Estimate your monthly loan installments or simulate your high-yield fixed investment maturity before applying.
          </p>

          {/* Mode switch */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => { setCalcMode('loan'); setRate(6.5); }}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition ${
                calcMode === 'loan' ? 'bg-brand-600 text-white shadow' : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              Loan Repayment EMI
            </button>
            <button
              onClick={() => { setCalcMode('investment'); setRate(12.0); }}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition ${
                calcMode === 'investment' ? 'bg-brand-600 text-white shadow' : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              Fixed Yield (FDR/DPS) Growth
            </button>
          </div>
        </div>

        {/* Calculator Body Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Sliders Area */}
            <div className="md:col-span-7 space-y-7">
              {/* Amount slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {calcMode === 'loan' ? 'Borrowing Amount' : 'Investment Principal'}
                  </span>
                  <span className="text-xl font-extrabold text-brand-700">
                    ${Number(amount).toLocaleString()} USD
                  </span>
                </div>
                <input
                  type="range"
                  min={500}
                  max={calcMode === 'loan' ? 40000 : 100000}
                  step={500}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>$500</span>
                  <span>{calcMode === 'loan' ? '$40,000' : '$100,000'}</span>
                </div>
              </div>

              {/* Tenure slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Duration / Tenure
                  </span>
                  <span className="text-xl font-extrabold text-navy-900">
                    {tenure} Months ({ (tenure / 12).toFixed(1) } Yrs)
                  </span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={36}
                  step={3}
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>3 Months</span>
                  <span>36 Months</span>
                </div>
              </div>

              {/* Interest rate slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {calcMode === 'loan' ? 'Annual Fixed APR' : 'Guaranteed Annual Yield (ROI)'}
                  </span>
                  <span className="text-xl font-extrabold text-emerald-600">
                    {rate}%
                  </span>
                </div>
                <input
                  type="range"
                  min={3.0}
                  max={20.0}
                  step={0.5}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>3.0%</span>
                  <span>20.0%</span>
                </div>
              </div>
            </div>

            {/* Results Display Box */}
            <div className="md:col-span-5 bg-gradient-to-br from-navy-950 via-navy-900 to-brand-950 text-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/10 flex flex-col justify-between space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  {calcMode === 'loan' ? 'Estimated Monthly Payment' : 'Estimated Maturity Yield'}
                </p>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                  {calcMode === 'loan' ? `$${monthlyEMI.toLocaleString()}` : `$${totalInvestmentMaturity.toLocaleString()}`}
                  <span className="text-xs font-normal text-slate-300 ml-1">
                    {calcMode === 'loan' ? '/ month' : 'total'}
                  </span>
                </div>
              </div>

              <div className="space-y-3 py-4 border-y border-white/10 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Principal Amount:</span>
                  <span className="font-semibold text-white">${amount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>{calcMode === 'loan' ? 'Total Interest Charged:' : 'Total Accrued Profit:'}</span>
                  <span className={`font-semibold ${calcMode === 'loan' ? 'text-amber-400' : 'text-emerald-400'}`}>
                    ${calcMode === 'loan' ? totalLoanInterest : totalInvestmentProfit}
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>{calcMode === 'loan' ? 'Total Payable (Principal + Int):' : 'Net Maturity Sum:'}</span>
                  <span className="font-bold text-white">
                    ${calcMode === 'loan' ? totalLoanRepayment : totalInvestmentMaturity}
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenRegister}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-semibold text-sm transition shadow-lg shadow-brand-600/30 flex items-center justify-center space-x-2"
              >
                <span>{calcMode === 'loan' ? 'Lock In This Loan Rate' : 'Start Earning This Yield'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

