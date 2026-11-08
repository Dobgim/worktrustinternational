import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import LoansPage from './pages/LoansPage';
import InvestmentsPage from './pages/InvestmentsPage';
import CalculatorPage from './pages/CalculatorPage';
import ReferralsPage from './pages/ReferralsPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [toastNotification, setToastNotification] = useState({
    show: true,
    message: "Welcome to WorkTrust International. Try our live Client Portal!"
  });

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    setIsLoggedIn(true);
    setToastNotification({
      show: true,
      message: `Signed in successfully as ${userData.name}.`
    });
  };

  const handleRegisterSuccess = (userData) => {
    setCurrentUser(userData);
    setIsLoggedIn(true);
    setToastNotification({
      show: true,
      message: `Account created for ${userData.name}! Initialized dual wallets.`
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setToastNotification({
      show: true,
      message: "Signed out of session."
    });
  };

  const handleApplyLoanSuccess = (loanData) => {
    setToastNotification({
      show: true,
      message: `Loan application for $${loanData.amount.toLocaleString()} logged! Estimated monthly: $${loanData.monthly}`
    });
  };

  const handleSubscribeSuccess = (planData) => {
    setToastNotification({
      show: true,
      message: `Subscribed to ${planData.planName} (${planData.type})! Yields credited to Profit Wallet.`
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      <ScrollToTop />

      {/* Floating Status Toast */}
      {toastNotification.show && (
        <div className="bg-gradient-to-r from-brand-700 via-brand-600 to-navy-950 text-white text-xs py-2 px-4 flex justify-between items-center z-50 fixed bottom-4 right-4 sm:right-6 rounded-xl shadow-2xl border border-white/20 max-w-md animate-fadeIn">
          <div className="flex items-center space-x-2 mr-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-medium text-[11px] sm:text-xs">{toastNotification.message}</span>
          </div>
          <button
            onClick={() => setToastNotification({ show: false, message: '' })}
            className="text-white/60 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Global Navbar with React Router links */}
      <Navbar
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      {/* Page Routing */}
      <main className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                isLoggedIn={isLoggedIn} 
                onApplyLoanSuccess={handleApplyLoanSuccess}
                onSubscribeSuccess={handleSubscribeSuccess}
              />
            } 
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route 
            path="/loans" 
            element={
              <LoansPage 
                isLoggedIn={isLoggedIn} 
                onApplyLoanSuccess={handleApplyLoanSuccess} 
              />
            } 
          />
          <Route 
            path="/investments" 
            element={
              <InvestmentsPage 
                onSubscribeSuccess={handleSubscribeSuccess} 
              />
            } 
          />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/referrals" element={<ReferralsPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          <Route 
            path="/login" 
            element={<LoginPage onLogin={handleLogin} />} 
          />
          <Route 
            path="/register" 
            element={<RegisterPage onRegisterSuccess={handleRegisterSuccess} />} 
          />
          <Route 
            path="/dashboard" 
            element={<DashboardPage user={currentUser} onLogout={handleLogout} />} 
          />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
