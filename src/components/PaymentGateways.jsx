import React from 'react';
import { CreditCard, Landmark, Coins, Zap, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function PaymentGateways({ onOpenRegister }) {
  const gateways = [
    {
      name: "International Wire (SWIFT)",
      category: "Global Banking",
      processing: "Same Day (2-4 hrs)",
      minMax: "$500 - $1,000,000",
      fee: "0.00%",
      badge: "High Volume"
    },
    {
      name: "SEPA Instant Euro Rail",
      category: "European Banking",
      processing: "Instant (< 10 mins)",
      minMax: "€100 - €250,000",
      fee: "0.00%",
      badge: "Instant"
    },
    {
      name: "Visa & Mastercard Gateway",
      category: "Cards & Electronic",
      processing: "Real-Time Instant",
      minMax: "$50 - $15,000",
      fee: "0.00%",
      badge: "Most Popular"
    },
    {
      name: "USDT Settlement (TRC20 / ERC20)",
      category: "Digital Assets",
      processing: "Block Confirmation",
      minMax: "$50 - $500,000",
      fee: "0.00%",
      badge: "Automated"
    },
    {
      name: "Bitcoin (BTC Vault Clearing)",
      category: "Digital Assets",
      processing: "3 Confirmations",
      minMax: "0.002 - 25 BTC",
      fee: "0.00%",
      badge: "Cold Storage"
    },
    {
      name: "Domestic ACH Direct Debit",
      category: "US Domestic",
      processing: "1 Business Day",
      minMax: "$100 - $100,000",
      fee: "0.00%",
      badge: "Direct Debit"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold tracking-wide uppercase border border-brand-200 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Supported Liquidity Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Seamless Deposit & Rapid Withdrawal Rails
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Deposit capital or withdraw your accrued DPS/FDR profits through institutional banking channels, card networks, and secure digital asset clearing.
          </p>
        </div>

        {/* Gateways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gateways.map((gw, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{gw.category}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                    {gw.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy-900 mb-4">{gw.name}</h3>

                <div className="space-y-2 py-3 border-y border-slate-100 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Turnaround Time:</span>
                    <strong className="text-navy-900">{gw.processing}</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Transaction Limits:</span>
                    <strong className="text-navy-900">{gw.minMax}</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Deposit Surcharge:</span>
                    <strong className="text-emerald-600">{gw.fee} Free</strong>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs">
                <span className="text-emerald-600 font-medium flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>256-bit Encrypted Rail</span>
                </span>
                <button
                  onClick={onOpenRegister}
                  className="font-bold text-brand-600 hover:text-brand-500 flex items-center space-x-0.5"
                >
                  <span>Deposit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

