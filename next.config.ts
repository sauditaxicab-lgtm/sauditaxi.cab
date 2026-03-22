import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  trailingSlash: true,

  // CSS Optimization for better performance
  experimental: {
    optimizeCss: true, // Enable CSS optimization
    optimizePackageImports: ['lucide-react', 'framer-motion'], // Tree-shake large packages
  },

  // Source maps configuration
  // In production, source maps are disabled by default (recommended for security)
  // In development, Turbopack generates source maps automatically
  productionBrowserSourceMaps: false, // Set to true only if you need to debug production issues

  // Image optimization configuration
  images: {
    formats: ['image/webp', 'image/avif'], // Modern formats (smaller size)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Responsive breakpoints (removed 3840 to prevent massive 4K downloads)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Thumbnail sizes
    minimumCacheTTL: 60, // Cache images for 60 seconds minimum
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Reduce default quality for better compression (75 → 65)
    // This saves ~28 KiB while maintaining visual quality
    unoptimized: false, // Ensure optimization is enabled
  },

  // Compiler optimizations for modern browsers
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // script-src: covers older browsers
              // script-src-elem: browsers specifically check THIS for external scripts (GTM, GA, Ads)
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'" +
              " https://www.googletagmanager.com" +
              " https://www.google-analytics.com" +
              " https://ssl.google-analytics.com" +
              " https://www.googleadservices.com" +
              " https://googleads.g.doubleclick.net" +
              " https://www.google.com" +
              " https://connect.facebook.net" +
              " https://www.clarity.ms" +
              " https://scripts.clarity.ms" +
              " https://widget.trustpilot.com",
              // script-src-elem is the key directive modern browsers use — must mirror script-src
              "script-src-elem 'self' 'unsafe-inline'" +
              " https://www.googletagmanager.com" +
              " https://www.google-analytics.com" +
              " https://ssl.google-analytics.com" +
              " https://www.googleadservices.com" +
              " https://googleads.g.doubleclick.net" +
              " https://www.google.com" +
              " https://connect.facebook.net" +
              " https://www.clarity.ms" +
              " https://scripts.clarity.ms" +
              " https://widget.trustpilot.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://widget-cdn.trustpilot.com",
              "font-src 'self' https://fonts.gstatic.com",
              // img-src: broad — Google Ads conversion pixel fires from various google subdomains
              "img-src 'self' data: https: http:",
              "media-src 'self' blob:",
              // connect-src: GA4, Google Ads /ccm/collect, doubleclick, Clarity, Supabase
              "connect-src 'self'" +
              " https://wa.me" +
              " https://*.supabase.co wss://*.supabase.co" +
              " https://www.google-analytics.com" +
              " https://analytics.google.com" +
              " https://ssl.google-analytics.com" +
              " https://stats.g.doubleclick.net" +
              " https://www.googleadservices.com" +
              " https://googleads.g.doubleclick.net" +
              " https://www.google.com" +
              " https://www.clarity.ms https://*.clarity.ms" +
              " https://api.trustpilot.com https://widget.trustpilot.com",
              // frame-src: Google Ads remarketing / conversion iframes
              "frame-src 'self'" +
              " https://www.google.com" +
              " https://bid.g.doubleclick.net" +
              " https://td.doubleclick.net" +
              " https://widget.trustpilot.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'"
            ].join('; ')
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      // Resource hints for critical external origins
      {
        source: '/',
        headers: [
          // Transparent Textures - Preconnect to reduce critical chain
          {
            key: 'Link',
            value: '<https://www.transparenttextures.com>; rel=preconnect; crossorigin',
          },
          // DNS-Prefetch as fallback for older browsers
          {
            key: 'Link',
            value: '<https://www.transparenttextures.com>; rel=dns-prefetch',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
