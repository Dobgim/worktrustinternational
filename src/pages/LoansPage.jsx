import React from 'react';
import PageHeader from '../components/PageHeader';
import LoanPlans from '../components/LoanPlans';
import LoanCalculator from '../components/LoanCalculator';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ShieldAlert, Clock, Coins, FileCheck, ArrowRight } from 'lucide-react';

export default function LoansPage({ isLoggedIn, onApplyLoanSuccess }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <PageHeader
        title="Instant Online Loan Facilities"
        subtitle="Transparent borrowing solutions from $500 to $40,000 with flexible tenures, low fixed APR rates, and zero hidden penalties."
        breadcrumb="Loan Plans"
      />

      <LoanPlans
        onOpenRegister={() => navigate('/register')}
        isLoggedIn={isLoggedIn}
        onApplyLoanSuccess={onApplyLoanSuccess}
      />

      {/* Loan Eligibility & Process Breakdown */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">
              Simple Eligibility & Fast Automated Approval
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our automated underwriting engine assesses loan applications around the clock with minimal documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">1. Identity Verification</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Complete standard Tier-1 or Tier-2 KYC by submitting a valid government ID (Passport, National ID, or Driving License).
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <Coins className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">2. Select Amount & Tenure</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Choose your required loan sum ($500 to $40,000) and pick a repayment schedule (3 to 36 months) that matches your cashflow.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">3. Direct Wallet Disbursal</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Upon automated risk scoring clearance, the full approved loan capital is credited directly to your WorkTrust Main Wallet for immediate use.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Built-in EMI Calculator */}
      <LoanCalculator onOpenRegister={() => navigate('/register')} />
    </div>
  );
}

