import React from 'react';
import { 
  MapPin, ArrowRightCircle, Repeat, Navigation, Plane, Users, Briefcase, CalendarClock,
  ArrowRight, Phone, MessageSquare 
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/travelData';

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="w-6 h-6 text-blue-600" />,
  ArrowRightCircle: <ArrowRightCircle className="w-6 h-6 text-blue-600" />,
  Repeat: <Repeat className="w-6 h-6 text-blue-600" />,
  Navigation: <Navigation className="w-6 h-6 text-blue-600" />,
  Plane: <Plane className="w-6 h-6 text-blue-600" />,
  Users: <Users className="w-6 h-6 text-blue-600" />,
  Briefcase: <Briefcase className="w-6 h-6 text-blue-600" />,
  CalendarClock: <CalendarClock className="w-6 h-6 text-blue-600" />,
};

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Travel Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Comprehensive Taxi Services in Korba
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From local city commute across Korba industrial areas to outstation tours across Chhattisgarh, we provide punctual and comfortable cab rides tailored to your schedule.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {service.badge && (
                <span className="absolute top-4 right-4 bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {service.badge}
                </span>
              )}

              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {iconMap[service.icon] || <Navigation className="w-6 h-6 text-blue-600" />}
                </div>

                <h3 className="text-lg font-bold text-brand-navy group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-blue-700 mb-2">
                  {service.tagline}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="text-xs font-bold text-blue-600 group-hover:text-blue-800 flex items-center gap-1 transition-colors"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`https://wa.me/91${BUSINESS_INFO.phone1}?text=${encodeURIComponent(`Hello Prachi Travels, I want to enquire about ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
                  title="Enquire on WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quick Action */}
        <div className="mt-12 bg-gradient-to-r from-brand-navy to-blue-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-xl font-bold">Looking for Custom Tour or Railway/Airport Pickup?</h4>
            <p className="text-sm text-slate-300 mt-1">
              Speak directly with our Korba dispatch manager for customized itinerary &amp; immediate cab allotment.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:+91${BUSINESS_INFO.phone1}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-brand-navy font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call: {BUSINESS_INFO.phone1}</span>
            </a>
            <a
              href={`https://wa.me/91${BUSINESS_INFO.phone1}?text=${encodeURIComponent('Hello Prachi Travels, I need a custom taxi package.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-600 active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
