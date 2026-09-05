import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Fleet } from './components/Fleet';
import { PricingRates } from './components/PricingRates';
import { PopularRoutes } from './components/PopularRoutes';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomerStories } from './components/CustomerStories';
import { BookingForm } from './components/BookingForm';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingData, TravelType } from './types';

export const App: React.FC = () => {
  const [bookingFormData, setBookingFormData] = useState<Partial<BookingData>>({
    pickupLocation: 'Korba (T.P. Nagar)',
    dropLocation: 'Raipur (Airport)',
    travelType: 'One Way',
    vehicle: 'SEDAN',
  });

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroSearch = (data: {
    pickup: string;
    drop: string;
    travelType: TravelType;
    vehicle: string;
    date: string;
    time: string;
    passengers: string;
  }) => {
    setBookingFormData({
      pickupLocation: data.pickup,
      dropLocation: data.drop,
      travelType: data.travelType,
      vehicle: data.vehicle,
      travelDate: data.date,
      pickupTime: data.time,
      passengers: data.passengers,
    });
    scrollToBooking();
  };

  const handleSelectService = (serviceTitle: string) => {
    setBookingFormData((prev) => ({
      ...prev,
      specialRequirement: `Interested in: ${serviceTitle}`,
    }));
    scrollToBooking();
  };

  const handleBookCar = (carName: string) => {
    setBookingFormData((prev) => ({
      ...prev,
      vehicle: carName,
      travelType: 'Round Trip',
    }));
    scrollToBooking();
  };

  const handleBookRental = (packageName: string) => {
    setBookingFormData((prev) => ({
      ...prev,
      travelType: 'Local Rental',
      specialRequirement: `Package: ${packageName}`,
    }));
    scrollToBooking();
  };

  const handleSelectRoute = (from: string, to: string) => {
    setBookingFormData((prev) => ({
      ...prev,
      pickupLocation: from,
      dropLocation: to,
      travelType: 'One Way',
    }));
    scrollToBooking();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar onBookClick={scrollToBooking} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero onSearch={handleHeroSearch} />
        <Services onSelectService={handleSelectService} />
        <Fleet onBookCar={handleBookCar} />
        <PricingRates onBookRental={handleBookRental} />
        <PopularRoutes onSelectRoute={handleSelectRoute} />
        <WhyChooseUs />
        <CustomerStories />
        <BookingForm initialData={bookingFormData} />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Bottom Actions on Mobile */}
      <MobileStickyBar onBookClick={scrollToBooking} />

      {/* Floating WhatsApp Quick Launcher */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
