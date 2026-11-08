import React from 'react';
import PageHeader from '../components/PageHeader';
import { 
  Building2, 
  ShieldCheck, 
  Globe2, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Lock, 
  ArrowRight,
  Landmark,
  Award
} from 'lucide-react';
import { COMPANY_INFO, STATS } from '../data/mockData';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const leadership = [
    {
      name: "Arthur Pendelton",
      role: "Chief Executive Officer & Co-Founder",
      bio: "Over 22 years of global corporate finance experience across tier-one European and North American institutional clearing houses.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
    },
    {
      name: "Dr. Evelyn Sterling",
      role: "Chief Technology & Security Officer",
      bio: "Former cybersecurity architect at global cloud institutions, leading WorkTrust's cryptographic cold-vault and dual-wallet ledger design.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80"
    },
    {
      name: "Harrison Vance",
      role: "Head of Global Treasury & Compliance",
      bio: "Specializes in multi-jurisdiction cross-border settlement, ISO 27001 regulatory compliance, and international liquidity rails.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-white">
      <PageHeader
        title="About WorkTrust International"
        subtitle="Pioneering frictionless, institutional-grade online banking, asset compounding, and enterprise financial solutions across 85+ countries."
        breadcrumb="About Us"
      />

      {/* Corporate Story & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold tracking-wide uppercase border border-brand-200">
                <Landmark className="w-3.5 h-3.5" />
                <span>Our Heritage & Purpose</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Empowering Businesses and Individuals with High-Yield Security
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                WorkTrust International Ltd. was founded with a singular conviction: global financial infrastructure should be rapid, transparent, and completely free of obsolete bureaucratic delays.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                By integrating proprietary dual-wallet technology, automated risk underwriting for personal and SME loans, and guaranteed high-yield savings (DPS & FDR), we provide individuals and enterprises around the world with continuous financial mobility.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-2xl font-black text-brand-600">$1.85B+</p>
                  <p className="text-xs font-semibold text-slate-600 mt-0.5">Total Settlement Volume</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-2xl font-black text-emerald-600">85+ Nations</p>
                  <p className="text-xs font-semibold text-slate-600 mt-0.5">Global Member Network</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&auto=format&fit=crop&q=80"
                  alt="WorkTrust Headquarters"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent flex flex-col justify-end p-8 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-300">Global Corporate Command</p>
                  <h3 className="text-xl font-bold mt-1">One World Trade Center, New York & Canary Wharf, London</h3>
                  <p className="text-xs text-slate-300 mt-1">Fully audited digital banking and risk governance facilities.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Institutional Values */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">Our Core Operational Principles</h2>
            <p className="text-sm text-slate-600 mt-3">The non-negotiable standards that govern every deposit, transfer, and loan underwriting.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Absolute Capital Protection</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We maintain conservative liquidity buffers and isolate customer reserves in high-grade institutional custodians, guaranteeing 100% principal integrity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Predictable Wealth Yields</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our DPS (Deposit Pension Scheme) and FDR instruments offer fixed, transparent rates that auto-credit directly to your dedicated Profit Wallet without market volatility.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Borderless Financial Mobility</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From internal 0% instant transfers to international SWIFT/SEPA rails, our members move funds across currencies and geographies with real-time settlement transparency.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Executive Governance</span>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight mt-1">
              Led by Veteran FinTech and Banking Minds
            </h2>
            <p className="text-sm text-slate-600 mt-3">Seasoned practitioners committed to security, regulatory compliance, and customer success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-lg transition flex flex-col justify-between">
                <div>
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-20 h-20 rounded-2xl object-cover mb-5 border-2 border-brand-500/20"
                  />
                  <h3 className="text-lg font-bold text-navy-900">{member.name}</h3>
                  <p className="text-xs font-semibold text-brand-600 mb-3">{member.role}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-200 text-[11px] text-slate-400 font-medium">
                  WorkTrust International Executive Committee
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-brand-950 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
            <div>
              <h3 className="text-2xl font-bold">Ready to Experience Next-Gen Digital Banking?</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Open a verified account in under 2 minutes and unlock dual wallets, instant wire transfers, and guaranteed investment yields.
              </p>
            </div>
            <Link
              to="/register"
              className="px-7 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm shadow-xl shadow-brand-500/30 whitespace-nowrap transition"
            >
              Open Free Account
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

