import React from 'react';
import PageHeader from '../components/PageHeader';
import Services from '../components/Services';
import PaymentGateways from '../components/PaymentGateways';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, ArrowRight, Zap, RefreshCw } from 'lucide-react';

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50">
      <PageHeader
        title="Comprehensive Financial Services"
        subtitle="Explore our complete suite of digital banking architectures, savings schemes, loan financing, and international corporate treasury solutions."
        breadcrumb="Services"
      />

      <Services
        onSelectService={(srv) => {
          if (srv.id === 'smart-loans') navigate('/loans');
          else if (srv.id === 'savings-dps' || srv.id === 'fdr-deposits') navigate('/investments');
          else navigate('/register');
        }}
        onOpenRegister={() => navigate('/register')}
      />

      {/* Services Comparison Table */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">
              Service Feature & Transparency Comparison
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Every facility at WorkTrust is engineered with clear terms, zero hidden deductions, and direct wallet automation.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-500 uppercase font-bold border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6">Product / Facility</th>
                  <th className="py-4 px-6">Turnaround / Execution</th>
                  <th className="py-4 px-6">Capital Limits</th>
                  <th className="py-4 px-6">Yield / Fee</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="py-4 px-6 font-bold text-navy-900">
                    DPS (Deposit Pension Scheme)
                    <p className="text-xs text-slate-500 font-normal">Monthly compounding retirement & wealth</p>
                  </td>
                  <td className="py-4 px-6 text-slate-600">Monthly automated credit</td>
                  <td className="py-4 px-6 font-semibold">$100 - $1,000 / mo</td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">9.5% - 14.5% p.a.</td>
                  <td className="py-4 px-6 text-right">
                    <button onClick={() => navigate('/investments')} className="text-xs font-bold text-brand-600 hover:underline">
                      View Plans →
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-4 px-6 font-bold text-navy-900">
                    FDR (Fixed Deposit Receipt)
                    <p className="text-xs text-slate-500 font-normal">Locked term with guaranteed interest</p>
                  </td>
                  <td className="py-4 px-6 text-slate-600">3 Months to 3 Years</td>
                  <td className="py-4 px-6 font-semibold">$1,000 - $100,000</td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">7.0% - 15.0% APR</td>
                  <td className="py-4 px-6 text-right">
                    <button onClick={() => navigate('/investments')} className="text-xs font-bold text-brand-600 hover:underline">
                      View Plans →
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-4 px-6 font-bold text-navy-900">
                    Online Personal & SME Loans
                    <p className="text-xs text-slate-500 font-normal">Collateral-free rapid disbursals</p>
                  </td>
                  <td className="py-4 px-6 text-emerald-600 font-semibold">&lt; 24 Hours Review</td>
                  <td className="py-4 px-6 font-semibold">$500 - $40,000</td>
                  <td className="py-4 px-6 text-slate-800 font-bold">4.5% - 7.8% Fixed APR</td>
                  <td className="py-4 px-6 text-right">
                    <button onClick={() => navigate('/loans')} className="text-xs font-bold text-brand-600 hover:underline">
                      Apply Online →
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-4 px-6 font-bold text-navy-900">
                    Internal Member Wire Transfers
                    <p className="text-xs text-slate-500 font-normal">WorkTrust peer-to-peer ledger</p>
                  </td>
                  <td className="py-4 px-6 text-slate-600">Real-Time Instant</td>
                  <td className="py-4 px-6 font-semibold">Unlimited</td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">0.00% Zero Fee</td>
                  <td className="py-4 px-6 text-right">
                    <button onClick={() => navigate('/dashboard')} className="text-xs font-bold text-brand-600 hover:underline">
                      Launch Wire →
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-4 px-6 font-bold text-navy-900">
                    Corporate HR & Mass Payroll
                    <p className="text-xs text-slate-500 font-normal">Multi-currency salary distributions</p>
                  </td>
                  <td className="py-4 px-6 text-slate-600">Scheduled batch rail</td>
                  <td className="py-4 px-6 font-semibold">Custom Corporate Line</td>
                  <td className="py-4 px-6 text-slate-800 font-bold">Custom Enterprise</td>
                  <td className="py-4 px-6 text-right">
                    <button onClick={() => navigate('/contact')} className="text-xs font-bold text-brand-600 hover:underline">
                      Contact Desk →
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      <PaymentGateways onOpenRegister={() => navigate('/register')} />
    </div>
  );
}

