export type TravelType = 'One Way' | 'Round Trip' | 'Local Rental';

export interface Vehicle {
  id: string;
  name: string;
  category: 'Sedan' | 'MUV / SUV' | 'Premium MUV';
  roundTripRatePerKm: number;
  capacity: string;
  luggageCapacity: string;
  features: string[];
  image: string;
  popularFor: string;
}

export interface LocalRatePackage {
  hours: number;
  km: number;
  sedan: number;
  ertiga: number;
  innovaCrysta: number;
}

export interface RouteItem {
  id: string;
  from: string;
  to: string;
  approxDistanceKm?: number;
  approxDuration?: string;
  group: 'Korba' | 'Champa' | 'Bilaspur' | 'Raipur';
  note?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface BookingData {
  fullName: string;
  mobileNumber: string;
  pickupLocation: string;
  dropLocation: string;
  travelType: TravelType;
  vehicle: string;
  travelDate: string;
  pickupTime: string;
  passengers: string;
  specialRequirement: string;
}
