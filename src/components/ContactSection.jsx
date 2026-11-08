import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    department: 'General Support',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // reset after feedback
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold tracking-wide uppercase border border-brand-200 mb-3">
                <span>Direct Support Desk</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                Get in Touch with Our Global Banking Desk
              </h2>
              <p className="text-base text-slate-600 mt-4 leading-relaxed">
                Have inquiries regarding loan applications, institutional partnerships, or high-volume fund routing? Our senior support specialists are at your disposal.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-semibold text-slate-500">Official Communication</p>
                  <p className="text-sm font-bold text-navy-900 mt-0.5">{COMPANY_INFO.email}</p>
                  <p className="text-[11px] text-slate-500">Response time within 2 to 4 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-semibold text-slate-500">Phone & Priority Desk</p>
                  <p className="text-sm font-bold text-navy-900 mt-0.5">{COMPANY_INFO.phone}</p>
                  <p className="text-[11px] text-slate-500">{COMPANY_INFO.hours}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-semibold text-slate-500">Principal Corporate Office</p>
                  <p className="text-sm font-medium text-navy-900 mt-0.5">{COMPANY_INFO.address}</p>
                  <p className="text-xs text-slate-500 mt-1">{COMPANY_INFO.secondaryAddress}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-lg">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Message Dispatched!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your ticket has been logged and assigned to our <strong>{formData.department}</strong>. A response will be delivered to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-brand-600 text-white font-medium text-xs hover:bg-brand-500 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-navy-900 mb-2">Send an Inquiry or Verification Request</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Department</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      <option>General Support</option>
                      <option>Loan Department</option>
                      <option>DPS / FDR Investment Desk</option>
                      <option>Wire Transfer & Compliance</option>
                      <option>Corporate HR Outsourcing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. Inquiring about Growth Loan"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about your query or required financial service..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-sm p-3.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-semibold text-sm transition shadow-lg shadow-brand-600/30 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Secure Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

