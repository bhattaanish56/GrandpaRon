# Fuzzy Search Testing Guide

## Test URLs
- Homepage: http://localhost:8080/index.html
- About page: http://localhost:8080/about.html
- Test page: http://localhost:8080/test-search.html

## Manual Test Cases

### 1. Exact Matches
- Search "fishing" → Should show Fishing skill, Fishing Gear
- Search "fire" → Should show Fire skill, Fire & Survival Gear
- Search "camping" → Should show Camping skill, Camping Gear

### 2. Synonym Expansion
- Search "angling" → Should find Fishing (synonym)
- Search "tent" → Should find Camping (synonym)
- Search "campfire" → Should find Fire (synonym)

### 3. Typo Tolerance
- Search "campng" → Should find Camping (missing 'i')
- Search "fishin" → Should find Fishing (missing 'g')
- Search "advnture" → Should find Adventures (missing 'e')

### 4. Multi-word Queries
- Search "camping gear" → Should find Camping and Gear results
- Search "how to fish" → Should find Fishing content

### 5. Site-Wide Search
- Open index.html, search "fire" → Should work
- Open about.html, search "fire" → Should work (same results)

### 6. Section Scrolling
- Search for content with sections
- Click result with # in URL
- Should scroll to correct section with navbar offset

### 7. Category Filters
- Search "camping"
- Click "Skills" filter → Should show only Skills category
- Click "Gear" filter → Should show only Gear category
- Click "All" → Should show all categories

### 8. Mobile Responsiveness
- Open on mobile viewport (resize to 375px width)
- Search should expand/collapse properly
- Results should be readable

## Expected Behavior
- Minimum 2 characters to trigger search
- Results appear as you type
- Maximum 8 results shown
- Exact title matches rank highest
- No duplicate URLs with same section
- ESC key closes search
- Arrow keys navigate results
- Enter opens selected result

## Browser Console Tests
Open browser console and run:

```javascript
// Test synonym expansion
expandQueryWithSynonyms('fishing')
// Should include: fishing, angling, fish, catch, rod, reel, tackle, bait

// Test search
performSearch('camping')
// Should return array of results

// Check Fuse.js loaded
typeof Fuse
// Should return "function"
```

## Files Modified
- All HTML files: Added Fuse.js CDN (10 files)
- script.js: Complete search refactor with Fuse.js
- about.html: Added section IDs (#story, #values)
- adventures.html: Added section ID (#featured)
- camping.html: Added section ID (#content)
- fire.html: Added section ID (#content)
- fishing.html: Added section ID (#content)
- hunting.html: Added section ID (#content)
- index.html: Added section ID (#about)
