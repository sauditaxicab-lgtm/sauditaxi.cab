# Source Maps - Quick Reference

## TL;DR: Not a Performance Issue ✅

The source map warnings you see in Lighthouse are **informational only** and **do not affect**:
- ❌ Performance score
- ❌ Page load speed
- ❌ Production build

**Why you see them:**
- You're running `npm run dev` (development mode)
- Turbopack (Next.js 16) uses a different source map format in dev
- Lighthouse expects webpack-style production source maps

**Action needed:** ✅ **None** - This is normal and expected

---

## What Are Source Maps?

Source maps translate minified/compiled code back to original source code for debugging.

**Example:**
```javascript
// Original code (development)
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// Minified code (production)
function c(i){return i.reduce((s,t)=>s+t.p,0)}

// Source map tells browser: "c" is actually "calculateTotal"
```

**Benefits:**
- ✅ Debug production errors with original code
- ✅ Meaningful stack traces
- ✅ Better Lighthouse insights

**Drawbacks:**
- ❌ Exposes source code to public
- ❌ Increases build time
- ❌ Larger deployment size

---

## Current Configuration ✅

Your site is **correctly configured**:

```typescript
// next.config.ts
productionBrowserSourceMaps: false, // ✅ Recommended (secure, fast)
```

### Development Mode (npm run dev)
- ✅ Source maps: **Automatically generated** by Turbopack
- ✅ Debugging: **Full support**
- ✅ Performance: **Not affected** (dev mode is slow anyway)

### Production Mode (npm run build)
- ✅ Source maps: **Disabled** (secure, smaller bundle)
- ✅ Security: **Source code not exposed**
- ✅ Performance: **Optimal**

---

## When to Enable Production Source Maps

### Enable (`productionBrowserSourceMaps: true`) if:
- ✅ You need to debug production-only issues
- ✅ You use error tracking (Sentry, Bugsnag) with source maps
- ✅ Your source code isn't sensitive
- ✅ You have a private deployment

### Keep Disabled (current) if:
- ✅ You want **maximum security** (recommended)
- ✅ You want **faster builds** (recommended)
- ✅ You want **smaller deployments** (recommended)
- ✅ Your source code is proprietary

---

## How to Enable (If Needed)

### Option 1: Public Source Maps (Not Recommended)
```typescript
// next.config.ts
productionBrowserSourceMaps: true, // ⚠️ Exposes source code
```

### Option 2: Private Source Maps (Recommended)
Upload source maps to error tracking service only:

```typescript
// next.config.ts
productionBrowserSourceMaps: false, // Keep disabled

// Use hidden-source-map for error tracking
webpack: (config, { isServer }) => {
  if (!isServer) {
    config.devtool = 'hidden-source-map';
  }
  return config;
},
```

Then upload to Sentry/Bugsnag:
```bash
# Upload source maps privately
sentry-cli releases files <VERSION> upload-sourcemaps .next/static/
```

**Benefits:**
- ✅ Source maps available for debugging
- ✅ Source code **NOT** exposed to public
- ✅ Best of both worlds

---

## Testing

### Verify Production Build (No Source Maps)
```bash
npm run build
npm start

# Open DevTools → Sources tab
# You should see minified code without source maps
```

### Verify Development Mode (Has Source Maps)
```bash
npm run dev

# Open DevTools → Sources tab
# You should see original TypeScript/JSX code
```

---

## Lighthouse and Source Maps

### Why Lighthouse Checks Source Maps
- Helps Lighthouse provide better insights
- Allows tracing performance issues to source code
- Informational only - doesn't affect score

### Lighthouse Source Map Warnings
```
Error: Map has no `mappings` field
```

**What this means:**
- Source map exists but is incomplete/invalid
- Common in development mode with Turbopack
- **Does not affect performance or score**
- Lighthouse just can't provide extra debugging info

### How to Make Lighthouse Happy (Optional)
Run Lighthouse on production build:
```bash
npm run build
npm start

# Now run Lighthouse
# Source map warnings will be gone (maps are disabled)
```

---

## Best Practices

### For Most Sites (Your Current Setup) ✅
```typescript
productionBrowserSourceMaps: false
```
- ✅ Secure (source code not exposed)
- ✅ Fast builds
- ✅ Smaller deployments
- ✅ Recommended by Vercel/Next.js

### For Sites Using Error Tracking
```typescript
productionBrowserSourceMaps: false  // Public: disabled
webpack: (config) => {
  config.devtool = 'hidden-source-map'; // Private: enabled
  return config;
}
```
- ✅ Source maps generated for error tracking
- ✅ Not sent to browser (hidden)
- ✅ Uploaded to Sentry/Bugsnag only

### For Internal/Private Sites Only
```typescript
productionBrowserSourceMaps: true
```
- ⚠️ Source code exposed
- ⚠️ Larger bundle
- ✅ Easier debugging

---

## Common Questions

### Q: Should I enable source maps for better Lighthouse scores?
**A:** No. Source maps don't affect Lighthouse performance scores. The warning is informational only.

### Q: Why do I see "Map has no `mappings` field" errors?
**A:** You're running in development mode with Turbopack. This is normal and doesn't indicate a problem.

### Q: Will this affect my production site?
**A:** No. Production builds use webpack with proper source maps (or none if disabled).

### Q: How do I debug production issues without source maps?
**A:** Use error tracking services (Sentry, Bugsnag) with hidden source maps, or enable `productionBrowserSourceMaps: true` temporarily.

### Q: Are source maps a security risk?
**A:** Yes, if enabled in production. They expose your source code to anyone. Only enable for private/internal sites.

---

## Summary

### Current Status: ✅ OPTIMAL

| Environment | Source Maps | Status |
|------------|-------------|--------|
| **Development** | ✅ Enabled (Turbopack) | Working correctly |
| **Production** | ❌ Disabled (webpack) | Secure & optimal |
| **Lighthouse Warning** | ⚠️ Informational | Doesn't affect score |

### Recommendation: ✅ DO NOTHING

Your configuration is **correct and optimal**:
- ✅ Development: Full debugging support
- ✅ Production: Secure, fast, small bundle
- ✅ Lighthouse: Warning is informational only

---

## Related Documentation
- [Next.js Source Maps](https://nextjs.org/docs/app/api-reference/next-config-js/productionBrowserSourceMaps)
- [Webpack Source Maps](https://webpack.js.org/configuration/devtool/)
- [Chrome DevTools Guide](https://developer.chrome.com/docs/devtools/javascript/source-maps/)

---

**Last Updated**: 2026-01-16  
**Status**: ✅ Correctly Configured - No Action Needed  
**Lighthouse Impact**: None - Informational Only
