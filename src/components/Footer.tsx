import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ChevronRight, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/travelData';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#why-us' },
    { name: 'Our Services', href: '#services' },
    { name: 'Fleet & Rates', href: '#fleet' },
    { name: 'Pricing Rules', href: '#pricing' },
    { name: 'Popular One-Way Routes', href: '#routes' },
    { name: 'Book Taxi', href: '#booking' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-md">
                <img
                  src="/assets/prachi-logo-crest.png"
                  alt="Prachi Travels Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight block">PRACHI TRAVELS</span>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest block">
                  Taxi Service • Korba
                </span>
              </div>
            </div>

            <p className="text-xs font-medium text-slate-300 italic">
              "{BUSINESS_INFO.tagline}"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Korba's trusted local and outstation taxi rental service. Serving passengers across Chhattisgarh with comfortable sedans, Ertiga, and Innova Crysta.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Government Registered &amp; Verified Cabs</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2.5">
              Cab Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2.5">
              Direct Contact
            </h4>

            <div className="text-xs space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="space-y-0.5">
                  <a href={`tel:+91${BUSINESS_INFO.phone1}`} className="hover:text-white block font-bold">
                    {BUSINESS_INFO.phone1Display}
                  </a>
                  <a href={`tel:+91${BUSINESS_INFO.phone2}`} className="hover:text-white block">
                    {BUSINESS_INFO.phone2Display}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white truncate">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.phone1}?text=${encodeURIComponent('Hello Prachi Travels, I want to book a taxi.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-bold"
                >
                  WhatsApp: +91 {BUSINESS_INFO.phone1}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; 2026 {BUSINESS_INFO.brandName}. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for travelers in Korba, Chhattisgarh</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
