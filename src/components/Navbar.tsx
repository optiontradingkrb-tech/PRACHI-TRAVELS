import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Menu, X, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Fleet & Rates', href: '#fleet' },
    { name: 'Pricing Rules', href: '#pricing' },
    { name: 'Popular Routes', href: '#routes' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top emergency & trust announcement bar */}
      <div className="bg-brand-navy text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>{BUSINESS_INFO.timings}</span>
            </span>
            <span className="hidden md:inline-block text-slate-500">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>T.P. Nagar, Korba (Chhattisgarh)</span>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified &amp; Sanitized Cabs</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href={`tel:+91${BUSINESS_INFO.phone1}`}
              className="flex items-center gap-1.5 hover:text-blue-300 transition-colors bg-white/10 px-2.5 py-1 rounded"
              title="Call Primary Number"
            >
              <Phone className="w-3 h-3 text-blue-300" />
              <span>{BUSINESS_INFO.phone1Display}</span>
            </a>
            <a
              href={`tel:+91${BUSINESS_INFO.phone2}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-blue-300 transition-colors bg-white/10 px-2.5 py-1 rounded"
              title="Call Secondary Number"
            >
              <Phone className="w-3 h-3 text-blue-300" />
              <span>{BUSINESS_INFO.phone2Display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-navy to-blue-700 flex items-center justify-center p-1.5 shadow-md shadow-blue-900/10 border border-blue-200/50 group-hover:scale-105 transition-transform">
              <img
                src="/assets/prachi-logo-crest.png"
                alt="Prachi Travels Logo Emblem"
                className="w-full h-full object-contain filter drop-shadow-sm"
                onError={(e) => {
                  // Fallback to text icon if image fails
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-white font-black text-xl tracking-tighter" style={{ display: 'none' }}>PT</span>
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-brand-navy group-hover:text-blue-700 transition-colors">
                  PRACHI
                </span>
                <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">
                  TRAVELS
                </span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 -mt-1 tracking-wide flex items-center gap-1">
                <span>Taxi Service</span>
                <span className="text-blue-500">•</span>
                <span className="text-blue-700 font-medium">Korba (C.G.)</span>
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/91${BUSINESS_INFO.phone1}?text=${encodeURIComponent('Hello Prachi Travels, I want to enquire about taxi booking.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 fill-emerald-600/20" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-500/20"
            >
              <span>Book Taxi</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 px-4 rounded-xl bg-blue-600 text-white font-bold text-center shadow-md shadow-blue-600/20 active:scale-98"
            >
              Book Taxi Now
            </button>

            <a
              href={`tel:+91${BUSINESS_INFO.phone1}`}
              className="w-full py-3 px-4 rounded-xl bg-slate-100 text-brand-navy font-bold text-center flex items-center justify-center gap-2 hover:bg-slate-200"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call: {BUSINESS_INFO.phone1Display}</span>
            </a>

            <a
              href={`https://wa.me/91${BUSINESS_INFO.phone1}?text=${encodeURIComponent('Hello Prachi Travels, I want to book a taxi.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold text-center flex items-center justify-center gap-2 hover:bg-emerald-100"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Booking ({BUSINESS_INFO.phone1})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
