import React from 'react';
import { 
  Users, Briefcase, Check, ArrowRight, MessageSquare, ShieldCheck, 
  Sparkles, Fuel, Wind, Gauge, Award, CheckCircle2 
} from 'lucide-react';
import { FLEET, BUSINESS_INFO } from '../data/travelData';

interface FleetProps {
  onBookCar: (carName: string) => void;
}

export const Fleet: React.FC<FleetProps> = ({ onBookCar }) => {
  return (
    <section id="fleet" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Verified Commercial Fleet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Transparent Per-Km Fleet Rates
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From comfortable Dzire sedans to spacious Innova Crysta multi-seaters. All vehicles are sanitized, GPS-equipped, and driven by experienced chauffeurs.
          </p>
        </div>

        {/* Fleet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FLEET.map((car) => {
            const isCrysta = car.id === 'innova-crysta';
            const isErtiga = car.id === 'ertiga';
            const isKia = car.id === 'kia-carrance';
            const isSedan = car.id === 'sedan';

            return (
              <div
                key={car.id}
                className={`rounded-3xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative bg-white ${
                  isCrysta
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/15 ring-2 ring-blue-500/30'
                    : isErtiga
                    ? 'border-emerald-300 shadow-xl shadow-emerald-500/10'
                    : 'border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300'
                }`}
              >
                {/* Visual Pill Highlight */}
                {isCrysta && (
                  <div className="absolute -top-3.5 left-6 bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-[11px] font-black px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                    <span>VIP &amp; Executive Choice</span>
                  </div>
                )}
                {isErtiga && (
                  <div className="absolute -top-3.5 left-6 bg-emerald-600 text-white text-[11px] font-black px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                    <Award className="w-3.5 h-3.5" />
                    <span>Most Popular Family MUV</span>
                  </div>
                )}
                {isKia && (
                  <div className="absolute -top-3.5 left-6 bg-purple-700 text-white text-[11px] font-black px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                    <span>Modern Luxury MUV</span>
                  </div>
                )}
                {isSedan && (
                  <div className="absolute -top-3.5 left-6 bg-slate-800 text-white text-[11px] font-black px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                    <span>Best for Couples &amp; Solo</span>
                  </div>
                )}

                <div>
                  {/* Card Header: Vehicle Name & Category */}
                  <div className="flex items-start justify-between mb-4 pt-1">
                    <div>
                      <h3 className="text-2xl font-black text-brand-navy tracking-tight">
                        {car.name}
                      </h3>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                        {car.category}
                      </p>
                    </div>

                    {/* Price Tag */}
                    <div className="text-right bg-blue-50/80 px-3 py-1.5 rounded-xl border border-blue-100">
                      <div className="text-2xl font-black text-blue-700">
                        ₹{car.roundTripRatePerKm}
                        <span className="text-xs font-bold text-slate-500">/km</span>
                      </div>
                      <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider block">
                        Round Trip
                      </span>
                    </div>
                  </div>

                  {/* Vehicle Image Banner */}
                  <div className="w-full h-40 bg-gradient-to-b from-slate-50 to-blue-50/60 rounded-2xl p-4 flex items-center justify-center border border-slate-100 mb-5 overflow-hidden group">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="max-h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Visual Spec Badges */}
                  <div className="flex items-center gap-1.5 flex-wrap mb-4">
                    <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 flex items-center gap-1">
                      <Users className="w-3 h-3 text-blue-600" />
                      <span>{car.capacity}</span>
                    </span>
                    <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 flex items-center gap-1">
                      <Wind className="w-3 h-3 text-blue-600" />
                      <span>Chilled Dual AC</span>
                    </span>
                    <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 flex items-center gap-1">
                      <Briefcase className="w-3 h-3 text-blue-600" />
                      <span>{car.luggageCapacity}</span>
                    </span>
                  </div>

                  {/* Vehicle Features */}
                  <div className="space-y-2 mb-5">
                    {car.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Usage Summary */}
                  <p className="text-xs text-slate-600 bg-blue-50/50 p-3 rounded-xl border border-blue-100/70 mb-5 leading-relaxed">
                    <strong className="text-brand-navy">Best suited for:</strong> {car.popularFor}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onBookCar(car.name)}
                    className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <span>Book {car.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/91${BUSINESS_INFO.phone1}?text=${encodeURIComponent(`Hello Prachi Travels, I want to book ${car.name} (₹${car.roundTripRatePerKm}/km). Please share availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 hover:bg-emerald-100 transition-colors shrink-0"
                    title={`Enquire on WhatsApp for ${car.name}`}
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600 fill-emerald-600/20" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
