// Business Constants Configuration
export const BUSINESS_CONFIG = {
  // Contact Information
  PHONE: '966501729282',
  PHONE_DISPLAY: '+966 50 172 9282',
  EMAIL: 'info@sauditaxi.cab',

  // Business Details
  NAME: 'Saudi Taxi',
  NAME_SHORT: 'Saudi Taxi',

  // URLs
  WEBSITE_URL: 'https://sauditaxi.cab',
} as const;

// Contact Helper Functions
export const contactHelpers = {
  getPhoneUrl: () => `tel:${BUSINESS_CONFIG.PHONE}`,

  getWhatsAppUrl: (message: string = 'Hi, I would like to inquire about your taxi services.') =>
    `https://wa.me/${BUSINESS_CONFIG.PHONE}?text=${encodeURIComponent(message)}`,

  getEmailUrl: (subject: string = 'Service Inquiry') =>
    `mailto:${BUSINESS_CONFIG.EMAIL}?subject=${encodeURIComponent(subject)}`,

  handleCall: () => {
    if (typeof window !== 'undefined') {
      window.location.href = contactHelpers.getPhoneUrl();
    }
  },

  handleWhatsApp: (message?: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = contactHelpers.getWhatsAppUrl(message);
    }
  },
};

