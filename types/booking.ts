export interface FormDestination {
  address: string;
}

export interface BookingFormData {
  // Contact Info
  name: string;
  email: string | null;
  phone: string;
  passengers: number | string;
  luggage?: string;

  // Vehicle
  vehicleType?: string;
  vehicleName?: string;
  vehicleModel?: string;
  vehicle?: string; // Quick form support

  // Location & Time
  pickupLocation: string;
  destinations: string[] | ReturnTripStructure;
  date: string;
  time: string;

  // Service Details
  serviceType?: string;
  flightNumber?: string;
  terminalType?: string;
  driverInstructions?: string;

  // Timezone & Location
  melbourneDatetime?: string;
  timezone?: string;
  userTimezone?: string;
  city?: string;
}

export interface ReturnTripStructure {
  type: 'return_trip';
  outbound: {
    pickup: string;
    destinations: string[];
    date: string;
    time: string;
    cityDateTime: string;
  };
  return: {
    pickup: string;
    destination: string;
    date: string;
    time: string;
    cityDateTime: string;
  };
}

export interface BookingSubmissionResult {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
}
