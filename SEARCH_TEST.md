# Search Interface Testing Checklist

**Server:** http://localhost:8080/index.html

## Desktop Testing (1200px+)

### Opening Search
- [ ] Click search icon → navbar transforms smoothly
- [ ] Logo, nav-links, menu button fade out (opacity: 0)
- [ ] Search icon (decorative), input, close button appear
- [ ] Input automatically focused
- [ ] Close button visible with X symbol
- [ ] Category filters visible below navbar (All, Skills, Adventures, Pages, Videos)

### Search Functionality
- [ ] Type 2+ characters → results appear in panel below navbar
- [ ] Results panel positioned directly under navbar
- [ ] Results container max-width 800px, centered
- [ ] Category filter buttons change search results
- [ ] "All" filter shows all results
- [ ] Individual filters (Skills, Adventures, Pages, Videos) filter correctly

### Keyboard Navigation
- [ ] Arrow Down → highlights next result
- [ ] Arrow Up → highlights previous result
- [ ] Enter with selection → navigates to result
- [ ] Enter without selection → shows all results
- [ ] Escape → closes search, restores navbar

### Closing Search
- [ ] Click close button → navbar restores smoothly
- [ ] Click outside search area → closes search
- [ ] Original navbar elements return (logo, nav-links, buttons visible)

### Scrolled State
- [ ] Scroll page down → navbar gets cream background
- [ ] Open search while scrolled → search input has proper styling
- [ ] Border colors adapt to scrolled state

## Mobile Testing

### 768px (Tablet)
- [ ] Search transformation works
- [ ] Input height 44px
- [ ] Filters wrap if needed
- [ ] Results readable, not stretched

### 425px (Mobile)
- [ ] Search icon 20px, input 40px height
- [ ] Close button 36px
- [ ] Logo hidden when search active
- [ ] No horizontal overflow
- [ ] Filters wrap properly

### 375px (iPhone)
- [ ] All controls accessible
- [ ] Input usable at 40px height
- [ ] Results scrollable

### 320px (Small phones)
- [ ] No clipping or overflow
- [ ] Close button accessible
- [ ] Results readable

## Other Pages Testing

### Visit each page and verify:
- [ ] about.html → search works, no category filters
- [ ] adventures.html → search works, context-aware
- [ ] skills.html → search works, context-aware  
- [ ] videos.html → search works, shows only videos
- [ ] gear.html → search works
- [ ] fire.html → search works
- [ ] fishing.html → search works
- [ ] hunting.html → search works
- [ ] camping.html → search works

### Search Context Behavior
- [ ] Homepage → searches everything, filters available
- [ ] Videos page → searches only videos
- [ ] Other pages → context-aware search scope

## Visual Polish
- [ ] Transitions smooth (150-250ms)
- [ ] No layout shifts
- [ ] Focus states visible
- [ ] No jarring animations

## Accessibility
- [ ] Keyboard-only navigation works
- [ ] Focus visible on all interactive elements
- [ ] Screen reader labels present (aria-label)
- [ ] No accessibility errors in console

## Known Limitations
- Playwright not available for automated testing
- Manual browser testing required
- Test at actual viewport sizes, not just responsive mode estimates
