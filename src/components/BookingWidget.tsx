import React, { useState, useMemo } from 'react';
import { 
  MapPin, Calendar, Clock, Users, Car, ArrowRight, Compass, 
  Sparkles, Zap, Shield, MessageSquare, Calculator, CheckCircle2 
} from 'lucide-react';
import { TravelType } from '../types';
import { 
  KORBA_LOCATIONS, POPULAR_DESTINATIONS, FLEET, 
  QUICK_LANDMARKS, ONE_WAY_ROUTES, LOCAL_RENTAL_PACKAGES, BUSINESS_INFO 
} from '../data/travelData';

interface BookingWidgetProps {
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

export const BookingWidget: React.FC<BookingWidgetProps> = ({ onSearch }) => {
  const [travelType, setTravelType] = useState<TravelType>('One Way');
  const [pickup, setPickup] = useState('Korba (T.P. Nagar)');
  const [drop, setDrop] = useState('Raipur (Airport)');
  const [vehicle, setVehicle] = useState('SEDAN');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('08:00 AM');
  const [passengers, setPassengers] = useState('1-4');

  // Quick chip click
  const handleQuickChip = (chip: typeof QUICK_LANDMARKS[0]) => {
    setPickup(chip.pickup);
    setDrop(chip.drop);
  };

  // Find selected vehicle specs
  const selectedVehicleObj = useMemo(() => {
    return FLEET.find((c) => c.name === vehicle) || FLEET[0];
  }, [vehicle]);

  // Compute estimated distance based on known routes
  const estimate = useMemo(() => {
    const matchedRoute = ONE_WAY_ROUTES.find((r) => {
      const p = pickup.toLowerCase();
      const d = drop.toLowerCase();
      return (
        (p.includes(r.from.toLowerCase()) && d.includes(r.to.toLowerCase())) ||
        (d.includes(r.from.toLowerCase()) && p.includes(r.to.toLowerCase()))
      );
    });

    const distKm = matchedRoute?.approxDistanceKm || (travelType === 'Local Rental' ? 80 : 120);
    const duration = matchedRoute?.approxDuration || (travelType === 'Local Rental' ? '8 Hours' : '2.5 - 3 Hours');

    // Calculate approximate transparent fare preview
    let estimatedCostText = '';
    let calculationBreakdown = '';

    if (travelType === 'Round Trip') {
      const minDailyKm = 300;
      const effectiveKm = Math.max(distKm * 2, minDailyKm);
      const baseFare = effectiveKm * selectedVehicleObj.roundTripRatePerKm;
      const driverAllowance = 400;
      const totalEstimated = baseFare + driverAllowance;

      estimatedCostText = `~₹${totalEstimated.toLocaleString('en-IN')}`;
      calculationBreakdown = `₹${selectedVehicleObj.roundTripRatePerKm}/km × ${effectiveKm} km (min 300km rule) + ₹400 Driver Allowance`;
    } else if (travelType === 'Local Rental') {
      const localPkg = LOCAL_RENTAL_PACKAGES[0]; // 8h / 80km
      let cost = localPkg.sedan;
      if (vehicle === 'ERTIGA' || vehicle === 'KIA CARRANCE') cost = localPkg.ertiga;
      if (vehicle === 'INNOVA' || vehicle === 'INNOVA CRYSTA') cost = localPkg.innovaCrysta;

      estimatedCostText = `₹${cost.toLocaleString('en-IN')}`;
      calculationBreakdown = `Fixed 8 Hours / 80 Km Package for ${vehicle}`;
    } else {
      // One way
      estimatedCostText = 'Call / WhatsApp for Current Fare';
      calculationBreakdown = `Custom one-way route pricing for ${selectedVehicleObj.name} (no return charge)`;
    }

    return {
      distKm,
      duration,
      estimatedCostText,
      calculationBreakdown,
    };
  }, [pickup, drop, travelType, vehicle, selectedVehicleObj]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      pickup,
      drop: travelType === 'Local Rental' ? 'Local Korba' : drop,
      travelType,
      vehicle,
      date,
      time,
      passengers,
    });
  };

  const handleQuickWhatsAppLock = () => {
    const msg = `Hello Prachi Travels,
I want to lock the fare estimate for my taxi ride:

Pickup: ${pickup}
Drop: ${travelType === 'Local Rental' ? 'Local Korba' : drop}
Travel Type: ${travelType}
Vehicle: ${vehicle} (₹${selectedVehicleObj.roundTripRatePerKm}/km)
Date: ${date}
Time: ${time}
Passengers: ${passengers}
Estimate: ${estimate.estimatedCostText} (${estimate.distKm} km)

Please confirm booking and vehicle availability.`;

    const url = `https://wa.me/91${BUSINESS_INFO.phone1}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl shadow-blue-950/10 border border-slate-200/90 p-5 sm:p-8 relative z-20">
      
      {/* Top 1-Tap Landmark Quick-Picks Header */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-2.5">
          <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span className="text-xs font-black text-slate-700 uppercase tracking-wider">
            1-Tap Quick Route Selection:
          </span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {QUICK_LANDMARKS.map((chip, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleQuickChip(chip)}
              className="shrink-0 text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 border border-slate-200/80 transition-all flex items-center gap-1.5 active:scale-95"
              title={chip.desc}
            >
              <span>{chip.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Travel Type Tabs */}
      <div className="flex p-1.5 bg-slate-100 rounded-2xl mb-6 max-w-md border border-slate-200/60">
        {(['One Way', 'Round Trip', 'Local Rental'] as TravelType[]).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setTravelType(type)}
            className={`flex-1 py-2.5 text-xs sm:text-sm font-extrabold rounded-xl transition-all ${
              travelType === type
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 scale-[1.02]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Pickup Location */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>Pickup Location</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="e.g. Korba, T.P. Nagar, BALCO"
                className="w-full text-sm font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-inner"
                required
                list="pickup-suggestions"
              />
              <datalist id="pickup-suggestions">
                {KORBA_LOCATIONS.map((loc) => (
                  <option key={loc} value={loc} />
                ))}
              </datalist>
            </div>
          </div>

          {/* Drop Location */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-blue-600" />
              <span>{travelType === 'Local Rental' ? 'Trip Coverage' : 'Drop Destination'}</span>
            </label>
            {travelType === 'Local Rental' ? (
              <input
                type="text"
                value="Local Korba & Industrial Area"
                disabled
                className="w-full text-sm font-semibold text-slate-500 bg-slate-100 border border-slate-200 rounded-xl px-3.5 py-3 cursor-not-allowed"
              />
            ) : (
              <div className="relative">
                <input
                  type="text"
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                  placeholder="e.g. Bilaspur, Raipur, Ambikapur"
                  className="w-full text-sm font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-inner"
                  required
                  list="drop-suggestions"
                />
                <datalist id="drop-suggestions">
                  {POPULAR_DESTINATIONS.map((dest) => (
                    <option key={dest} value={dest} />
                  ))}
                </datalist>
              </div>
            )}
          </div>

          {/* Travel Date */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>Travel Date</span>
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full text-sm font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-inner"
              required
            />
          </div>

          {/* Vehicle Select */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-blue-600" />
              <span>Vehicle &amp; Rate</span>
            </label>
            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full text-sm font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-inner"
            >
              {FLEET.map((car) => (
                <option key={car.id} value={car.name}>
                  {car.name} — ₹{car.roundTripRatePerKm}/km ({car.capacity})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Live Interactive Fare Estimator Box */}
        <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/50 to-slate-50 border border-blue-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-black text-brand-navy uppercase tracking-wide">
                  Estimated Trip:
                </span>
                <span className="text-xs font-bold text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded-md">
                  ~{estimate.distKm} km ({estimate.duration})
                </span>
                <span className="text-xs font-semibold text-slate-600">
                  via {vehicle}
                </span>
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {estimate.calculationBreakdown}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-bold text-slate-400 uppercase">Estimated Fare</div>
              <div className="text-lg font-black text-blue-700">{estimate.estimatedCostText}</div>
            </div>

            <button
              type="button"
              onClick={handleQuickWhatsAppLock}
              className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>Lock Fare on WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Secondary Row: Time, Passengers & Main CTA */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-end pt-2">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>Pickup Time</span>
            </label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full text-sm font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-inner"
            >
              <option value="06:00 AM">Early Morning (06:00 AM)</option>
              <option value="08:00 AM">Morning (08:00 AM)</option>
              <option value="10:00 AM">Late Morning (10:00 AM)</option>
              <option value="12:00 PM">Noon (12:00 PM)</option>
              <option value="02:00 PM">Afternoon (02:00 PM)</option>
              <option value="05:00 PM">Evening (05:00 PM)</option>
              <option value="08:00 PM">Night (08:00 PM)</option>
              <option value="11:00 PM">Late Night (11:00 PM)</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-blue-600" />
              <span>Passengers</span>
            </label>
            <select
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="w-full text-sm font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-inner"
            >
              <option value="1-4">1 - 4 Passengers (Sedan)</option>
              <option value="5-6">5 - 6 Passengers (Ertiga / Kia)</option>
              <option value="7">7 Passengers (Innova / Crysta)</option>
            </select>
          </div>

          <div className="sm:col-span-1 lg:col-span-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-black text-sm sm:text-base rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group active:scale-98"
            >
              <span>Get Fare / Book Taxi</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
