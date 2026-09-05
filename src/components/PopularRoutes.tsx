import React, { useState } from 'react';
import { MapPin, Navigation, Clock, MessageSquare, Phone, ArrowRight, Compass } from 'lucide-react';
import { ONE_WAY_ROUTES, BUSINESS_INFO } from '../data/travelData';
import { RouteItem } from '../types';

interface PopularRoutesProps {
  onSelectRoute: (from: string, to: string) => void;
}

export const PopularRoutes: React.FC<PopularRoutesProps> = ({ onSelectRoute }) => {
  const [activeGroup, setActiveGroup] = useState<'All' | 'Korba' | 'Champa' | 'Bilaspur' | 'Raipur'>('Korba');

  const filteredRoutes = activeGroup === 'All'
    ? ONE_WAY_ROUTES
    : ONE_WAY_ROUTES.filter((r) => r.group === activeGroup);

  return (
    <section id="routes" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Handwritten Route Sheet Reference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Popular One-Way Intercity Routes
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Confirmed one-way drops between Korba, Bilaspur, Raipur, Champa, Ambikapur, Bhilai, Jharsuguda, and major Chhattisgarh hubs. Available for Dzire, Ertiga &amp; Innova.
          </p>
        </div>

        {/* City Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {(['Korba', 'Champa', 'Bilaspur', 'Raipur', 'All'] as const).map((grp) => (
            <button
              key={grp}
              onClick={() => setActiveGroup(grp)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                activeGroup === grp
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {grp === 'All' ? 'All Confirmed Routes (39)' : `From ${grp}`}
            </button>
          ))}
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRoutes.map((route: RouteItem) => (
            <div
              key={route.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Route Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    One Way Drop
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>~{route.approxDuration}</span>
                  </span>
                </div>

                {/* Cities with arrow */}
                <div className="my-2 flex items-center justify-between gap-2">
                  <div className="flex-1">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase">From</div>
                    <div className="text-base font-extrabold text-brand-navy truncate">
                      {route.from}
                    </div>
                  </div>

                  <div className="px-2 py-1 rounded-full bg-blue-50 text-blue-600 font-bold shrink-0">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>

                  <div className="flex-1 text-right">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase">To</div>
                    <div className="text-base font-extrabold text-blue-700 truncate">
                      {route.to}
                    </div>
                  </div>
                </div>

                {/* Approx Distance & Vehicle Compatibility */}
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Distance: ~{route.approxDistanceKm} km</span>
                  <span className="font-medium text-slate-700">Dzire • Ertiga • Innova</span>
                </div>

                {/* Pricing Notice per source sheet rules */}
                <div className="mt-2.5 p-2 bg-slate-50 rounded-lg text-center">
                  <span className="text-xs font-bold text-slate-700">
                    Fare: <span className="text-blue-700">Call / WhatsApp for current fare</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onSelectRoute(route.from, route.to)}
                  className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1"
                >
                  <span>Select Route</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <a
                  href={`https://wa.me/91${BUSINESS_INFO.phone1}?text=${encodeURIComponent(`Hello Prachi Travels, please share the current one-way fare for route: ${route.from} to ${route.to} (Dzire/Ertiga/Innova).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs rounded-xl transition-colors flex items-center gap-1"
                  title="Check Route Fare on WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Check Fare</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Clarification banner per instructions */}
        <div className="mt-10 p-5 rounded-2xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-navy">
                Have an unlisted route or special pickup location in Chhattisgarh?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                We cater to all mines, power plants, and remote townships including Katghora, Kusmunda, Dipka, Gevra, and Pali.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:+91${BUSINESS_INFO.phone1}`}
              className="flex-1 sm:flex-initial text-center py-2.5 px-4 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              Call {BUSINESS_INFO.phone1}
            </a>
            <a
              href={`tel:+91${BUSINESS_INFO.phone2}`}
              className="flex-1 sm:flex-initial text-center py-2.5 px-4 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs font-bold hover:bg-slate-50 transition-colors"
            >
              Call {BUSINESS_INFO.phone2}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
