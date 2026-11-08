import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Globe, Phone, Lock, ShieldCheck, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { COUNTRIES } from '../data/mockData';

export default function RegisterPage({ onRegisterSuccess }) {
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
  const navigate = useNavigate();

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
      navigate('/dashboard');
    }, 800);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Open a WorkTrust Account"
        subtitle="Complete digital onboarding in under 2 minutes. Instant dual wallet activation and global wire access."
        breadcrumb="Register"
      />

      <div className="max-w-lg mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl p-7 sm:p-10 shadow-xl border border-slate-200">
          
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-teal text-white mx-auto flex items-center justify-center mb-2 shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900">Create Free Account</h2>
            <p className="text-xs text-slate-500 mt-1">Zero setup fees • Bank-grade encrypted verification</p>
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">Country *</label>
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Phone</label>
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
                Referral Code <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. WT-COMMISSION-99"
                value={formData.referralCode}
                onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div className="flex items-start space-x-2 text-xs text-slate-600 pt-1">
              <input
                type="checkbox"
                id="terms-agree"
                required
                checked={formData.agree}
                onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                className="mt-0.5 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
              />
              <label htmlFor="terms-agree">
                I agree to WorkTrust International's Terms of Service, Privacy Policy, and Anti-Money Laundering disclosures.
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-semibold text-sm transition shadow-lg shadow-brand-600/30 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <span>Provisioning Account & Wallets...</span>
              ) : (
                <>
                  <span>Create Account & Launch Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-slate-500 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-brand-600 font-bold hover:underline">
              Sign In Here
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

