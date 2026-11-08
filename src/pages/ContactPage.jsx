import React from 'react';
import PageHeader from '../components/PageHeader';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Contact Our Global Banking Desk"
        subtitle="Connect with our institutional relationship managers, loan underwriting officers, and technical customer service specialists."
        breadcrumb="Contact Us"
      />

      <ContactSection />
    </div>
  );
}

