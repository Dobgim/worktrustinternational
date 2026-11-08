import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  Sparkles, 
  TrendingUp, 
  Wallet, 
  CreditCard, 
  CheckCircle2, 
  Zap,
  ArrowUpRight,
  ArrowDownLeft,
  Coins
} from 'lucide-react';
import { STATS } from '../data/mockData';

export default function Hero({ onOpenRegister, onOpenLogin, onOpenDashboard }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden gradient-hero text-white">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-brand-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -top-10 -right-20 w-[450px] h-[450px] bg-accent-teal/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-brand-300 text-xs sm:text-sm font-medium shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Global FinTech Trust & Banking Infrastructure</span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="hidden sm:inline text-slate-300">ISO 27001 Security</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Fast, Secure & Seamless <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-blue-200 to-accent-teal">
                Digital Financial Solutions
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Effortlessly manage personal and corporate funds, execute global wire transfers, grow wealth with guaranteed DPS & FDR yields, and access instant collateral-free loans.
            </p>

            {/* Dual Wallet Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Dual-Wallet Architecture</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instant Wire Transfers</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Loans from $500 to $40,000</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 hover:from-brand-500 hover:to-brand-400 text-white font-semibold text-base shadow-xl shadow-brand-600/30 hover:shadow-brand-500/50 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2.5"
              >
                <span>Open An Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#loans"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-base transition-all duration-200 text-center flex items-center justify-center space-x-2"
              >
                <Coins className="w-4 h-4 text-brand-300" />
                <span>Explore Loan Plans</span>
              </a>

              <button
                onClick={onOpenDashboard}
                className="text-xs sm:text-sm text-brand-300 hover:text-brand-200 underline underline-offset-4 font-medium transition py-2"
              >
                Launch Demo Portal →
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex items-center justify-center lg:justify-start space-x-6 text-xs text-slate-400 border-t border-white/10">
              <span className="flex items-center space-x-1.5">
                <Lock className="w-3.5 h-3.5 text-brand-400" />
                <span>256-Bit Bank Encryption</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Instant Settlement</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Hidden Fees</span>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive FinTech Mockup Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Premium Debit/Credit Card */}
              <div className="relative z-20 rounded-2xl p-6 bg-gradient-to-br from-slate-900 via-navy-900 to-brand-950 border border-white/20 shadow-2xl shadow-black/60 glow-blue text-white overflow-hidden transform hover:-translate-y-1 transition duration-300">
                {/* Background decorative swirl */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-brand-500/20 blur-2xl" />
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div>
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center">
                        <ShieldCheck className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold text-sm tracking-wide">WorkTrust</span>
                    </div>
                    <p className="text-[9px] uppercase tracking-widest text-slate-400 mt-0.5">International Platinum</p>
                  </div>
                  
                  {/* EMV Chip */}
                  <div className="w-10 h-7 rounded bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 border border-amber-300/40 shadow-inner flex items-center justify-center">
                    <div className="w-8 h-5 border border-black/20 rounded-sm"></div>
                  </div>
                </div>

                {/* Card Number */}
                <div className="space-y-1 mb-6 relative z-10">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Card Number</span>
                  <div className="font-mono text-lg sm:text-xl tracking-widest text-slate-100 font-semibold">
                    4928 •••• •••• 8421
                  </div>
                </div>

                {/* Card Holder & Expiry */}
                <div className="flex justify-between items-end relative z-10 pt-2 border-t border-white/10">
                  <div>
                    <p className="text-[9px] text-slate-400 uppercase tracking-wider">Account Holder</p>
                    <p className="text-xs sm:text-sm font-semibold tracking-wide text-white">ALEXANDER HAYES</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-slate-400 uppercase tracking-wider">Valid Thru</p>
                    <p className="text-xs sm:text-sm font-mono text-slate-200">11/29</p>
                  </div>
                  {/* Contactless Waves */}
                  <div className="w-6 h-6 flex items-center justify-center text-slate-400">
                    <CreditCard className="w-5 h-5 text-brand-300" />
                  </div>
                </div>
              </div>

              {/* Floating Widget 1: Main Balance Pill */}
              <div className="absolute -top-6 -left-6 z-30 gradient-card rounded-xl p-3.5 shadow-xl border border-white/20 flex items-center space-x-3 backdrop-blur-md animate-bounce duration-1000">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <ArrowDownLeft className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-semibold text-slate-400">Main Wallet</p>
                  <p className="text-sm font-bold text-white">$12,450.00 <span className="text-[10px] text-emerald-400 font-normal">USD</span></p>
                </div>
              </div>

              {/* Floating Widget 2: Profit Wallet Live Yield */}
              <div className="absolute -bottom-8 -right-6 z-30 gradient-card rounded-xl p-3.5 shadow-xl border border-white/20 flex items-center space-x-3 backdrop-blur-md">
                <div className="w-9 h-9 rounded-lg bg-brand-500/20 text-brand-300 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <p className="text-[10px] uppercase font-semibold text-slate-400">Profit Wallet</p>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-medium">+14.5%</span>
                  </div>
                  <p className="text-sm font-bold text-white">$3,180.50 <span className="text-[10px] text-brand-300 font-normal">Yield Active</span></p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Hero Stats Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
          {STATS.map((stat, idx) => (
            <div key={idx} className="p-3 text-center sm:text-left border-b sm:border-b-0 sm:border-r border-white/10 last:border-0">
              <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{stat.value}</p>
              <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">{stat.label}</p>
              <p className="text-[11px] text-brand-300 mt-0.5">{stat.change}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

