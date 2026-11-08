import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import LoanPlans from '../components/LoanPlans';
import InvestmentPlans from '../components/InvestmentPlans';
import SecurityArchitecture from '../components/SecurityArchitecture';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import PaymentGateways from '../components/PaymentGateways';
import { useNavigate } from 'react-router-dom';

export default function HomePage({ isLoggedIn, onApplyLoanSuccess, onSubscribeSuccess }) {
  const navigate = useNavigate();

  return (
    <div>
      <Hero
        onOpenRegister={() => navigate('/register')}
        onOpenLogin={() => navigate('/login')}
        onOpenDashboard={() => navigate('/dashboard')}
      />

      <Services
        onSelectService={() => navigate('/services')}
        onOpenRegister={() => navigate('/register')}
      />

      <LoanPlans
        onOpenRegister={() => navigate('/register')}
        isLoggedIn={isLoggedIn}
        onApplyLoanSuccess={onApplyLoanSuccess}
      />

      <InvestmentPlans
        onSubscribeSuccess={onSubscribeSuccess}
      />

      <SecurityArchitecture
        onOpenRegister={() => navigate('/register')}
      />

      <PaymentGateways
        onOpenRegister={() => navigate('/register')}
      />

      <HowItWorks
        onOpenRegister={() => navigate('/register')}
      />

      <Testimonials />
    </div>
  );
}

