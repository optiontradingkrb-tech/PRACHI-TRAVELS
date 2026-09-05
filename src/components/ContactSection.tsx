import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Contact &amp; Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Visit Our Office or Contact Us 24/7
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Conveniently located at Stadium Road, Transport Nagar (T.P. Nagar) in Korba, Chhattisgarh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card (5 Columns) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
            <div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">Official Office</div>
              <h3 className="text-2xl font-black text-brand-navy mt-1">
                {BUSINESS_INFO.brandName}
              </h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                {BUSINESS_INFO.serviceType} • Korba (C.G.)
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Office Address</div>
                  <p className="text-sm font-bold text-brand-navy mt-0.5 leading-snug">
                    {BUSINESS_INFO.address.line1},<br />
                    {BUSINESS_INFO.address.line2},<br />
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}, {BUSINESS_INFO.address.country}
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Phone &amp; WhatsApp</div>
                  <div className="mt-1 space-y-1">
                    <a
                      href={`tel:+91${BUSINESS_INFO.phone1}`}
                      className="block text-base font-extrabold text-blue-600 hover:underline"
                    >
                      {BUSINESS_INFO.phone1Display} (Primary)
                    </a>
                    <a
                      href={`tel:+91${BUSINESS_INFO.phone2}`}
                      className="block text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      {BUSINESS_INFO.phone2Display} (Secondary)
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Official Email</div>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-sm font-bold text-brand-navy hover:text-blue-600 transition-colors block mt-0.5"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Availability</div>
                  <p className="text-sm font-bold text-emerald-700 mt-0.5">
                    24 Hours / 7 Days a Week
                  </p>
                  <p className="text-xs text-slate-500">Day &amp; night emergency bookings accepted</p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
              <a
                href={`tel:+91${BUSINESS_INFO.phone1}`}
                className="py-3 px-4 bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs rounded-xl text-center flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/91${BUSINESS_INFO.phone1}?text=${encodeURIComponent('Hello Prachi Travels, I want to book a taxi.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl text-center flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Embedded Map Area (7 Columns) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-lg flex flex-col justify-between h-full min-h-[420px]">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-700">
                  Location Map: Stadium Road, T.P. Nagar, Korba
                </span>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Interactive Embed Iframe */}
            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-100">
              <iframe
                title="Prachi Travels Korba Office Location"
                src="https://maps.google.com/maps?q=Stadium+Road,+Transport+Nagar,+Korba,+Chhattisgarh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

            <p className="mt-3 text-xs text-slate-500 text-center">
              📍 Landmark: R.B. Tayer Complex, Near Stadium Ground, Transport Nagar, Korba (C.G.)
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
