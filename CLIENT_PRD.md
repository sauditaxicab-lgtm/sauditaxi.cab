# 📋 Product Requirements Document (PRD)
## Saudi Taxi — Complete Website Development

---

**Document Version:** 1.0  
**Date:** February 23, 2026  
**Project URL:** [https://sauditaxi.cab](https://sauditaxi.cab)  
**Contact:** WhatsApp +966 54 817 4726  
**Prepared By:** Development Team  
**Client:** Saudi Taxi  

---

## 📌 Executive Summary

This PRD covers the complete development of the Saudi Taxi website — a full-stack, SEO-optimized, and high-performance web application built for transportation services across Saudi Arabia, with a primary focus on Hajj, Umrah, Airport Transfers, Intercity Travel, and Sightseeing tours.

---

## 🎯 Project Goals

1. **Lead Generation** — Online bookings اور WhatsApp inquiries بڑھانا
2. **SEO Dominance** — Saudi Arabia کے top transportation keywords پر rank کرنا
3. **Brand Trust** — Professional appearance اور E-E-A-T signals قائم کرنا
4. **Admin Control** — آسان backend management system
5. **Performance** — Lighthouse score 90+ حاصل کرنا

---

## 🛠️ Technology Stack

| Component | Technology |
|-----------|-----------|
| **Framework** | Next.js 16.1.1 (App Router) |
| **Language** | TypeScript |
| **Frontend Styling** | Tailwind CSS v4 |
| **Database** | Supabase (PostgreSQL) |
| **Authentication** | Supabase Auth |
| **Animations** | Framer Motion |
| **Icons** | Lucide React + React Icons |
| **Email** | Nodemailer |
| **Analytics** | Google Analytics (G-4Y7CL86016) |
| **Heatmaps** | Microsoft Clarity |
| **Reviews** | Trustpilot Widget |
| **Maps** | Google Maps JS API |
| **Deployment** | Vercel / GitHub |
| **Domain** | sauditaxi.cab |

---

## 📄 Pages Developed

### 🏠 1. Homepage (`/`)
- Premium Hero Section with booking widget
- Four Pillars (Why Choose Us) section
- Services Grid
- Vehicle Fleet showcase
- Review Section (Trustpilot integrated)
- Location Map (Saudi Arabia coverage)
- FAQ Section with structured data schema
- 24/7 availability section
- CTA (Call to Action) Section
- Saudi Arabia destinations overview

---

### ✈️ 2. Airport Transfers (`/services/airport-transfers`)
- Dedicated service page for airport pickup/drop
- Hero Section with value proposition
- Service features breakdown
- Covered airports (Jeddah, Madinah, Riyadh)
- Booking flow

---

### 🕌 3. Umrah Transfers (`/services/umrah-transfers`)
- Specialized Umrah pilgrim services page
- Group & private transfer options
- Route information (Makkah ↔ Madinah ↔ Jeddah)
- FAQ for pilgrims

---

### 🚖 4. Intercity Taxi (`/services/intercity-taxi`)
- Long-distance intercity travel
- City-to-city pricing
- Route coverage

---

### 👨‍👩‍👧 5. Family Travel (`/services/family-travel`)
- Family-friendly transportation
- Safe travel features
- Large vehicle options

---

### 🌟 6. VIP Transport (`/services/vip-transport`)
- Luxury corporate & VIP service
- Premium vehicle fleet
- Executive travel features

---

### 🕌 7. Ziyarat Tours (`/services/ziyarat-tours`)
- Islamic heritage site tours
- Holy city sightseeing
- Group & private tour options

---

### 📸 8. Sightseeing (`/services/sightseeing`)
- Tourist sightseeing packages
- AlUla, Taif, and other destinations

---

### 📍 9. Jeddah Pages

**Jeddah Hub Page (`/jeddah`)**
- City-specific landing page
- Local SEO optimized
- All Jeddah routes listed

**Jeddah Airport Taxi (`/jeddah/airport-taxi`)**
- KAIA Airport pickup/drop page
- Terminal guides
- Local landmarks

---

### 📍 10. Madinah Pages

**Madinah Hub Page (`/madinah`)**
- Madinah city-specific landing
- Holy city emphasis

**Madinah Airport/City Services (`/madinah/[routes]`)**
- Detailed service pages

---

### 📍 11. Makkah Page (`/makkah`)
- Makkah-specific taxi services
- Hajj & Umrah pilgrim focus

---

### 🚗 12. Jeddah to Makkah Taxi (`/jeddah-to-makkah-taxi`)
- Dedicated route page
- Pricing, distance, duration info
- Direct booking CTA

---

### 🚗 13. Makkah to Madinah Taxi (`/makkah-to-madinah-taxi`)
- Dedicated route page
- Intercity pilgrimage route
- Booking options

---

### 🚙 14. Fleet Pages (`/fleet`)
Complete vehicle fleet with individual pages for each:

| Vehicle | Capacity | Page |
|---------|----------|------|
| Toyota Camry | 4 Seater | `/fleet/toyota-camry-4-seater-taxi` |
| Hyundai H1 Starex | 7 Seater | `/fleet/hyundai-h1-starex-7-seater-taxi` |
| Hyundai Staria | 7 Seater | `/fleet/hyundai-staria-7-seater-taxi` |
| GMC Yukon XL | 7 Seater | `/fleet/gmc-yukon-xl-7-seater-taxi` |
| Toyota HiAce | 11 Seater | `/fleet/toyota-hiace-11-seater-taxi` |
| Toyota Coaster | 17 Seater | `/fleet/toyota-coaster-17-seater-taxi` |

---

### ℹ️ 15. About Page (`/about`)
- Company story
- E-E-A-T (Expertise, Authority, Trust) signals
- Team & credentials
- Years of experience

---

### 📞 16. Contact Page (`/contact`)
- Contact form (connected via Nodemailer)
- WhatsApp button
- Phone number
- Office location

---

### 📖 17. Blog (`/blog`)
- Blog listing page
- Individual blog posts
- SEO-optimized content

---

### 📋 18. Booking Page (`/booking`)
- Full online booking form
- Date/time picker
- Route selection
- Passenger count
- Vehicle selection
- Confirmation system

---

### 🔒 19. Legal Pages
- Privacy Policy (`/privacy-policy`)
- Terms & Conditions (`/terms-and-conditions`)

---

### 🗺️ 20. Sitemap (`/sitemap.xml`)
- Auto-generated XML sitemap
- All pages indexed
- Proper priority settings

---

### 🤖 21. Robots.txt (`/robots.ts`)
- Search engine crawl rules
- Sitemap reference

---

## 🔧 Admin Panel (`/admin`)

### Features:
| Feature | Description |
|---------|-------------|
| **Dashboard** | Overview with KPIs, bookings, revenue metrics |
| **Bookings Management** | View/manage all customer bookings |
| **Messages** | Customer inquiries & contact form submissions |
| **Blog Management** | Create, edit, delete blog posts (Rich text editor) |
| **Login System** | Secure Supabase auth-protected admin area |

---

## 🎨 Design System

### Fonts:
- **Headings:** Playfair Display (Google Fonts)
- **Body:** Inter (Google Fonts)

### Color Palette:
- **Primary Background:** Luxury Black (`#0a0a0a`)
- **Accent:** Gold/Amber tones
- **Text:** White / Off-white
- **Cards:** Glassmorphism dark cards

### Design Style:
- Dark luxury theme
- Glassmorphism effects
- Smooth Framer Motion animations
- Premium mobile-first design
- Micro-interactions and hover effects

---

## 📱 Components Built

### Home Components:
- `HeroSection` — Main banner with booking widget
- `BookingWidget` — Inline booking form
- `HeroCarousel` — Animated image carousel
- `FourPillars` — 4 USP (Unique Selling Points) display
- `ServicesGrid` — Service cards grid
- `VehicleFleet` — Fleet showcase
- `ReviewsSection` — Customer reviews (Trustpilot)
- `LocationMap` — Google Maps integration
- `FAQSection` — Accordion FAQ with JSON-LD schema
- `CTASection` — Conversion-focused CTA block
- `TwentyFourSeven` — 24/7 availability highlight
- `InformationSection` — Key information cards
- `IntroductionSection` — Company intro
- `SaudiArabiaSection` — Saudi Arabia coverage
- `EEATBlock` — Trust & authority signals
- `ComparisonChart` — Competitor comparison table

### Layout Components:
- `Header` — Responsive navigation
- `Footer` — Full footer with links, sitemap
- `MobileActionTray` — Mobile sticky CTA bar (WhatsApp, Call)
- `ConditionalLayout` — Admin vs. public layout switcher
- `WhatsappButton` — Floating WhatsApp button

### UI Components:
- Buttons, Cards, Badges
- Dialog & Modal
- Tabs, Select, Radio Group
- Avatar, Popover components
- Toast notifications (Sonner)
- Date Picker (React Day Picker)

### SEO Components:
- `SchemaOrg` — Global JSON-LD structured data
- `generateSEO()` — Reusable metadata utility

---

## 🔍 SEO Implementation

### Technical SEO:
| Feature | Status |
|---------|--------|
| Meta titles & descriptions | ✅ All pages |
| Open Graph tags | ✅ All pages |
| Canonical URLs | ✅ Implemented |
| XML Sitemap | ✅ Auto-generated |
| Robots.txt | ✅ Configured |
| Google Analytics | ✅ Connected (G-4Y7CL86016) |
| Microsoft Clarity | ✅ Connected |
| Trustpilot Widget | ✅ Integrated |
| Pinterest Domain Verify | ✅ Added |

### Schema / Structured Data:
| Schema Type | Pages |
|-------------|-------|
| `LocalBusiness` | Homepage |
| `TaxiService` | Service pages |
| `FAQPage` | Homepage, Service pages |
| `BreadcrumbList` | All inner pages |
| `WebSite` | Homepage |
| `Organization` | Global |
| `Article` | Blog posts |
| `Vehicle` | Fleet pages |

### Content SEO:
- Target keywords: `Saudi taxi`, `Hajj taxi`, `Umrah transfer`, `Jeddah airport taxi`, `Makkah Madinah taxi`, etc.
- AI-optimized content for Google AI Overviews, ChatGPT, Gemini, Perplexity
- E-E-A-T signals throughout (Expertise, Experience, Authoritativeness, Trustworthiness)
- Local SEO for Jeddah, Makkah, Madinah, Riyadh, Taif, AlUla
- Long-tail route keywords (e.g., `/jeddah-to-makkah-taxi`)
- FAQ sections on all key pages for featured snippets

---

## ⚡ Performance Optimizations

### Implemented Optimizations:
| Optimization | Impact |
|-------------|--------|
| Critical CSS split (above-fold) | -74% blocking time (770ms → <200ms) |
| Modern JavaScript (ES2022) | -13.8 KiB bundle reduction |
| Resource hints (preconnect) | -60% request chain latency |
| Font display swap | Non-blocking font loading |
| Next.js Image optimization | WebP/AVIF auto-conversion |
| Tree shaking | Smaller JS bundles |
| Lazy loading | Faster initial paint |

### Expected Performance Scores:
| Metric | Target |
|--------|--------|
| Lighthouse Score | **90+** |
| LCP (Largest Contentful Paint) | **< 2.5s** |
| FCP (First Contentful Paint) | **< 1.8s** |
| TBT (Total Blocking Time) | **< 200ms** |
| CLS (Cumulative Layout Shift) | **< 0.1** |

---

## 🗄️ Database (Supabase)

### Tables:
| Table | Purpose |
|-------|---------|
| `bookings` | Customer booking records |
| `messages` | Contact form submissions |
| `blog_posts` | Blog content management |
| `categories` | Product/service categories |

### Auth:
- Admin login via Supabase Auth
- Protected routes for `/admin/*`
- Row Level Security (RLS) policies

---

## 📡 APIs & Integrations

| Integration | Purpose |
|-------------|---------|
| Supabase | Database + Auth backend |
| Google Maps JS API | Location/route maps |
| Nodemailer | Contact form email delivery |
| Google Analytics | Traffic & conversion tracking |
| Microsoft Clarity | User session heatmaps |
| Trustpilot | Customer review display |
| WhatsApp API | Direct customer chat link |

---

## 📂 Project Structure

```
saudi-taxi/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout
│   ├── about/              # About page
│   ├── admin/              # Admin dashboard
│   ├── blog/               # Blog pages
│   ├── booking/            # Booking page
│   ├── contact/            # Contact page
│   ├── fleet/              # 6 vehicle pages
│   ├── jeddah/             # Jeddah pages
│   ├── madinah/            # Madinah pages
│   ├── makkah/             # Makkah page
│   ├── services/           # 7 service pages
│   ├── jeddah-to-makkah-taxi/
│   ├── makkah-to-madinah-taxi/
│   ├── privacy-policy/
│   ├── terms-and-conditions/
│   ├── sitemap.ts          # Auto sitemap
│   └── robots.ts           # Robots config
│
├── components/             # Reusable components
│   ├── home/               # Homepage sections
│   ├── layout/             # Header, Footer, Nav
│   ├── booking/            # Booking form components
│   ├── fleet/              # Fleet display
│   ├── services/           # Service components
│   ├── about/              # About page sections
│   ├── admin/              # Admin panel UI
│   ├── seo/                # Schema, SEO components
│   └── ui/                 # Base UI components
│
├── lib/                    # Utility libraries
│   ├── supabase/           # Supabase client config
│   ├── seo.ts              # generateSEO utility
│   └── motion-config.ts    # Framer Motion config
│
├── actions/                # Server actions
├── types/                  # TypeScript types
├── utils/                  # Helper functions
├── public/                 # Static assets
└── schemas/                # Zod validation schemas
```

---

## 🚀 Deployment

- **Repository:** GitHub (private)
- **Hosting:** Vercel (recommended) or any Node.js host
- **Domain:** `sauditaxi.cab`
- **SSL:** Auto via Vercel
- **Environment Variables:**
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`
  - `GOOGLE_MAPS_API_KEY`
  - `EMAIL_PASSWORD`

---

## ✅ Work Completed — Checklist

### Frontend:
- [x] Homepage with all sections
- [x] 7 Service pages
- [x] 6 Fleet pages with individual details
- [x] City pages (Jeddah, Madinah, Makkah)
- [x] Route pages (Jeddah→Makkah, Makkah→Madinah)
- [x] About page
- [x] Contact page
- [x] Blog pages
- [x] Booking page
- [x] Privacy Policy & Terms
- [x] Responsive mobile design
- [x] Mobile Action Tray (WhatsApp + Call)
- [x] Floating WhatsApp button
- [x] Dark luxury theme
- [x] Animations (Framer Motion)

### Backend / Admin:
- [x] Admin dashboard
- [x] Bookings management page
- [x] Messages/contact inbox
- [x] Blog CRUD with rich text editor
- [x] Secure admin login

### SEO:
- [x] Meta tags on all pages
- [x] Open Graph on all pages
- [x] JSON-LD structured data
- [x] XML Sitemap
- [x] Robots.txt
- [x] FAQ schema
- [x] Breadcrumb schema
- [x] Google Analytics setup
- [x] Microsoft Clarity setup
- [x] AI-optimized content
- [x] Local SEO optimization

### Performance:
- [x] Critical CSS split
- [x] Modern JavaScript (ES2022)
- [x] Resource hints (preconnect)
- [x] Font optimization
- [x] Image optimization
- [x] Accessibility fixes

### Integrations:
- [x] Supabase database
- [x] Google Maps
- [x] Email (Nodemailer)
- [x] WhatsApp integration
- [x] Trustpilot widget
- [x] Google Analytics
- [x] Microsoft Clarity

---

## 📊 Deliverables Summary

| Category | Count |
|----------|-------|
| Total Pages | **25+** |
| Service Pages | **7** |
| Fleet/Vehicle Pages | **6** |
| City/Route Pages | **6** |
| Admin Sections | **4** |
| Total Components | **80+** |
| SEO Schema Types | **8** |
| Performance Optimizations | **7+** |

---

## 📞 Support & Handover

The project has been built with clean, documented code for easy maintenance. All environments are configured and the codebase is on GitHub for version control.

For any post-launch support or additional features, please contact the development team.

---

*Document prepared for client handover — February 2026*  
*Saudi Taxi | sauditaxi.cab*
