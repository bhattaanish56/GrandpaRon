# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-mobile-search.spec.js >> Mobile Search Layout >> 320px viewport
- Location: test-mobile-search.spec.js:4:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.logo')
Expected: visible
Error: strict mode violation: locator('.logo') resolved to 2 elements:
    1) <a class="logo" href="index.html">…</a> aka getByRole('link', { name: 'Grandpa Ron ADVENTURES WITH' })
    2) <div class="logo">…</div> aka locator('.footer-brand > .logo')

Call log:
  - Expect "toBeVisible" locator('.logo') with timeout 5000ms
  - waiting for locator('.logo')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "Grandpa Ron ADVENTURES WITH GRANDPA RON" [ref=e4] [cursor=pointer]:
        - /url: index.html
        - img "Grandpa Ron" [ref=e5]
        - generic [ref=e6]:
          - text: ADVENTURES WITH
          - generic [ref=e7]: GRANDPA RON
      - generic [ref=e8]:
        - button "Search" [ref=e9] [cursor=pointer]
        - button [ref=e10] [cursor=pointer]
  - generic [ref=e14]:
    - link "Home" [ref=e15] [cursor=pointer]:
      - /url: index.html
    - link "Skills" [ref=e16] [cursor=pointer]:
      - /url: "#skills"
    - link "Videos" [ref=e17] [cursor=pointer]:
      - /url: videos.html
    - link "Adventures" [ref=e18] [cursor=pointer]:
      - /url: adventures.html
    - link "About" [ref=e19] [cursor=pointer]:
      - /url: about.html
    - link "Gear" [ref=e20] [cursor=pointer]:
      - /url: gear.html
  - main [ref=e21]:
    - generic [ref=e26]:
      - paragraph [ref=e27]: Real skills. Real adventures.
      - heading "Go Anywhere. Together." [level=1] [ref=e28]
      - paragraph [ref=e29]: Outdoor skills, survival tips, and real adventures from a lifetime spent exploring together.
      - generic [ref=e30]:
        - link [ref=e31] [cursor=pointer]:
          - /url: "#featured"
        - generic [ref=e33]: Watch Our Story
    - generic [ref=e36]:
      - generic [ref=e37]:
        - paragraph [ref=e38]: Our Story
        - heading "Meet Grandpa Ron" [level=2] [ref=e39]
        - paragraph [ref=e40]: We're a couple in our late 60s who have spent years exploring the outdoors together — canoeing, fishing, hunting, camping, and learning how to make the most of what nature gives us.
        - paragraph [ref=e41]: Now we're sharing what we've learned along the way.
        - link "Our Story →" [ref=e42] [cursor=pointer]:
          - /url: about.html
          - text: Our Story
          - generic [ref=e43]: →
      - img "Ron and his partner in outdoor gear and wide-brimmed hats" [ref=e45]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - paragraph [ref=e49]: Learn from experience
        - heading "Explore Our Survival Skills" [level=2] [ref=e50]
        - paragraph [ref=e51]: Practical knowledge, step-by-step guides, equipment lists and videos from our adventures.
      - generic [ref=e52]:
        - link "Fire building 01 Fire Learn how to start and maintain a fire in different conditions. Explore →" [ref=e53] [cursor=pointer]:
          - /url: fire.html
          - img "Fire building" [ref=e55]
          - generic [ref=e56]:
            - generic [ref=e57]: "01"
            - heading "Fire" [level=3] [ref=e58]
            - paragraph [ref=e59]: Learn how to start and maintain a fire in different conditions.
            - text: Explore →
        - link "Grandpa Ron holding a fish while seated in a canoe 02 Fishing Tips, techniques and equipment learned from years on the water. Explore →" [ref=e60] [cursor=pointer]:
          - /url: fishing.html
          - img "Grandpa Ron holding a fish while seated in a canoe" [ref=e62]
          - generic [ref=e63]:
            - generic [ref=e64]: "02"
            - heading "Fishing" [level=3] [ref=e65]
            - paragraph [ref=e66]: Tips, techniques and equipment learned from years on the water.
            - text: Explore →
        - link "Hunting 03 Hunting Preparation, field knowledge and outdoor experience. Explore →" [ref=e67] [cursor=pointer]:
          - /url: hunting.html
          - img "Hunting" [ref=e69]
          - generic [ref=e70]:
            - generic [ref=e71]: "03"
            - heading "Hunting" [level=3] [ref=e72]
            - paragraph [ref=e73]: Preparation, field knowledge and outdoor experience.
            - text: Explore →
        - link "Camping 04 Camping Set up camp, stay prepared, and enjoy the outdoors. Explore →" [ref=e74] [cursor=pointer]:
          - /url: camping.html
          - img "Camping" [ref=e76]
          - generic [ref=e77]:
            - generic [ref=e78]: "04"
            - heading "Camping" [level=3] [ref=e79]
            - paragraph [ref=e80]: Set up camp, stay prepared, and enjoy the outdoors.
            - text: Explore →
      - link "View All Skills →" [ref=e82] [cursor=pointer]:
        - /url: skills.html
    - generic [ref=e85]:
      - generic [ref=e86] [cursor=pointer]:
        - img "Video thumbnail" [ref=e87]
        - button "Play video" [ref=e88]
      - generic [ref=e92]:
        - paragraph [ref=e93]: Featured Video
        - heading "3 Days in Arctic Survival Shelter - Solo Bushcraft Camping & Blacksmithing." [level=2] [ref=e94]
        - paragraph [ref=e95]: Follow along with Grandpa Ron as he shares real outdoor adventures, practical lessons, and memorable experiences from the journey.
        - link "Watch Videos →" [ref=e96] [cursor=pointer]:
          - /url: videos.html
          - text: Watch Videos
          - generic [ref=e97]: →
    - generic [ref=e99]:
      - generic [ref=e100]:
        - generic [ref=e101]:
          - paragraph [ref=e102]: From the Journal
          - heading "Stories from the Road" [level=2] [ref=e103]
        - link "View All →" [ref=e104] [cursor=pointer]:
          - /url: adventures.html
      - generic [ref=e105]:
        - link "Fishing adventure ADVENTURE Our Favorite Fishing Spot A quiet morning on the water and what we've learned over the years. Read More →" [ref=e106] [cursor=pointer]:
          - /url: adventures.html
          - img "Fishing adventure" [ref=e107]
          - generic [ref=e108]:
            - generic [ref=e109]: ADVENTURE
            - heading "Our Favorite Fishing Spot" [level=3] [ref=e110]
            - paragraph [ref=e111]: A quiet morning on the water and what we've learned over the years.
            - text: Read More →
        - link "Canoe adventure CANOEING What We Keep in Our Canoe The things we never leave home without when heading onto the water. Read More →" [ref=e112] [cursor=pointer]:
          - /url: adventures.html
          - img "Canoe adventure" [ref=e113]
          - generic [ref=e114]:
            - generic [ref=e115]: CANOEING
            - heading "What We Keep in Our Canoe" [level=3] [ref=e116]
            - paragraph [ref=e117]: The things we never leave home without when heading onto the water.
            - text: Read More →
        - link "Camping adventure CAMPING A Winter Camping Experience What worked, what didn't, and what we'd do differently. Read More →" [ref=e118] [cursor=pointer]:
          - /url: adventures.html
          - img "Camping adventure" [ref=e119]
          - generic [ref=e120]:
            - generic [ref=e121]: CAMPING
            - heading "A Winter Camping Experience" [level=3] [ref=e122]
            - paragraph [ref=e123]: What worked, what didn't, and what we'd do differently.
            - text: Read More →
    - generic [ref=e126]:
      - paragraph [ref=e127]: THE JOURNEY CONTINUES
      - heading "The Best Stories Are Still Ahead." [level=2] [ref=e128]
      - paragraph [ref=e129]: From quiet mornings on the water to new trails waiting to be explored, there's always another adventure worth sharing.
      - link "Watch Our Adventures →" [ref=e130] [cursor=pointer]:
        - /url: videos.html
      - paragraph [ref=e131]: Real places. Real experiences. Always learning.
  - contentinfo [ref=e132]:
    - generic [ref=e133]:
      - generic [ref=e134]:
        - generic [ref=e135]:
          - img "Grandpa Ron" [ref=e137]
          - heading "Adventures with Grandpa Ron" [level=5] [ref=e138]
          - paragraph [ref=e139]: Real skills, real adventures, and a lifetime of learning outdoors together.
        - generic [ref=e140]:
          - heading "Explore" [level=4] [ref=e141]
          - link "Skills" [ref=e142] [cursor=pointer]:
            - /url: skills.html
          - link "Videos" [ref=e143] [cursor=pointer]:
            - /url: videos.html
          - link "Adventures" [ref=e144] [cursor=pointer]:
            - /url: adventures.html
          - link "Gear" [ref=e145] [cursor=pointer]:
            - /url: gear.html
        - generic [ref=e146]:
          - heading "About" [level=4] [ref=e147]
          - link "Our Story" [ref=e148] [cursor=pointer]:
            - /url: about.html
          - link "Contact" [ref=e149] [cursor=pointer]:
            - /url: "#"
        - generic [ref=e150]:
          - heading "Follow Along" [level=4] [ref=e151]
          - link "Instagram ↗" [ref=e152] [cursor=pointer]:
            - /url: https://www.instagram.com/adventures_with_grandpa_ron/
          - link "YouTube ↗" [ref=e153] [cursor=pointer]:
            - /url: https://www.youtube.com/@AdventuresWithGrandpaRon
      - generic [ref=e154]:
        - generic [ref=e155]: © 2026 Grandpa Ron Adventures
        - generic [ref=e156]: Go anywhere. Learn anything. Together.
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | test.describe('Mobile Search Layout', () => {
  4   |   test('320px viewport', async ({ page }) => {
  5   |     await page.setViewportSize({ width: 320, height: 568 });
  6   |     await page.goto('http://127.0.0.1:5500/Project/Grandpa-Ron-Mockup-/index.html');
  7   | 
  8   |     const navbar = page.locator('.navbar');
  9   |     const logo = page.locator('.logo');
  10  |     const searchButton = page.locator('.search-button');
  11  |     const hamburger = page.locator('.menu-button');
  12  |     const searchInput = page.locator('.search-input');
  13  |     const searchContainer = page.locator('.search-container');
  14  | 
  15  |     // Initial state
> 16  |     await expect(logo).toBeVisible();
      |                        ^ Error: expect(locator).toBeVisible() failed
  17  |     await expect(searchButton).toBeVisible();
  18  |     await expect(hamburger).toBeVisible();
  19  | 
  20  |     const initialLogoBounds = await logo.boundingBox();
  21  |     const initialHamburgerBounds = await hamburger.boundingBox();
  22  |     const navbarBounds = await navbar.boundingBox();
  23  | 
  24  |     // Open search
  25  |     await searchButton.click();
  26  |     await expect(searchInput).toBeFocused();
  27  | 
  28  |     // Verify navbar controls remain visible
  29  |     await expect(logo).toBeVisible();
  30  |     await expect(searchButton).toBeVisible();
  31  |     await expect(hamburger).toBeVisible();
  32  | 
  33  |     const activeLogoBounds = await logo.boundingBox();
  34  |     const activeHamburgerBounds = await hamburger.boundingBox();
  35  | 
  36  |     // Logo and hamburger should not move
  37  |     expect(Math.abs(activeLogoBounds.x - initialLogoBounds.x)).toBeLessThan(2);
  38  |     expect(Math.abs(activeHamburgerBounds.x - initialHamburgerBounds.x)).toBeLessThan(2);
  39  | 
  40  |     // Search container should be below navbar
  41  |     const searchBounds = await searchContainer.boundingBox();
  42  |     expect(searchBounds.y).toBeGreaterThanOrEqual(navbarBounds.height);
  43  | 
  44  |     // Type query
  45  |     await searchInput.fill('fire');
  46  |     await page.waitForTimeout(500);
  47  | 
  48  |     const resultsPanel = page.locator('.search-results-panel');
  49  |     await expect(resultsPanel).toBeVisible();
  50  | 
  51  |     const filters = page.locator('.search-filters');
  52  |     await expect(filters).toBeVisible();
  53  | 
  54  |     // Verify filters don't overlap results
  55  |     const filtersBounds = await filters.boundingBox();
  56  |     const resultsPanelBounds = await resultsPanel.boundingBox();
  57  | 
  58  |     expect(filtersBounds.y + filtersBounds.height).toBeLessThanOrEqual(resultsPanelBounds.y);
  59  | 
  60  |     // Click filter
  61  |     const skillsFilter = page.locator('.search-filter-btn[data-filter="skills"]');
  62  |     await skillsFilter.click();
  63  | 
  64  |     // Verify still works
  65  |     const firstResult = page.locator('.search-result').first();
  66  |     await expect(firstResult).toBeVisible();
  67  | 
  68  |     // Close with Escape
  69  |     await searchInput.press('Escape');
  70  |     await expect(searchButton).toBeFocused();
  71  | 
  72  |     // Reopen and close with button
  73  |     await searchButton.click();
  74  |     await expect(searchInput).toBeFocused();
  75  |     await searchButton.click();
  76  | 
  77  |     // Verify hamburger still works
  78  |     await hamburger.click();
  79  |     const mobileMenu = page.locator('.mobile-menu');
  80  |     await expect(mobileMenu).toHaveClass(/active/);
  81  |   });
  82  | 
  83  |   test('375px viewport', async ({ page }) => {
  84  |     await page.setViewportSize({ width: 375, height: 667 });
  85  |     await page.goto('http://127.0.0.1:5500/Project/Grandpa-Ron-Mockup-/index.html');
  86  | 
  87  |     const searchButton = page.locator('.search-button');
  88  |     const searchInput = page.locator('.search-input');
  89  |     const searchContainer = page.locator('.search-container');
  90  | 
  91  |     await searchButton.click();
  92  |     await searchInput.fill('fire');
  93  |     await page.waitForTimeout(300);
  94  | 
  95  |     // Verify no overflow
  96  |     const containerBounds = await searchContainer.boundingBox();
  97  |     expect(containerBounds.x).toBeGreaterThanOrEqual(0);
  98  |     expect(containerBounds.x + containerBounds.width).toBeLessThanOrEqual(375);
  99  | 
  100 |     const resultsPanel = page.locator('.search-results-panel');
  101 |     await expect(resultsPanel).toBeVisible();
  102 |   });
  103 | 
  104 |   test('425px viewport', async ({ page }) => {
  105 |     await page.setViewportSize({ width: 425, height: 844 });
  106 |     await page.goto('http://127.0.0.1:5500/Project/Grandpa-Ron-Mockup-/index.html');
  107 | 
  108 |     const searchButton = page.locator('.search-button');
  109 |     const searchInput = page.locator('.search-input');
  110 | 
  111 |     await searchButton.click();
  112 |     await searchInput.fill('fire');
  113 |     await page.waitForTimeout(300);
  114 | 
  115 |     const resultsPanel = page.locator('.search-results-panel');
  116 |     await expect(resultsPanel).toBeVisible();
```