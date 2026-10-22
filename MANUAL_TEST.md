# Mobile Search Layout - Manual Verification Steps

## 320px viewport

1. Resize browser to 320px width
2. Open http://127.0.0.1:5500/Project/Grandpa-Ron-Mockup-/index.html
3. Check initial state:
   - Logo visible left side
   - Search icon visible beside hamburger
   - Hamburger visible right side
4. Click search icon
5. Verify:
   - Input appears in separate row BELOW navbar
   - Logo still visible (not hidden/moved)
   - Search icon still visible
   - Hamburger still visible
   - Input focused
   - Input fills available width
6. Type "fire"
7. Verify:
   - Suggestions appear below input
   - Category filters visible above results
   - Filters wrap if needed
   - No overlap between filters and first result
   - All filter buttons usable
8. Click "Skills" filter
9. Verify filtering works
10. Press Escape
11. Verify:
    - Search closes
    - Focus returns to search icon
    - No leftover UI elements
12. Click search icon again
13. Type "fire"
14. Click search icon to close
15. Verify search closes
16. Click hamburger
17. Verify mobile menu opens (search didn't break it)

## 375px, 425px, 518px viewports

1. Resize to each width
2. Open search, type "fire"
3. Verify:
   - No horizontal overflow
   - No crowded controls
   - Filters and results visible
   - All elements within viewport

## Desktop 1440px

1. Resize to 1440px
2. Open search, type "fire"
3. Verify:
   - Desktop behavior preserved (logo hidden, overlay style)
   - Results appear correctly
   - Close with × button works

## Issues to Report

- Any controls that disappear
- Any overlap or clipping
- Any elements outside viewport
- Broken filtering
- Broken hamburger menu
- Missing focus handling
