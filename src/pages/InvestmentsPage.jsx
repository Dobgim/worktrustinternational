import React from 'react';
import PageHeader from '../components/PageHeader';
import InvestmentPlans from '../components/InvestmentPlans';
import LoanCalculator from '../components/LoanCalculator';
import { useNavigate } from 'react-router-dom';
import { PiggyBank, Landmark, ShieldCheck, CheckCircle2, TrendingUp } from 'lucide-react';

export default function InvestmentsPage({ onSubscribeSuccess }) {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50">
      <PageHeader
        title="Guaranteed Yield DPS & FDR Schemes"
        subtitle="Harness disciplined recurring pension accumulation or high-yield term deposits with automated returns credited directly to your Profit Wallet."
        breadcrumb="DPS & FDR"
      />

      <InvestmentPlans onSubscribeSuccess={onSubscribeSuccess} />

      {/* Why Invest With WorkTrust */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Disciplined Growth</span>
              <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Why Millions Choose WorkTrust's Deposit Instruments
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Traditional commercial banks offer negligible interest rates that fail to outpace inflation. WorkTrust International structures institutional asset-backed liquidity to provide certified 7.0% to 15.0% annual returns.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Dedicated Profit Wallet:</strong> Your interest yield is segregated from your daily operational balance for clean bookkeeping.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Collateral Credit Line:</strong> Leverage up to 80% of your active FDR value as an emergency low-interest loan without liquidating your deposit.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>100% Principal Protection:</strong> Backed by institutional treasury reserves and sovereign debt liquidity tiers.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-brand-950 text-white shadow-xl border border-white/10 space-y-6">
                <h3 className="text-xl font-bold">Calculate Your Maturity Projection</h3>
                <p className="text-xs text-slate-300">
                  Test your potential earnings using our real-time yield simulator. Adjust your principal and tenure to see net returns.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] uppercase font-semibold text-slate-400">Sample $10,000 1-Year FDR</p>
                    <p className="text-2xl font-bold text-emerald-400 mt-0.5">$11,150.00 USD</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                    +11.5% APR
                  </span>
                </div>
                <button
                  onClick={() => navigate('/calculator')}
                  className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs transition"
                >
                  Open Full Interactive Calculator
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

