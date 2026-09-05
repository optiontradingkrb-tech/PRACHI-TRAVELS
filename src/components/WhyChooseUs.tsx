import React from 'react';
import { 
  Car, UserCheck, ShieldCheck, Users, Clock, 
  CheckCircle, ThumbsUp, HeartHandshake, Award, Shield 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: <Car className="w-7 h-7 text-blue-600" />,
      title: 'Best Cars',
      tagline: 'Clean, Pristine & AC Guaranteed',
      description: 'Every vehicle in our fleet is thoroughly inspected, washed, and sanitized before passenger boarding. Enjoy working air-conditioning and spacious seating on every trip.'
    },
    {
      icon: <UserCheck className="w-7 h-7 text-blue-600" />,
      title: 'Best Drivers',
      tagline: 'Experienced & Courteous Chauffeurs',
      description: 'Our chauffeurs are verified professionals with deep knowledge of Chhattisgarh national highways, local shortcuts, and safe night-driving protocols.'
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-blue-600" />,
      title: 'Safe & Comfortable Journey',
      tagline: 'Your Safety, Our Responsibility',
      description: 'Travel with complete peace of mind. We specialize in late-night railway transfers, family pilgrimages, and outstation trips with active customer helpline support.'
    },
    {
      icon: <Users className="w-7 h-7 text-blue-600" />,
      title: 'Family & Group Travel',
      tagline: 'Room for Everyone and All Luggage',
      description: 'Spacious 6-seater and 7-seater vehicles like Ertiga, Kia Carrance, and Innova Crysta ensure your elderly family members and children travel with relaxed legroom.'
    },
    {
      icon: <Clock className="w-7 h-7 text-blue-600" />,
      title: 'On Time Service',
      tagline: 'Prompt Pickups at Your Doorstep',
      description: 'We value your schedule. Whether reaching Raipur Airport on time for a flight or catching an early morning train at Champa or Bilaspur, we arrive before scheduled time.'
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Our Commitment to You</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Why Choose Prachi Travels?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Built on trust, transparent pricing, and dependable service for the residents, engineers, and businesses of Korba.
          </p>
        </div>

        {/* 5 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-brand-navy mb-1 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-bold text-blue-700 mb-3">
                {item.tagline}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* 6th Card: Brand Appreciation Note */}
          <div className="bg-gradient-to-br from-brand-navy to-blue-900 rounded-2xl p-6 sm:p-7 text-white flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <HeartHandshake className="w-6 h-6 text-blue-300" />
              </div>
              <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">
                Our Gratitude
              </span>
              <h3 className="text-2xl font-black mt-1 tracking-tight">
                {BUSINESS_INFO.appreciationNote}
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                We are dedicated to serving Korba and Chhattisgarh with honor, safety, and unwavering hospitality.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-between text-xs">
              <span className="text-slate-400">Headquarters</span>
              <span className="font-bold text-white">T.P. Nagar, Korba</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
