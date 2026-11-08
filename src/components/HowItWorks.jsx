import React from 'react';
import { UserCheck, ShieldAlert, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS } from '../data/mockData';

const iconMap = {
  UserCheck: UserCheck,
  ShieldAlert: ShieldAlert,
  Sparkles: Sparkles,
  CheckCircle2: CheckCircle2
};

export default function HowItWorks({ onOpenRegister }) {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold tracking-wide uppercase border border-brand-200/60 mb-3">
            <span>Seamless 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            How WorkTrust International Works
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Get started in under two minutes with our frictionless identity onboarding, multi-asset deposit rail, and high-yield automated dashboard.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_IT_WORKS.map((step, idx) => {
            const Icon = iconMap[step.icon] || CheckCircle2;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-4xl font-extrabold text-slate-200 group-hover:text-brand-500/30 transition-colors font-mono">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 border border-brand-100 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center space-x-1.5 text-xs font-semibold text-brand-600">
                  <span>Fast Onboarding</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenRegister}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-semibold text-sm shadow-xl shadow-brand-600/30 hover:scale-105 transition-all inline-flex items-center space-x-2"
          >
            <span>Create Your Free Account Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

