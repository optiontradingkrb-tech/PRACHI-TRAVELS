import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

interface MobileStickyBarProps {
  onBookClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onBookClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-3 shadow-2xl lg:hidden flex items-center justify-around gap-2">
      {/* Call Now */}
      <a
        href={`tel:+91${BUSINESS_INFO.phone1}`}
        className="flex-1 py-2.5 px-2 bg-slate-100 hover:bg-slate-200 active:scale-95 text-brand-navy rounded-xl text-center flex items-center justify-center gap-1.5 transition-all font-bold text-xs shadow-sm"
      >
        <Phone className="w-4 h-4 text-blue-600" />
        <span>Call Now</span>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/91${BUSINESS_INFO.phone1}?text=${encodeURIComponent('Hello Prachi Travels, I want to book a taxi.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white rounded-xl text-center flex items-center justify-center gap-1.5 transition-all font-bold text-xs shadow-sm"
      >
        <MessageSquare className="w-4 h-4 fill-white" />
        <span>WhatsApp</span>
      </a>

      {/* Book Taxi */}
      <button
        onClick={onBookClick}
        className="flex-1 py-2.5 px-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-xl text-center flex items-center justify-center gap-1.5 transition-all font-bold text-xs shadow-sm shadow-blue-600/20"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Taxi</span>
      </button>
    </div>
  );
};
