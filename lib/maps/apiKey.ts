/**
 * Secure API Key Service
 * Fetches Google Maps API key from environment variables
 * 
 * This keeps the API key manageable and allows for easy configuration
 */

class MapsApiKeyService {
  private static instance: MapsApiKeyService;
  private apiKey: string | null = null;

  static getInstance(): MapsApiKeyService {
    if (!MapsApiKeyService.instance) {
      MapsApiKeyService.instance = new MapsApiKeyService();
    }
    return MapsApiKeyService.instance;
  }

  async getApiKey(): Promise<string> {
    // Return cached key if available
    if (this.apiKey) {
      return this.apiKey;
    }

    // Get API key from environment variable
    const envKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (envKey) {
      this.apiKey = envKey;
      return envKey;
    }

    // If no key is found, log an error but return an empty string to avoid crashes
    // Note: Google Maps will show a message about missing API key
    console.error('[MapsApiKey] No Google Maps API key found in environment variables (NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)');
    return '';
  }

  clearCache(): void {
    this.apiKey = null;
  }
}

export const mapsApiKeyService = MapsApiKeyService.getInstance();
