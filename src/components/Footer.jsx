import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin, ArrowUp, Lock, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-teal flex items-center justify-center text-white shadow-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">WorkTrust</span>
                <span className="text-xs font-semibold ml-1.5 px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-500/30">LTD</span>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">International Banking & Wealth</p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              WorkTrust International provides global digital banking architectures, automated dual-wallet capabilities, guaranteed DPS/FDR yield products, and fast-track online loan facilities.
            </p>

            <div className="flex items-center space-x-3 text-xs text-slate-400 pt-2">
              <span className="flex items-center space-x-1">
                <Lock className="w-3.5 h-3.5 text-brand-400" />
                <span>256-Bit SSL Secured</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>ISO 27001 Certified</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services Overview</Link></li>
              <li><Link to="/loans" className="hover:text-white transition">Loan Packages ($500-$40k)</Link></li>
              <li><Link to="/investments" className="hover:text-white transition">DPS Pension Plans</Link></li>
              <li><Link to="/investments" className="hover:text-white transition">FDR Term Deposits</Link></li>
              <li><Link to="/calculator" className="hover:text-white transition">Financial Calculator</Link></li>
            </ul>
          </div>

          {/* Member & Portal Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Member Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link to="/login" className="hover:text-white transition">Account Sign In</Link></li>
              <li><Link to="/register" className="hover:text-white transition">Open Free Account</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition text-brand-300 font-semibold">Client Portal</Link></li>
              <li><Link to="/referrals" className="hover:text-white transition">Affiliate Rewards</Link></li>
              <li><Link to="/faqs" className="hover:text-white transition">FAQ & Help Desk</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Support</Link></li>
            </ul>
          </div>

          {/* Headquarters */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Global Headquarters</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>One World Trade Center, Suite 8500, New York, NY 10007, USA</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <span className="text-slate-300">{COMPANY_INFO.email}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimer */}
        <div className="py-6 border-t border-white/10 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong>Regulatory & Security Notice:</strong> WorkTrust International Ltd. operates enterprise digital banking platforms and secure wealth management technologies. All transactions, fund transfers, and personal data transmission are encrypted using bank-grade cryptographic protocols. Terms, condition policies, minimum loan criteria, and DPS/FDR yield schedules apply according to member country jurisdictions.
          </p>
        </div>

        {/* Copyright bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 space-y-4 sm:space-y-0">
          <p>© 2026 WorkTrust International Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-white transition cursor-pointer">Security Policy</span>
            <span className="hover:text-white transition cursor-pointer">AML Disclosures</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition flex items-center space-x-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
