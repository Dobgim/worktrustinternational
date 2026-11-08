import React, { useState } from 'react';
import { X, Lock, Mail, User, Globe, Phone, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COUNTRIES } from '../data/mockData';

export function LoginModal({ isOpen, onClose, onLogin, onSwitchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin({
        email: email || 'alexander.hayes@example.com',
        name: 'Alexander Hayes'
      });
      onClose();
    }, 800);
  };

  const handleDemoLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin({
        email: 'alexander.hayes@example.com',
        name: 'Alexander Hayes'
      });
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 mx-auto flex items-center justify-center mb-3">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-navy-900">Sign In to WorkTrust</h3>
          <p className="text-xs text-slate-500 mt-1">Access your dual wallet, active loans, and deposit plans.</p>
        </div>

        {/* 1-Click Demo Shortcut */}
        <div className="mb-5 p-3 rounded-xl bg-brand-50/70 border border-brand-200/60 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-brand-900">Explore as Demo Member</p>
            <p className="text-[11px] text-brand-700">Pre-funded test account with transactions</p>
          </div>
          <button
            onClick={handleDemoLogin}
            disabled={loading}
            className="px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold shadow transition whitespace-nowrap"
          >
            1-Click Demo Login
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Email or Account ID</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-sm pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-semibold text-slate-700">Password</label>
              <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Password reset link has been dispatched to your email.'); }} className="text-xs text-brand-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-sm pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs text-slate-600">
            <input type="checkbox" id="remember" defaultChecked className="rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
            <label htmlFor="remember">Remember this device for 30 days</label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition shadow-lg shadow-brand-600/30 flex items-center justify-center space-x-2"
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Secure Sign In</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-xs text-slate-500 mt-6">
          Don't have an account yet?{' '}
          <button
            onClick={() => { onClose(); onSwitchToRegister(); }}
            className="text-brand-600 font-bold hover:underline"
          >
            Open an Account
          </button>
        </p>
      </div>
    </div>
  );
}

export function RegisterModal({ isOpen, onClose, onRegisterSuccess, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: 'United States',
    phone: '',
    password: '',
    confirmPassword: '',
    referralCode: '',
    agree: true
  });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onRegisterSuccess({
        name: formData.fullName,
        email: formData.email,
        country: formData.country
      });
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-teal text-white mx-auto flex items-center justify-center mb-3 shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-navy-900">Open a WorkTrust Account</h3>
          <p className="text-xs text-slate-500 mt-1">Get immediate access to dual wallets, global wire rails, and loan facilities.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Full Legal Name *</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="e.g. Alexander Hayes"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full text-sm pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full text-sm pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Country of Residence *</label>
              <div className="relative">
                <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full text-xs sm:text-sm pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.code} value={c.name}>
                      {c.name} ({c.dial})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs sm:text-sm pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Password *</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Confirm Password *</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full text-sm px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Referral Username / Code <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. VIP-GROWTH"
              value={formData.referralCode}
              onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
              className="w-full text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="flex items-start space-x-2 text-xs text-slate-600">
            <input
              type="checkbox"
              id="agree"
              required
              checked={formData.agree}
              onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
              className="mt-0.5 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
            />
            <label htmlFor="agree">
              I certify that I am at least 18 years of age and agree to WorkTrust International's Terms of Service, Privacy Policy, and Anti-Money Laundering disclosures.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-semibold text-sm transition shadow-lg shadow-brand-600/30 flex items-center justify-center space-x-2"
          >
            {loading ? (
              <span>Initializing New Account...</span>
            ) : (
              <>
                <span>Complete Free Registration</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-xs text-slate-500 mt-5">
          Already registered?{' '}
          <button
            onClick={() => { onClose(); onSwitchToLogin(); }}
            className="text-brand-600 font-bold hover:underline"
          >
            Sign In Here
          </button>
        </p>
      </div>
    </div>
  );
}

