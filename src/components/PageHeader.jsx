import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function PageHeader({ title, subtitle, breadcrumb }) {
  return (
    <div className="pt-32 pb-16 gradient-hero text-white relative overflow-hidden border-b border-white/10">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Breadcrumb */}
        <nav className="inline-flex items-center space-x-2 text-xs text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full mb-4">
          <Link to="/" className="hover:text-white flex items-center space-x-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-500" />
          <span className="text-brand-300 font-semibold">{breadcrumb || title}</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          {title}
        </h1>

        {/* Page Subtitle */}
        {subtitle && (
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

      </div>
    </div>
  );
}

