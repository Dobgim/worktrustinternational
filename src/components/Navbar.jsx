import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShieldCheck, 
  Menu, 
  X, 
  LogIn, 
  UserPlus, 
  ChevronDown, 
  Phone, 
  Mail, 
  Globe2, 
  LayoutDashboard
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export default function Navbar({ isLoggedIn, onLogout }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Loan Plans', path: '/loans' },
    { name: 'DPS & FDR', path: '/investments' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'Affiliate', path: '/referrals' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top announcement & contact bar */}
      <div className="bg-navy-950 text-slate-400 text-xs py-2 px-4 border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2 text-slate-300 hover:text-white transition">
              <Mail className="w-3.5 h-3.5 text-brand-400" />
              <span>{COMPANY_INFO.email}</span>
            </span>
            <span className="flex items-center space-x-2 text-slate-300 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-brand-400" />
              <span>{COMPANY_INFO.phone}</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-medium border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{COMPANY_INFO.supportStatus}</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-slate-300 text-xs">
              <Globe2 className="w-3.5 h-3.5 text-slate-400" />
              <span>Global (EN)</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </div>
            <span className="text-white/20">|</span>
            <Link 
              to="/dashboard"
              className="text-brand-300 hover:text-brand-200 font-medium transition flex items-center space-x-1"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Client Portal Demo</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-950/95 backdrop-blur-md shadow-xl py-3 border-b border-white/10' 
          : 'bg-navy-950/85 backdrop-blur-sm py-4 border-b border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-accent-teal flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform duration-200">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl font-bold tracking-tight text-white font-sans">
                  WorkTrust
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-500/30 uppercase tracking-wider">
                  LTD
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">International Banking</p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-white bg-white/10 font-bold border border-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <Link
                  to="/dashboard"
                  className="px-4 py-2 text-xs font-medium text-white bg-brand-600 hover:bg-brand-500 rounded-lg shadow transition flex items-center space-x-2"
                >
                  <LayoutDashboard className="w-4 h-4 text-white" />
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={onLogout}
                  className="px-3 py-2 text-xs font-medium text-slate-400 hover:text-rose-400 transition"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-xs font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-lg transition flex items-center space-x-1.5"
                >
                  <LogIn className="w-3.5 h-3.5 text-brand-400" />
                  <span>Sign In</span>
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 rounded-lg shadow-lg shadow-brand-600/30 hover:shadow-brand-500/40 transition-all duration-200 flex items-center space-x-1.5"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Open Account</span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <div className="flex xl:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile slide drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-navy-950/98 border-b border-white/10 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl">
            <div className="grid grid-cols-2 gap-1 py-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2 text-xs font-medium rounded-lg ${
                      isActive ? 'bg-brand-600 text-white font-bold' : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col space-y-2">
              {isLoggedIn ? (
                <>
                  <Link
                    to="/dashboard"
                    className="w-full py-2.5 px-4 rounded-lg bg-brand-600 text-white font-medium text-xs text-center flex items-center justify-center space-x-2"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Open Account Dashboard</span>
                  </Link>
                  <button
                    onClick={onLogout}
                    className="w-full py-2 text-xs font-medium text-rose-400 text-center"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="w-full py-2.5 px-4 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-xs text-center flex items-center justify-center space-x-2"
                  >
                    <LogIn className="w-4 h-4 text-brand-400" />
                    <span>Account Login</span>
                  </Link>
                  <Link
                    to="/register"
                    className="w-full py-2.5 px-4 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs text-center flex items-center justify-center space-x-2 shadow-lg shadow-brand-600/30"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Open Free Account</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
