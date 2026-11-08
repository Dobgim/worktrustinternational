import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  Server, 
  Eye, 
  FileCheck, 
  Cpu, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function SecurityArchitecture({ onOpenRegister }) {
  const securityPillars = [
    {
      icon: Lock,
      title: "End-to-End Cryptography",
      desc: "All incoming and outgoing network traffic is safeguarded by 256-bit AES encryption with TLS 1.3 protocol standards, ensuring zero interception."
    },
    {
      icon: Server,
      title: "Cold-Vault Asset Custody",
      desc: "Over 95% of customer reserve assets and surplus liquidity are isolated in air-gapped institutional cold vaults with multi-signature authorization."
    },
    {
      icon: Cpu,
      title: "Automated Fraud Scoring",
      desc: "Behavioral AI telemetry continuously analyzes withdrawal patterns and transfer anomalies in real time, triggering instant verification safeguards."
    },
    {
      icon: Key,
      title: "Two-Factor Auth (2FA)",
      desc: "Mandatory hardware-backed TOTP two-factor authentication and biometric verification shields your login sessions and wire transfer authorizations."
    },
    {
      icon: FileCheck,
      title: "Global AML & KYC Compliance",
      desc: "Strict adherence to international financial regulatory frameworks, Anti-Money Laundering directives, and counter-terrorist financing standards."
    },
    {
      icon: Eye,
      title: "24/7 Security Operations (SOC)",
      desc: "Dedicated global cybersecurity engineering teams monitor server uptime, DDoS resistance, and node integrity around the clock."
    }
  ];

  return (
    <section className="py-20 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-teal/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-white/10 text-brand-300 text-xs font-semibold tracking-wide uppercase border border-white/15 mb-3 shadow-inner">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Institutional-Grade Protection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bank-Level Security & Cryptographic Integrity
          </h2>
          <p className="text-base text-slate-300 mt-4 leading-relaxed">
            At WorkTrust International, safeguarding your personal identity, transaction confidentiality, and capital reserves is engineered into every line of code.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-7 border border-white/10 hover:border-brand-500/40 hover:bg-white/[0.08] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-400 border border-brand-500/30 flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white transition-all shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Security Certificate Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">ISO/IEC 27001 & SOC 2 Type II Infrastructure</h4>
              <p className="text-xs text-slate-400">Regularly audited by third-party institutional cybersecurity assessors.</p>
            </div>
          </div>

          <button
            onClick={onOpenRegister}
            className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs sm:text-sm transition shadow-lg shadow-brand-600/30 flex items-center space-x-2 whitespace-nowrap"
          >
            <span>Open Verified Account</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

