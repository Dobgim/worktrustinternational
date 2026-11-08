import React from 'react';
import PageHeader from '../components/PageHeader';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';

export default function FaqPage() {
  return (
    <div className="bg-slate-50">
      <PageHeader
        title="Knowledge Base & FAQs"
        subtitle="Detailed answers regarding account setup, dual-wallet mechanics, deposit channels, loan underwriting, and security protocols."
        breadcrumb="FAQs"
      />

      <FAQ />

      <ContactSection />
    </div>
  );
}

