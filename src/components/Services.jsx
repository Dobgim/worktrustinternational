import React from 'react';
import { 
  PiggyBank, 
  Landmark, 
  Coins, 
  ArrowLeftRight, 
  WalletCards, 
  Building2, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES } from '../data/mockData';

const iconMap = {
  PiggyBank: PiggyBank,
  Landmark: Landmark,
  Coins: Coins,
  ArrowLeftRight: ArrowLeftRight,
  WalletCards: WalletCards,
  Building2: Building2
};

export default function Services({ onSelectService, onOpenRegister }) {
  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold tracking-wide uppercase border border-brand-200/60 mb-3">
            <span>Specialized Financial Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Comprehensive Digital Banking & Investment Services
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Tailored financial products designed for personal wealth growth, corporate agility, and international cross-border ease.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => {
            const IconComponent = iconMap[srv.icon] || Landmark;
            return (
              <div 
                key={srv.id}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 border border-brand-100 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors duration-200 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {srv.highlight}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {srv.shortDesc}
                  </p>

                  {/* Feature checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                    {srv.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onSelectService(srv)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-brand-600 text-slate-700 hover:text-white font-medium text-xs sm:text-sm border border-slate-200 hover:border-brand-600 transition-all duration-200 flex items-center justify-center space-x-2 group/btn"
                >
                  <span>Explore Plan Details</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-navy-950 via-navy-900 to-brand-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold">Need a Customized Institutional Financial Facility?</h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Our dedicated corporate relationship desk structures custom liquidity, cross-border treasury management, and commercial loan lines.
            </p>
          </div>
          <button
            onClick={onOpenRegister}
            className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold text-sm transition shadow-lg shadow-brand-500/30 whitespace-nowrap"
          >
            Contact Treasury Desk
          </button>
        </div>

      </div>
    </section>
  );
}

