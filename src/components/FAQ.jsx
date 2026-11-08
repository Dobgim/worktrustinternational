import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { FAQS } from '../data/mockData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faqs" className="py-20 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold tracking-wide uppercase border border-slate-300 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
            <span>Help & Knowledge Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Find answers regarding account verification, dual wallets, loan approvals, and deposit returns.
          </p>

          {/* Quick Search */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. Dual Wallet, Loan, FDR, Transfer)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
            />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex justify-between items-center space-x-4 hover:bg-slate-50 transition"
                  >
                    <span className="text-base font-bold text-navy-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-brand-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 bg-white rounded-xl border border-slate-200 p-8">
              <p className="text-slate-500 text-sm">No matching questions found for "{searchQuery}".</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-2 text-xs text-brand-600 font-semibold hover:underline"
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

