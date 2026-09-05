import React from 'react';
import { Shield, Clock, Gauge, User, AlertCircle, CheckCircle2, MessageSquare } from 'lucide-react';
import { ROUND_TRIP_RULES, LOCAL_RENTAL_PACKAGES, FLEET, BUSINESS_INFO } from '../data/travelData';

interface PricingRatesProps {
  onBookRental: (packageName: string) => void;
}

export const PricingRates: React.FC<PricingRatesProps> = ({ onBookRental }) => {
  return (
    <section id="pricing" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Source of Truth Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Round Trip Rules &amp; Local Rental Rates
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Clear, transparent taxi fares exactly as displayed on our official Korba fare board. No hidden surprises, no guesswork.
          </p>
        </div>

        {/* Grid: Round Trip Rules vs Local Rental Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Round Trip Rules & Fare (5 Columns on Desktop) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Outstation &amp; Return</span>
                <h3 className="text-xl font-extrabold text-brand-navy">Round Trip Rules &amp; Fare</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
            </div>

            {/* Vehicle Rates List */}
            <div className="space-y-2.5 mb-6">
              {FLEET.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-100 transition-colors"
                >
                  <span className="font-bold text-slate-800 text-sm tracking-wide">
                    {vehicle.name}
                  </span>
                  <div className="font-black text-blue-700 text-base">
                    ₹{vehicle.roundTripRatePerKm}
                    <span className="text-xs font-semibold text-slate-500"> / km</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Crucial Standard Rules from Poster */}
            <div className="space-y-3.5 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                <Gauge className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-brand-navy">
                    {ROUND_TRIP_RULES.minKmPerDay} Km Per Day Minimum
                  </div>
                  <div className="text-xs text-slate-500">Minimum daily billing threshold for outstation cars</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                <User className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-brand-navy">
                    ₹{ROUND_TRIP_RULES.driverAllowancePerDay} Per Day Driver Allowance
                  </div>
                  <div className="text-xs text-slate-500">Standard outstation driver food &amp; night charge</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                <AlertCircle className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-brand-navy">
                    {ROUND_TRIP_RULES.extraCharges}
                  </div>
                  <div className="text-xs text-slate-500">Actual toll plazas, parking, border &amp; state entry taxes as per receipts</div>
                </div>
              </div>
            </div>

            {/* Verified Note verbatim from poster in Hindi & English */}
            <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1.5 leading-relaxed">
                  <p className="font-bold text-amber-950">
                    NOTE (महत्वपूर्ण नियम):
                  </p>
                  <p className="italic">
                    "{ROUND_TRIP_RULES.odometerRuleHindi}"
                  </p>
                  <p className="text-[11px] text-amber-800">
                    (Kilometer counting begins from the starting garage/pickup point and concludes when the car returns to Korba).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Local Rental Rate (7 Columns on Desktop) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Hourly &amp; Daily In-City</span>
                <h3 className="text-xl font-extrabold text-brand-navy">Local Rental Rate</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Fixed local cab rental packages for Korba city, plant visits (BALCO, NTPC, CSEB), family shopping, and local events.
            </p>

            {/* Responsive Table / Card Container */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-slate-200 text-xs font-extrabold text-slate-500 uppercase tracking-wider bg-slate-50">
                    <th className="py-3 px-4 rounded-l-xl">Rental Package</th>
                    <th className="py-3 px-4">SEDAN</th>
                    <th className="py-3 px-4">ERTIGA</th>
                    <th className="py-3 px-4 rounded-r-xl">INNOVA CRYSTA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {LOCAL_RENTAL_PACKAGES.map((pkg) => (
                    <tr key={pkg.hours} className="hover:bg-blue-50/40 transition-colors">
                      <td className="py-4 px-4 font-bold text-brand-navy">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span>{pkg.hours} Hours / {pkg.km} Km</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-black text-slate-800">
                        ₹ {pkg.sedan}
                      </td>
                      <td className="py-4 px-4 font-black text-blue-700">
                        ₹ {pkg.ertiga}
                      </td>
                      <td className="py-4 px-4 font-black text-indigo-700">
                        ₹ {pkg.innovaCrysta}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quick explanation cards below table */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-4 border-t border-slate-100">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                <div className="text-xs font-bold text-slate-500 uppercase">SEDAN Package</div>
                <div className="text-lg font-black text-slate-800 mt-0.5">Starts ₹1,800</div>
                <div className="text-[11px] text-slate-500">Dzire / Etios AC</div>
              </div>

              <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-center">
                <div className="text-xs font-bold text-blue-700 uppercase">ERTIGA Package</div>
                <div className="text-lg font-black text-blue-800 mt-0.5">Starts ₹2,300</div>
                <div className="text-[11px] text-blue-600">6 Seater Family Cab</div>
              </div>

              <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-100 text-center">
                <div className="text-xs font-bold text-indigo-700 uppercase">INNOVA CRYSTA</div>
                <div className="text-lg font-black text-indigo-800 mt-0.5">Starts ₹3,500</div>
                <div className="text-[11px] text-indigo-600">Luxury Captain Seats</div>
              </div>
            </div>

            {/* Table Disclaimer */}
            <p className="mt-5 text-xs text-slate-500 flex items-start gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                Taxes/extra charges may apply where applicable. Extra km and extra hour rates applicable beyond package limits. Please confirm final fare before booking.
              </span>
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onBookRental('Local Rental')}
                className="w-full sm:w-auto flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95"
              >
                Book Local Cab in Korba
              </button>

              <a
                href={`https://wa.me/91${BUSINESS_INFO.phone1}?text=${encodeURIComponent('Hello Prachi Travels, I want to enquire about Local Rental packages in Korba.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3 px-5 bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold text-xs sm:text-sm rounded-xl hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
