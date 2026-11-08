import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export default function Testimonials() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold tracking-wide uppercase border border-amber-200 mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Trusted by Individual & Corporate Clients Globally
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Read how businesses and private depositors leverage WorkTrust International to streamline liquidity, protect capital, and achieve consistent yields.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center space-x-1 mb-4 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-slate-200">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-brand-500/20"
                />
                <div>
                  <h4 className="text-sm font-bold text-navy-900 flex items-center space-x-1">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                  <p className="text-[10px] text-brand-600 font-medium">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

