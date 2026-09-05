import React from 'react';
import { MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
      <a
        href={`https://wa.me/91${BUSINESS_INFO.phone1}?text=${encodeURIComponent('Hello Prachi Travels, I want to book a taxi from Korba.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
        title="Chat with Prachi Travels on WhatsApp"
      >
        {/* Active green ping status */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-600 border-2 border-white" />
        </span>

        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline-block font-extrabold text-xs tracking-wide">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
