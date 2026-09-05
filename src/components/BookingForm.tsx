import React, { useState } from 'react';
import { 
  Calendar, Clock, MapPin, Phone, User, MessageSquare, Car, Users, 
  Send, CheckCircle2, AlertCircle, Compass 
} from 'lucide-react';
import { TravelType, BookingData } from '../types';
import { FLEET, BUSINESS_INFO, KORBA_LOCATIONS, POPULAR_DESTINATIONS } from '../data/travelData';

interface BookingFormProps {
  initialData?: Partial<BookingData>;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialData }) => {
  const [formData, setFormData] = useState<BookingData>({
    fullName: initialData?.fullName || '',
    mobileNumber: initialData?.mobileNumber || '',
    pickupLocation: initialData?.pickupLocation || 'Korba (T.P. Nagar)',
    dropLocation: initialData?.dropLocation || 'Raipur (Airport / City)',
    travelType: initialData?.travelType || 'One Way',
    vehicle: initialData?.vehicle || 'SEDAN',
    travelDate: initialData?.travelDate || new Date().toISOString().split('T')[0],
    pickupTime: initialData?.pickupTime || '08:00 AM',
    passengers: initialData?.passengers || '1-4',
    specialRequirement: initialData?.specialRequirement || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if initialData updates from outside
  React.useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        ...initialData,
      }));
    }
  }, [initialData]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const cleanPhone = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Please specify your pickup location.';
    }

    if (formData.travelType !== 'Local Rental' && !formData.dropLocation.trim()) {
      newErrors.dropLocation = 'Please specify your drop location.';
    }

    if (!formData.travelDate) {
      newErrors.travelDate = 'Please select a travel date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructWhatsAppMessage = () => {
    return `Hello Prachi Travels,
I want to book a taxi.

Name: ${formData.fullName}
Mobile: ${formData.mobileNumber}
Pickup: ${formData.pickupLocation}
Drop: ${formData.travelType === 'Local Rental' ? 'Local Korba' : formData.dropLocation}
Travel Type: ${formData.travelType}
Vehicle: ${formData.vehicle}
Date: ${formData.travelDate}
Time: ${formData.pickupTime}
Passengers: ${formData.passengers}
Special Requirement: ${formData.specialRequirement || 'None'}

Please share the fare and availability.`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = constructWhatsAppMessage();
    const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.phone1}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="booking" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>Instant Dispatch Assistance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Book Your Taxi with Prachi Travels
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Fill in your trip details below. Submitting generates an instant pre-filled WhatsApp booking request directly to our Korba team.
          </p>
        </div>

        {/* Booking Form Card */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative">
          
          {isSubmitted && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center justify-between gap-3 animate-in fade-in">
              <div className="flex items-center gap-2 text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>WhatsApp inquiry opened! Our team will reply shortly with fare and vehicle availability.</span>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-bold text-emerald-700 underline"
              >
                Dismiss
              </button>
            </div>
          )}

          <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
            
            {/* Row 1: Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-600" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Enter your name"
                  className={`w-full text-sm font-semibold bg-white border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.fullName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-600 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>Mobile Number (10 digits) *</span>
                </label>
                <input
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  placeholder="e.g. 9244058002"
                  maxLength={13}
                  className={`w-full text-sm font-semibold bg-white border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.mobileNumber ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.mobileNumber && (
                  <p className="text-xs text-red-600 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.mobileNumber}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Travel Type Switcher */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                Travel Type *
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(['One Way', 'Round Trip', 'Local Rental'] as TravelType[]).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, travelType: type })}
                    className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all border text-center ${
                      formData.travelType === type
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Row 3: Pickup & Drop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>Pickup Location in Korba *</span>
                </label>
                <input
                  type="text"
                  value={formData.pickupLocation}
                  onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                  placeholder="e.g. Stadium Road, T.P. Nagar, BALCO"
                  className={`w-full text-sm font-semibold bg-white border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.pickupLocation ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                  }`}
                  list="form-pickup-suggestions"
                />
                <datalist id="form-pickup-suggestions">
                  {KORBA_LOCATIONS.map((loc) => (
                    <option key={loc} value={loc} />
                  ))}
                </datalist>
                {errors.pickupLocation && (
                  <p className="text-xs text-red-600 font-medium">{errors.pickupLocation}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-blue-600" />
                  <span>{formData.travelType === 'Local Rental' ? 'Local Coverage' : 'Drop Destination *'}</span>
                </label>
                {formData.travelType === 'Local Rental' ? (
                  <input
                    type="text"
                    value="Within Korba / Industrial Zone (8h/10h/12h package)"
                    disabled
                    className="w-full text-sm font-semibold bg-slate-200/70 border border-slate-300 rounded-xl px-4 py-3 cursor-not-allowed text-slate-600"
                  />
                ) : (
                  <div>
                    <input
                      type="text"
                      value={formData.dropLocation}
                      onChange={(e) => setFormData({ ...formData, dropLocation: e.target.value })}
                      placeholder="e.g. Bilaspur, Raipur, Ambikapur"
                      className={`w-full text-sm font-semibold bg-white border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        errors.dropLocation ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                      }`}
                      list="form-drop-suggestions"
                    />
                    <datalist id="form-drop-suggestions">
                      {POPULAR_DESTINATIONS.map((dest) => (
                        <option key={dest} value={dest} />
                      ))}
                    </datalist>
                    {errors.dropLocation && (
                      <p className="text-xs text-red-600 font-medium">{errors.dropLocation}</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Row 4: Vehicle & Passengers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-blue-600" />
                  <span>Preferred Vehicle *</span>
                </label>
                <select
                  value={formData.vehicle}
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                  className="w-full text-sm font-semibold bg-white border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {FLEET.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name} — ₹{c.roundTripRatePerKm}/km ({c.capacity})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  <span>Number of Passengers</span>
                </label>
                <select
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                  className="w-full text-sm font-semibold bg-white border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People (Sedan)</option>
                  <option value="5">5 People (Ertiga / Kia)</option>
                  <option value="6">6 People (Ertiga / Kia)</option>
                  <option value="7">7 People (Innova Crysta)</option>
                </select>
              </div>
            </div>

            {/* Row 5: Date & Pickup Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>Travel Date *</span>
                </label>
                <input
                  type="date"
                  value={formData.travelDate}
                  onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full text-sm font-semibold bg-white border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Pickup Time</span>
                </label>
                <input
                  type="text"
                  value={formData.pickupTime}
                  onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                  placeholder="e.g. 08:30 AM or 04:00 PM"
                  className="w-full text-sm font-semibold bg-white border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Row 6: Message / Special Requirement */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                Message / Special Requirement (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.specialRequirement}
                onChange={(e) => setFormData({ ...formData, specialRequirement: e.target.value })}
                placeholder="e.g. Extra luggage space required, airport flight timing 6:30 PM, pet friendly, corporate billing, etc."
                className="w-full text-sm font-semibold bg-white border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2.5 active:scale-98 transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Book via WhatsApp</span>
              </button>

              <a
                href={`tel:+91${BUSINESS_INFO.phone1}`}
                className="w-full sm:w-auto py-4 px-6 rounded-2xl bg-brand-navy hover:bg-slate-800 text-white font-bold text-base shadow-md flex items-center justify-center gap-2 active:scale-98 transition-all"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <span>Call for Booking</span>
              </a>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
