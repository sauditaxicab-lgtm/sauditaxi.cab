---
description: SEO Protection Rules - Do Not Modify Without Permission
---

# 🚨 SEO Protection Rules

## Critical Rules - MUST Follow Always

These rules apply to ALL work on this website unless the USER explicitly instructs otherwise:

### ❌ DO NOT Create New Pages
- Do not create any new page files (e.g., `page.tsx`, `page.js`)
- Do not add new routes or directories under `src/app/`
- **Exception**: Only when USER explicitly says "create a new page for X"

### ❌ DO NOT Modify H1 Headings
- Do not change existing `<h1>` tags or their content
- Do not add new `<h1>` tags
- Do not remove existing `<h1>` tags
- **Exception**: Only when USER explicitly says "change the H1 to X"

### ❌ DO NOT Modify SEO Titles
- Do not change the `title` field in page metadata
- Do not modify `title.absolute` or `title.default` values
- Do not change OpenGraph titles
- **Exception**: Only when USER explicitly says "update the SEO title"

### ❌ DO NOT Modify Meta Descriptions
- Do not change the `description` field in page metadata
- Do not modify OpenGraph descriptions
- Do not change Twitter card descriptions
- **Exception**: Only when USER explicitly says "update the meta description"

## ✅ What You CAN Do (Without Permission)

- Fix bugs and errors
- Update styling and CSS
- Modify component logic and functionality
- Add new components (not pages)
- Update images and assets
- Improve code structure and performance
- Fix TypeScript errors
- Update dependencies

## 📝 When in Doubt

If you're unsure whether a change violates these rules, **ASK THE USER FIRST** before making the change.

## Example Scenarios

### ❌ WRONG - Do Not Do This
```typescript
// Changing H1 without permission
<h1>New Taxi Service in Riyadh</h1> // ❌ DON'T CHANGE

// Changing metadata without permission
export const metadata = {
  title: "New Title Here", // ❌ DON'T CHANGE
  description: "New description", // ❌ DON'T CHANGE
}
```

### ✅ CORRECT - Safe Changes
```typescript
// Fixing a bug
const handleClick = () => {
  // Fixed logic here ✅
}

// Updating styles
<div className="bg-blue-500 hover:bg-blue-600"> // ✅ OK

// Adding new component
const NewFeature = () => { ... } // ✅ OK
```

## Summary

**Remember**: SEO elements (pages, H1s, titles, descriptions) are **LOCKED** unless USER explicitly requests changes.
