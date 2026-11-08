import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, ShieldCheck, ArrowRight, User } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin({
        email: email || 'alexander.hayes@example.com',
        name: 'Alexander Hayes'
      });
      navigate('/dashboard');
    }, 600);
  };

  const handleDemoLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin({
        email: 'alexander.hayes@example.com',
        name: 'Alexander Hayes'
      });
      navigate('/dashboard');
    }, 300);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Account Sign In"
        subtitle="Access your secure WorkTrust International digital banking portal, dual wallets, and investments."
        breadcrumb="Sign In"
      />

      <div className="max-w-md mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl p-7 sm:p-9 shadow-xl border border-slate-200">
          
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 mx-auto flex items-center justify-center mb-2">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900">Welcome Back</h2>
            <p className="text-xs text-slate-500 mt-1">Please enter your verified credentials</p>
          </div>

          {/* 1-Click Demo Shortcut */}
          <div className="mb-6 p-3.5 rounded-xl bg-brand-50/80 border border-brand-200/80 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-brand-950">Test as Demo Member</p>
              <p className="text-[11px] text-brand-700">Pre-funded $15k+ demo ledger</p>
            </div>
            <button
              onClick={handleDemoLogin}
              disabled={loading}
              className="px-3.5 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold shadow transition whitespace-nowrap"
            >
              1-Click Demo Login
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Email or Account ID *</label>
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
                <label className="text-xs font-semibold text-slate-700">Password *</label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset token dispatched to email."); }} className="text-xs text-brand-600 hover:underline">
                  Forgot Password?
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
              <input type="checkbox" id="remember-me" defaultChecked className="rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
              <label htmlFor="remember-me">Remember device for 30 days</label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition shadow-lg shadow-brand-600/30 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <span>Verifying Credentials...</span>
              ) : (
                <>
                  <span>Sign In to Account</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-slate-500 mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-brand-600 font-bold hover:underline">
              Open an Account
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

