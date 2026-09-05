import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Phone } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/travelData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showHindi, setShowHindi] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Passenger Queries Answered</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Have questions about outstation billing, driver allowance, or airport transfers? Here are straightforward answers.
          </p>

          {/* Hindi / English Language Toggle */}
          <div className="mt-5 inline-flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setShowHindi(false)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                !showHindi ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setShowHindi(true)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                showHindi ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              हिंदी में पढ़ें
            </button>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-300 bg-blue-50/30 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-brand-navy text-sm sm:text-base leading-snug">
                    {showHindi ? faq.questionHindi : faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-blue-100/60 animate-in fade-in duration-200">
                    <p>{showHindi ? faq.answerHindi : faq.answer}</p>
                    
                    {/* Bilingual toggle button inline */}
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Prachi Travels Helpdesk</span>
                      <button
                        onClick={() => setShowHindi(!showHindi)}
                        className="text-blue-600 font-bold hover:underline"
                      >
                        {showHindi ? 'Switch to English' : 'हिंदी में देखें'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick WhatsApp Assistance Box */}
        <div className="mt-10 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-emerald-950">Have another question not listed here?</h4>
            <p className="text-xs text-emerald-800 mt-0.5">
              Chat directly with our dispatch manager on WhatsApp for immediate help.
            </p>
          </div>
          <a
            href={`https://wa.me/91${BUSINESS_INFO.phone1}?text=${encodeURIComponent('Hello Prachi Travels, I have a question regarding taxi booking.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
