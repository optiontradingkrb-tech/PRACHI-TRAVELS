import React from 'react';
import { Quote, Star, CheckCircle, MapPin, Calendar, Clock, Car } from 'lucide-react';
import { REAL_TRAVEL_SCENARIOS, BUSINESS_INFO } from '../data/travelData';

export const CustomerStories: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>Real Passenger Journeys</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Trusted by Travelers Across Korba
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Read authentic trip experiences from local residents, plant engineers, and families traveling across Chhattisgarh.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REAL_TRAVEL_SCENARIOS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Verified Trip
                  </span>
                </div>

                {/* Route Header */}
                <h3 className="text-base font-extrabold text-brand-navy mb-1 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-blue-600 mb-3 flex items-center gap-1">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span>{item.route}</span>
                </p>

                {/* Passenger Quote */}
                <p className="text-xs text-slate-600 leading-relaxed italic bg-slate-50 p-3.5 rounded-xl border border-slate-100 mb-4">
                  "{item.feedback}"
                </p>
              </div>

              {/* Trip Metadata Footer */}
              <div className="pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Car className="w-3.5 h-3.5 text-blue-600" />
                    <span className="font-semibold text-slate-700">{item.car}</span>
                  </span>
                  <span className="font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                    {item.highlight}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3 h-3" />
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust summary strip */}
        <div className="mt-12 text-center text-xs font-semibold text-slate-500 flex items-center justify-center gap-6 flex-wrap">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>No Cancellation Surcharges</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>24/7 Phone &amp; WhatsApp Assistance</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Commercial Permit Vehicles</span>
          </span>
        </div>

      </div>
    </section>
  );
};
