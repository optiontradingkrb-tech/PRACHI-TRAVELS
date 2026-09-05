import React from 'react';
import { Phone, MessageSquare, CheckCircle2, Shield, Award, Users } from 'lucide-react';
import { BUSINESS_INFO, TRUST_INDICATORS } from '../data/travelData';
import { BookingWidget } from './BookingWidget';
import { TravelType } from '../types';

interface HeroProps {
  onSearch: (data: {
    pickup: string;
    drop: string;
    travelType: TravelType;
    vehicle: string;
    date: string;
    time: string;
    passengers: string;
  }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50/60 via-slate-50 to-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background Subtle Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1A56DB_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs sm:text-sm font-bold tracking-wide">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>{BUSINESS_INFO.tagline}</span>
              <span className="text-red-500">♥</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-brand-navy tracking-tight leading-[1.15]">
              Reliable Taxi Service in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700">
                Korba &amp; Chhattisgarh
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Comfortable cars, professional drivers and dependable taxi service for local, one-way, round-trip and outstation travel across Korba, Bilaspur, Raipur, and neighboring regions.
            </p>

            {/* Primary & Secondary Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href={`https://wa.me/91${BUSINESS_INFO.phone1}?text=${encodeURIComponent('Hello Prachi Travels, I want to book a taxi from Korba.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/25 active:scale-95 transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href={`tel:+91${BUSINESS_INFO.phone1}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-brand-navy border-2 border-slate-200 hover:border-slate-300 font-bold text-base shadow-sm active:scale-95 transition-all"
              >
                <Phone className="w-5 h-5 text-blue-600" />
                <span>Call: {BUSINESS_INFO.phone1Display}</span>
              </a>
            </div>

            {/* Trust Badges Row */}
            <div className="pt-4 border-t border-slate-200/80">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 text-center lg:text-left">
                Why Travelers Trust Prachi Travels:
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs font-semibold text-slate-700">
                {TRUST_INDICATORS.map((indicator) => (
                  <span key={indicator.title} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{indicator.title}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Right Visual: Authentic Brand Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-white via-blue-50/50 to-slate-100 p-4 sm:p-5 border border-slate-200 shadow-xl shadow-blue-950/5">
              {/* Top Banner Tag */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    24/7 Available for Bookings
                  </span>
                </div>
                <span className="text-xs font-extrabold text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full">
                  From ₹12 / Km
                </span>
              </div>

              {/* Vehicle Display Image */}
              <div className="relative my-4 rounded-xl overflow-hidden bg-gradient-to-b from-blue-100/40 to-white flex items-center justify-center p-3 border border-slate-100">
                <img
                  src="/assets/hero-taxi-car.png"
                  alt="Prachi Travels Premium Taxi Fleet"
                  className="w-full max-h-56 object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-3 bg-brand-navy/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm">
                  Sedan • Ertiga • Kia Carrance • Innova Crysta
                </div>
              </div>

              {/* Quick Contact & Address Snippet */}
              <div className="bg-white rounded-xl p-3.5 border border-slate-200/90 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Head Office Location:</span>
                  <span className="font-bold text-brand-navy">T.P. Nagar, Korba (C.G.)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Driver Allowance:</span>
                  <span className="font-bold text-slate-800">₹400 / Day (Round Trip)</span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-emerald-700 font-bold">
                  <span>Direct Helpline:</span>
                  <a href={`tel:+91${BUSINESS_INFO.phone1}`} className="hover:underline flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    <span>{BUSINESS_INFO.phone1Display}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Interactive Booking Widget */}
        <div className="mt-6">
          <BookingWidget onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
};
