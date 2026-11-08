import React from 'react';
import PageHeader from '../components/PageHeader';
import LoanCalculator from '../components/LoanCalculator';
import { useNavigate } from 'react-router-dom';

export default function CalculatorPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <PageHeader
        title="Financial & Loan Calculator"
        subtitle="Simulate monthly loan repayments or forecast your high-yield DPS & FDR maturity returns before committing capital."
        breadcrumb="Calculator"
      />

      <LoanCalculator onOpenRegister={() => navigate('/register')} />
    </div>
  );
}

