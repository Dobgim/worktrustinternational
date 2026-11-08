import React from 'react';
import PageHeader from '../components/PageHeader';
import ReferralSection from '../components/ReferralSection';
import { useNavigate } from 'react-router-dom';

export default function ReferralsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <PageHeader
        title="Multi-Level Affiliate Network"
        subtitle="Monetize your professional network with our 3-tier affiliate program. Earn continuous commissions on direct and secondary member deposits."
        breadcrumb="Affiliate Program"
      />

      <ReferralSection onOpenRegister={() => navigate('/register')} />
    </div>
  );
}

