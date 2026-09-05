import { Vehicle, LocalRatePackage, RouteItem, ServiceItem } from '../types';

export const BUSINESS_INFO = {
  brandName: 'PRACHI TRAVELS',
  serviceType: 'Taxi Service',
  tagline: 'Your Comfort, Our Priority',
  secondaryTagline: 'Safe Journey, Happy Journey',
  safetyPromise: 'Your Safety, Our Responsibility',
  appreciationNote: 'Thank You for Choosing Prachi Travels',
  phone1: '9244058002',
  phone2: '7869524013',
  phone1Display: '+91 92440 58002',
  phone2Display: '+91 78695 24013',
  email: 'prachitravels492@gmail.com',
  address: {
    line1: 'R.B Tayer Complex',
    line2: 'Stadium Road, T.P. Nagar',
    city: 'Korba',
    state: 'Chhattisgarh',
    pincode: '495677',
    country: 'India',
    full: 'R.B Tayer Complex, Stadium Road, T.P. Nagar, Korba, Chhattisgarh, India'
  },
  timings: '24/7 Service Available',
  establishedYear: '2026',
  googleMapsUrl: 'https://maps.google.com/?q=Stadium+Road,+TP+Nagar,+Korba,+Chhattisgarh'
};

export const QUICK_LANDMARKS = [
  { label: '✈️ Raipur Airport', pickup: 'Korba (T.P. Nagar)', drop: 'Raipur (Airport)', desc: '~215 km | Direct flight transfers' },
  { label: '🚆 Champa Junction', pickup: 'Korba (T.P. Nagar)', drop: 'Champa Junction', desc: '~45 km | Train connectivity' },
  { label: '🏭 BALCO Township', pickup: 'BALCO Township, Korba', drop: 'Raipur / Bilaspur', desc: 'Plant & Executive Pickups' },
  { label: '⚡ NTPC Jamnipali', pickup: 'NTPC Jamnipali, Korba', drop: 'Bilaspur / Champa', desc: 'Township Doorstep Pickup' },
  { label: '🚆 Korba Station', pickup: 'Korba Railway Station', drop: 'Local / Outstation', desc: '24/7 Train Arrival Pickups' },
  { label: '🛕 Ratanpur Mandir', pickup: 'Korba', drop: 'Ratanpur (Mahamaya Temple)', desc: '~85 km | Darshan & Pilgrimage' },
  { label: '🏥 Bilaspur City', pickup: 'Korba', drop: 'Bilaspur (City / Apollo)', desc: '~90 km | Medical & Commercial' },
  { label: '✈️ Jharsuguda Airport', pickup: 'Korba', drop: 'Jharsuguda (Airport / Stn)', desc: '~175 km | Odisha Flight Connect' }
];

export const TRUST_INDICATORS = [
  {
    title: 'Best Cars',
    description: 'Clean, sanitized, comfortable AC sedans & luxury MUVs inspected before every journey.',
    icon: 'Car'
  },
  {
    title: 'Best Drivers',
    description: 'Courteous, verified chauffeurs with extensive highway & local Chhattisgarh route mastery.',
    icon: 'UserCheck'
  },
  {
    title: 'Safe & Comfortable Journey',
    description: 'Family-safe travel protocols, well-maintained vehicles, and reliable emergency support.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Family & Group Travel',
    description: 'Spacious 6-7 seaters (Ertiga & Innova Crysta) with generous legroom and luggage space.',
    icon: 'Users'
  },
  {
    title: 'On Time Service',
    description: 'Prompt doorstep pickups across Korba city, NTPC, BALCO, Kusmunda and nearby areas.',
    icon: 'Clock'
  }
];

export const FLEET: Vehicle[] = [
  {
    id: 'sedan',
    name: 'SEDAN',
    category: 'Sedan',
    roundTripRatePerKm: 12,
    capacity: '4 Passengers + Driver',
    luggageCapacity: '2 Large Suitcases + 2 Small Bags',
    features: ['Maruti Dzire / Etios AC', 'Chilled Dual Air Conditioner', 'Spacious Legroom & Clean Seat Covers', 'Bottle Holders & Phone Charging'],
    image: '/assets/hero-taxi-car.png',
    popularFor: 'Couples, solo professionals, corporate visits & small families'
  },
  {
    id: 'ertiga',
    name: 'ERTIGA',
    category: 'MUV / SUV',
    roundTripRatePerKm: 14,
    capacity: '6 Passengers + Driver',
    luggageCapacity: '3-4 Medium Bags (Expandable Boot)',
    features: ['Maruti Suzuki Ertiga Smart Hybrid', 'Dedicated Roof AC Vents for 2nd & 3rd Row', 'Reclining Comfort Seats', 'Smooth Highway Suspension'],
    image: '/assets/hero-taxi-car.png',
    popularFor: 'Family trips, airport transfers, weddings & group travel'
  },
  {
    id: 'kia-carrance',
    name: 'KIA CARRANCE',
    category: 'MUV / SUV',
    roundTripRatePerKm: 14,
    capacity: '6-7 Passengers + Driver',
    luggageCapacity: '3-4 Medium Bags',
    features: ['Kia Carens / Carrance', 'Ultra Modern Interior & Air Purifier', 'Individual Row Blower Controls', 'Plush Ergonomic Cushioning'],
    image: '/assets/hero-taxi-car.png',
    popularFor: 'Long outstation drives, VIP delegates & executive tours'
  },
  {
    id: 'innova',
    name: 'INNOVA',
    category: 'Premium MUV',
    roundTripRatePerKm: 16,
    capacity: '7 Passengers + Driver',
    luggageCapacity: '4-5 Large Suitcases',
    features: ['Toyota Innova Classic', 'Legendary Highway Reliability', 'Super Strong Multi-Zone Air Conditioner', 'Heavy Luggage Carrier Support'],
    image: '/assets/hero-taxi-car.png',
    popularFor: 'Highway road trips, pilgrimage tours & heavy luggage travel'
  },
  {
    id: 'innova-crysta',
    name: 'INNOVA CRYSTA',
    category: 'Premium MUV',
    roundTripRatePerKm: 17,
    capacity: '7 Passengers + Driver',
    luggageCapacity: '4-5 Large Suitcases',
    features: ['Toyota Innova Crysta Luxury', 'Plush Captain Reclining Seats with Armrests', 'Whisper-Quiet Soundproof Cabin', 'Executive Business Class Comfort'],
    image: '/assets/hero-taxi-car.png',
    popularFor: 'VIP guests, wedding baraat, senior citizen comfort & luxury travel'
  }
];

export const ROUND_TRIP_RULES = {
  minKmPerDay: 300,
  driverAllowancePerDay: 400,
  extraCharges: 'Toll Tax + Border Tax + State Tax Extra',
  odometerRuleHindi: 'Round Trip me kilometer counting gadi ki starting location se end pickup location tak hi rahega.',
  odometerRuleEnglish: 'For round-trip bookings, kilometer reading starts from the vehicle departure garage and ends when the vehicle returns back to the starting point in Korba.'
};

export const LOCAL_RENTAL_PACKAGES: LocalRatePackage[] = [
  {
    hours: 8,
    km: 80,
    sedan: 1800,
    ertiga: 2300,
    innovaCrysta: 3500
  },
  {
    hours: 10,
    km: 100,
    sedan: 2200,
    ertiga: 2900,
    innovaCrysta: 4000
  },
  {
    hours: 12,
    km: 120,
    sedan: 2600,
    ertiga: 3500,
    innovaCrysta: 4600
  }
];

// Confirmed Routes directly transcribed from the handwritten route sheet
export const ONE_WAY_ROUTES: RouteItem[] = [
  // 1. Group Korba (Numbered 1-10 on handwritten sheet)
  { id: 'k-bilaspur', from: 'Korba', to: 'Bilaspur', approxDistanceKm: 90, approxDuration: '2 - 2.5 hrs', group: 'Korba' },
  { id: 'k-raipur', from: 'Korba', to: 'Raipur (City / Airport)', approxDistanceKm: 215, approxDuration: '4.5 - 5 hrs', group: 'Korba' },
  { id: 'k-champa', from: 'Korba', to: 'Champa Junction', approxDistanceKm: 45, approxDuration: '1 - 1.2 hrs', group: 'Korba' },
  { id: 'k-raigarh', from: 'Korba', to: 'Raigarh', approxDistanceKm: 110, approxDuration: '2.5 - 3 hrs', group: 'Korba' },
  { id: 'k-ambikapur', from: 'Korba', to: 'Ambikapur', approxDistanceKm: 165, approxDuration: '4 - 4.5 hrs', group: 'Korba' },
  { id: 'k-jharsuguda', from: 'Korba', to: 'Jharsuguda (Airport / Stn)', approxDistanceKm: 175, approxDuration: '4 - 4.5 hrs', group: 'Korba' },
  { id: 'k-bhilai', from: 'Korba', to: 'Bhilai', approxDistanceKm: 245, approxDuration: '5.5 - 6 hrs', group: 'Korba' },
  { id: 'k-bemetara', from: 'Korba', to: 'Bemetara', approxDistanceKm: 185, approxDuration: '4 - 4.5 hrs', group: 'Korba' },
  { id: 'k-baloda-bazar', from: 'Korba', to: 'Baloda Bazar', approxDistanceKm: 155, approxDuration: '3.5 - 4 hrs', group: 'Korba' },
  { id: 'k-rajnandgaon', from: 'Korba', to: 'Rajnandgaon', approxDistanceKm: 285, approxDuration: '6 - 6.5 hrs', group: 'Korba' },

  // 2. Group Champa (from handwritten sheet)
  { id: 'c-korba', from: 'Champa', to: 'Korba', approxDistanceKm: 45, approxDuration: '1 hr', group: 'Champa' },
  { id: 'c-bilaspur', from: 'Champa', to: 'Bilaspur', approxDistanceKm: 85, approxDuration: '2 hrs', group: 'Champa' },
  { id: 'c-raigarh', from: 'Champa', to: 'Raigarh', approxDistanceKm: 75, approxDuration: '1.8 hrs', group: 'Champa' },
  { id: 'c-raipur', from: 'Champa', to: 'Raipur', approxDistanceKm: 170, approxDuration: '3.5 hrs', group: 'Champa' },
  { id: 'c-jharsuguda', from: 'Champa', to: 'Jharsuguda', approxDistanceKm: 140, approxDuration: '3 hrs', group: 'Champa' },
  { id: 'c-baloda-bazar', from: 'Champa', to: 'Baloda Bazar', approxDistanceKm: 110, approxDuration: '2.5 hrs', group: 'Champa' },
  { id: 'c-durg', from: 'Champa', to: 'Durg', approxDistanceKm: 210, approxDuration: '4.5 hrs', group: 'Champa' },
  { id: 'c-ambikapur', from: 'Champa', to: 'Ambikapur', approxDistanceKm: 200, approxDuration: '5 hrs', group: 'Champa' },

  // 3. Group Bilaspur (from handwritten sheet)
  { id: 'b-korba', from: 'Bilaspur', to: 'Korba', approxDistanceKm: 90, approxDuration: '2.2 hrs', group: 'Bilaspur' },
  { id: 'b-champa', from: 'Bilaspur', to: 'Champa', approxDistanceKm: 85, approxDuration: '2 hrs', group: 'Bilaspur' },
  { id: 'b-raipur', from: 'Bilaspur', to: 'Raipur', approxDistanceKm: 120, approxDuration: '2.5 hrs', group: 'Bilaspur' },
  { id: 'b-bhilai', from: 'Bilaspur', to: 'Bhilai', approxDistanceKm: 155, approxDuration: '3.5 hrs', group: 'Bilaspur' },
  { id: 'b-durg', from: 'Bilaspur', to: 'Durg', approxDistanceKm: 165, approxDuration: '3.8 hrs', group: 'Bilaspur' },
  { id: 'b-rajnandgaon', from: 'Bilaspur', to: 'Rajnandgaon', approxDistanceKm: 195, approxDuration: '4.2 hrs', group: 'Bilaspur' },
  { id: 'b-raigarh', from: 'Bilaspur', to: 'Raigarh', approxDistanceKm: 155, approxDuration: '3.5 hrs', group: 'Bilaspur' },
  { id: 'b-jharsuguda', from: 'Bilaspur', to: 'Jharsuguda', approxDistanceKm: 220, approxDuration: '5 hrs', group: 'Bilaspur' },
  { id: 'b-ambikapur', from: 'Bilaspur', to: 'Ambikapur', approxDistanceKm: 230, approxDuration: '5.5 hrs', group: 'Bilaspur' },
  { id: 'b-baloda-bazar', from: 'Bilaspur', to: 'Baloda Bazar', approxDistanceKm: 85, approxDuration: '2 hrs', group: 'Bilaspur' },

  // 4. Group Raipur (from handwritten sheet)
  { id: 'r-bilaspur', from: 'Raipur', to: 'Bilaspur', approxDistanceKm: 120, approxDuration: '2.5 hrs', group: 'Raipur' },
  { id: 'r-bhilai', from: 'Raipur', to: 'Bhilai', approxDistanceKm: 35, approxDuration: '50 mins', group: 'Raipur' },
  { id: 'r-durg', from: 'Raipur', to: 'Durg', approxDistanceKm: 45, approxDuration: '1 hr', group: 'Raipur' },
  { id: 'r-rajnandgaon', from: 'Raipur', to: 'Rajnandgaon', approxDistanceKm: 75, approxDuration: '1.5 hrs', group: 'Raipur' },
  { id: 'r-champa', from: 'Raipur', to: 'Champa', approxDistanceKm: 170, approxDuration: '3.5 hrs', group: 'Raipur' },
  { id: 'r-korba', from: 'Raipur', to: 'Korba', approxDistanceKm: 215, approxDuration: '4.5 hrs', group: 'Raipur' },
  { id: 'r-raigarh', from: 'Raipur', to: 'Raigarh', approxDistanceKm: 250, approxDuration: '5.5 hrs', group: 'Raipur' },
  { id: 'r-jharsuguda', from: 'Raipur', to: 'Jharsuguda', approxDistanceKm: 310, approxDuration: '6.5 hrs', group: 'Raipur' },
  { id: 'r-baloda-bazar', from: 'Raipur', to: 'Baloda Bazar', approxDistanceKm: 85, approxDuration: '2 hrs', group: 'Raipur' },
  { id: 'r-nagpur', from: 'Raipur', to: 'Nagpur', approxDistanceKm: 290, approxDuration: '6 hrs', group: 'Raipur' },
  { id: 'r-ambikapur', from: 'Raipur', to: 'Ambikapur', approxDistanceKm: 340, approxDuration: '7.5 hrs', group: 'Raipur' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'local-taxi',
    title: 'Local Taxi Rental',
    tagline: 'Korba City & Industrial Hubs',
    description: 'Flexible hourly & daily rental packages for local visits in Korba, BALCO, NTPC, Kusmunda, Darri, and shopping runs.',
    icon: 'MapPin',
    badge: 'Popular'
  },
  {
    id: 'one-way-taxi',
    title: 'One Way Taxi',
    tagline: 'Pay Only for One Side',
    description: 'Affordable one-way intercity drops without paying return toll or empty return fare. Available for all popular routes.',
    icon: 'ArrowRightCircle',
    badge: 'Best Value'
  },
  {
    id: 'round-trip-taxi',
    title: 'Round Trip Taxi',
    tagline: 'Relaxed Multi-Day Journeys',
    description: 'Starting from just ₹12/km with dedicated verified chauffeur. Keep the car with you for complete flexibility on your tour.',
    icon: 'Repeat',
    badge: 'From ₹12/km'
  },
  {
    id: 'outstation-taxi',
    title: 'Outstation Taxi',
    tagline: 'All Across CG & Neighboring States',
    description: 'Reliable highway cabs for journeys across Chhattisgarh, Odisha (Jharsuguda/Sambalpur), MP (Amarkantak/Jabalpur) & Nagpur.',
    icon: 'Navigation'
  },
  {
    id: 'airport-railway',
    title: 'Airport / Railway Transfer',
    tagline: 'On-Time Terminal Pickups',
    description: 'Guaranteed on-time drops & pickups for Raipur Airport (RPR), Jharsuguda Airport (JRG), Champa Junction & Bilaspur Railway Station.',
    icon: 'Plane'
  },
  {
    id: 'family-group',
    title: 'Family & Group Travel',
    tagline: 'Spacious 6 & 7 Seater MUVs',
    description: 'Travel comfortably together in Ertiga, Kia Carrance, or Innova Crysta with ample luggage space and rear AC cooling.',
    icon: 'Users'
  },
  {
    id: 'corporate-travel',
    title: 'Corporate Travel',
    tagline: 'Professional Executive Chauffeurs',
    description: 'Premium sedans and Innova Crysta for corporate clients, power plant executives, site engineers, and VIP delegates.',
    icon: 'Briefcase'
  },
  {
    id: 'full-day-rental',
    title: 'Full Day Cab Rental',
    tagline: '8, 10 & 12 Hour Packages',
    description: 'Convenient dedicated car at your service for weddings, continuous meetings, full-day shopping, or medical appointments.',
    icon: 'CalendarClock'
  }
];

export const FAQS = [
  {
    question: 'How is the kilometer counted for round-trip taxi bookings?',
    questionHindi: 'राउंड ट्रिप टैक्सी बुकिंग के लिए किलोमीटर की गणना कैसे होती है?',
    answer: 'As stated on our fare rules, "Round Trip me kilometer counting gadi ki starting location se end pickup location tak hi rahega." The kilometer reading commences when the car leaves the garage/origin in Korba and concludes once the vehicle safely returns to the starting location.',
    answerHindi: 'हमारे आधिकारिक नियमों के अनुसार, राउंड ट्रिप में किलोमीटर की गिनती गाड़ी के शुरू होने वाले स्थान (कोरबा) से अंतिम ड्रॉप/वापसी स्थान तक ही की जाती है।'
  },
  {
    question: 'What is the minimum billing kilometer for outstation round trips?',
    questionHindi: 'आउटस्टेशन राउंड ट्रिप के लिए न्यूनतम बिलिंग क्या है?',
    answer: 'For outstation round trips, a minimum billing of 300 Km per day applies across all vehicles (Sedan ₹12/km, Ertiga ₹14/km, Kia Carrance ₹14/km, Innova ₹16/km, Innova Crysta ₹17/km).',
    answerHindi: 'आउटस्टेशन राउंड ट्रिप के लिए प्रतिदिन न्यूनतम 300 किलोमीटर का नियम लागू होता है।'
  },
  {
    question: 'Are toll taxes, parking, and state border taxes included in the per-km rate?',
    questionHindi: 'क्या टोल टैक्स, पार्किंग और स्टेट टैक्स प्रति किलोमीटर दर में शामिल हैं?',
    answer: 'No. Toll tax, border permit taxes, state entry tax, and airport/railway parking charges are actual out-of-pocket expenses paid at toll booths and are extra as per authentic toll slips.',
    answerHindi: 'नहीं। टोल टैक्स, बॉर्डर टैक्स, और पार्किंग शुल्क वास्तविक पर्ची (रसीद) के अनुसार अतिरिक्त देय होते हैं।'
  },
  {
    question: 'What is the Driver Allowance fee?',
    questionHindi: 'ड्राइवर भत्ता (Driver Allowance) क्या है?',
    answer: 'The standard driver food & night allowance is ₹400 per day for outstation journeys, ensuring your chauffeur is well-rested, energized, and focused on safe highway driving.',
    answerHindi: 'आउटस्टेशन यात्रा के लिए ड्राइवर भोजन व रात्रि भत्ता ₹400 प्रति दिन तय है।'
  },
  {
    question: 'Can I book early morning or late-night airport drops from Korba to Raipur?',
    questionHindi: 'क्या कोरबा से रायपुर एयरपोर्ट के लिए रात या सुबह जल्दी टैक्सी मिल सकती है?',
    answer: 'Yes! Prachi Travels operates 24 Hours / 7 Days a week. For early morning flights from Swami Vivekananda Airport (Raipur) or Jharsuguda Airport, our driver reaches your doorstep in Korba or BALCO with a 15-minute buffer.',
    answerHindi: 'हाँ! हमारी सेवा 24/7 उपलब्ध है। रायपुर या झारसुगुड़ा एयरपोर्ट की उड़ानों के लिए हमारे ड्राइवर समय से पहले आपके घर पहुँचते हैं।'
  },
  {
    question: 'What payment methods do you accept?',
    questionHindi: 'भुगतान के कौन-कौन से माध्यम स्वीकार किए जाते हैं?',
    answer: 'We accept all popular Indian digital payment modes including UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking, Cash, and Corporate Bank Transfers.',
    answerHindi: 'हम UPI (Google Pay, PhonePe, Paytm), नेट बैंकिंग, नकद (Cash) और कॉर्पोरेट ट्रांसफर स्वीकार करते हैं।'
  }
];

export const REAL_TRAVEL_SCENARIOS = [
  {
    id: 1,
    title: 'Early Morning Raipur Airport Drop',
    route: 'BALCO Township ➔ Raipur Airport (RPR)',
    car: 'SEDAN (Dzire AC)',
    time: '3:30 AM Departure',
    highlight: 'Punctual Doorstep Pickup',
    feedback: 'Driver was at our BALCO quarter gate at 3:15 AM. Smooth and safe drive on the highway, reached terminal with 2 hours to spare before flight.'
  },
  {
    id: 2,
    title: 'Family Pilgrimage & Temple Darshan',
    route: 'Korba ➔ Ratanpur Mahamaya Mandir (Round Trip)',
    car: 'MARUTI ERTIGA (6 Seater)',
    time: 'Same-day Return',
    highlight: 'Senior Citizen Friendly',
    feedback: 'Booked Ertiga for our parents and children. Chilled AC, smooth ride on hills, and driver waited patiently while we completed our temple puja.'
  },
  {
    id: 3,
    title: 'Executive Corporate Transfer',
    route: 'Champa Junction ➔ NTPC Jamnipali Plant',
    car: 'INNOVA CRYSTA (Captain Seats)',
    time: 'Evening Arrival',
    highlight: 'Clean VIP Interior',
    feedback: 'Train arrived at Champa late evening. Prachi Travels driver was waiting on platform exit with signboard. Clean car and executive driving.'
  }
];

export const KORBA_LOCATIONS = [
  'T.P. Nagar (Transport Nagar)',
  'Stadium Road / R.B Tayer Complex',
  'Korba Railway Station',
  'BALCO Township',
  'NTPC Jamnipali',
  'Kusmunda Area',
  'Gevra / Dipka',
  'Darri Colony',
  'CSEB Colony Korba',
  'Budhwari Bazar',
  'Rajnagar Korba',
  'Katghora'
];

export const POPULAR_DESTINATIONS = [
  'Bilaspur (City / Railway Station)',
  'Raipur (Swami Vivekananda Airport RPR)',
  'Raipur City (Pandri / Tatibandh / Telibandha)',
  'Champa Railway Junction',
  'Ambikapur',
  'Bhilai / Durg',
  'Jharsuguda Airport / City (Odisha)',
  'Raigarh',
  'Ratanpur (Maa Mahamaya Temple)',
  'Baloda Bazar',
  'Bemetara',
  'Rajnandgaon'
];
