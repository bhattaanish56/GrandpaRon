# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-mobile-search.spec.js >> Mobile Search Layout >> Desktop 1440px preserved
- Location: test-mobile-search.spec.js:134:3

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator: locator('.logo')
Expected: not visible
Error: strict mode violation: locator('.logo') resolved to 2 elements:
    1) <a class="logo" href="index.html">…</a> aka getByRole('link', { name: 'Grandpa Ron ADVENTURES WITH' })
    2) <div class="logo">…</div> aka locator('.footer-brand > .logo')

Call log:
  - Expect "not toBeVisible" locator('.logo') with timeout 5000ms
  - waiting for locator('.logo')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "Grandpa Ron ADVENTURES WITH GRANDPA RON":
        - /url: index.html
        - img "Grandpa Ron"
        - generic:
          - text: ADVENTURES WITH
          - generic: GRANDPA RON
      - navigation:
        - link "Home":
          - /url: index.html
        - link "Skills":
          - /url: "#skills"
        - link "Videos":
          - /url: videos.html
        - link "Adventures":
          - /url: adventures.html
        - link "About":
          - /url: about.html
        - link "Gear":
          - /url: gear.html
      - generic [ref=e4]:
        - generic [ref=e5]:
          - generic [ref=e6]:
            - button [aria-hidden] [ref=e7]
            - textbox "Search" [active] [ref=e8]:
              - /placeholder: Search all content
              - text: fire
            - button "Close search" [ref=e9] [cursor=pointer]: ✕
          - generic [ref=e10]:
            - button "All" [ref=e11] [cursor=pointer]
            - button "Skills" [ref=e12] [cursor=pointer]
            - button "Adventures" [ref=e13] [cursor=pointer]
            - button "Gear" [ref=e14] [cursor=pointer]
            - button "Videos" [ref=e15] [cursor=pointer]
        - button "Search"
  - link "Fire Skills Learn how to start and maintain a fire in different conditions Building fires preparing site getting flames going" [ref=e19] [cursor=pointer]:
    - /url: fire.html
    - generic [ref=e20]: Fire
    - generic [ref=e21]:
      - generic [ref=e22]: Skills
      - generic [ref=e23]: Learn how to start and maintain a fire in different conditions Building fires preparing site getting flames going
  - generic [ref=e24]:
    - link "Home" [ref=e25] [cursor=pointer]:
      - /url: index.html
    - link "Skills" [ref=e26] [cursor=pointer]:
      - /url: "#skills"
    - link "Videos" [ref=e27] [cursor=pointer]:
      - /url: videos.html
    - link "Adventures" [ref=e28] [cursor=pointer]:
      - /url: adventures.html
    - link "About" [ref=e29] [cursor=pointer]:
      - /url: about.html
    - link "Gear" [ref=e30] [cursor=pointer]:
      - /url: gear.html
  - main [ref=e31]:
    - generic [ref=e32]:
      - generic [ref=e36]:
        - paragraph [ref=e37]: Real skills. Real adventures.
        - heading "Go Anywhere. Together." [level=1] [ref=e38]
        - paragraph [ref=e39]: Outdoor skills, survival tips, and real adventures from a lifetime spent exploring together.
        - generic [ref=e40]:
          - link [ref=e41] [cursor=pointer]:
            - /url: "#featured"
          - generic [ref=e43]: Watch Our Story
      - generic [ref=e44]: Scroll
    - generic [ref=e49]:
      - generic [ref=e50]:
        - paragraph [ref=e51]: Our Story
        - heading "Meet Grandpa Ron" [level=2] [ref=e52]
        - paragraph [ref=e53]: We're a couple in our late 60s who have spent years exploring the outdoors together — canoeing, fishing, hunting, camping, and learning how to make the most of what nature gives us.
        - paragraph [ref=e54]: Now we're sharing what we've learned along the way.
        - link "Our Story →" [ref=e55] [cursor=pointer]:
          - /url: about.html
          - text: Our Story
          - generic [ref=e56]: →
      - img "Ron and his partner in outdoor gear and wide-brimmed hats" [ref=e58]
    - generic [ref=e60]:
      - generic [ref=e61]:
        - paragraph [ref=e62]: Learn from experience
        - heading "Explore Our Survival Skills" [level=2] [ref=e63]
        - paragraph [ref=e64]: Practical knowledge, step-by-step guides, equipment lists and videos from our adventures.
      - generic [ref=e65]:
        - link "Fire building 01 Fire Learn how to start and maintain a fire in different conditions. Explore →" [ref=e66] [cursor=pointer]:
          - /url: fire.html
          - img "Fire building" [ref=e68]
          - generic [ref=e69]:
            - generic [ref=e70]: "01"
            - heading "Fire" [level=3] [ref=e71]
            - paragraph [ref=e72]: Learn how to start and maintain a fire in different conditions.
            - text: Explore →
        - link "Grandpa Ron holding a fish while seated in a canoe 02 Fishing Tips, techniques and equipment learned from years on the water. Explore →" [ref=e73] [cursor=pointer]:
          - /url: fishing.html
          - img "Grandpa Ron holding a fish while seated in a canoe" [ref=e75]
          - generic [ref=e76]:
            - generic [ref=e77]: "02"
            - heading "Fishing" [level=3] [ref=e78]
            - paragraph [ref=e79]: Tips, techniques and equipment learned from years on the water.
            - text: Explore →
        - link "Hunting 03 Hunting Preparation, field knowledge and outdoor experience. Explore →" [ref=e80] [cursor=pointer]:
          - /url: hunting.html
          - img "Hunting" [ref=e82]
          - generic [ref=e83]:
            - generic [ref=e84]: "03"
            - heading "Hunting" [level=3] [ref=e85]
            - paragraph [ref=e86]: Preparation, field knowledge and outdoor experience.
            - text: Explore →
        - link "Camping 04 Camping Set up camp, stay prepared, and enjoy the outdoors. Explore →" [ref=e87] [cursor=pointer]:
          - /url: camping.html
          - img "Camping" [ref=e89]
          - generic [ref=e90]:
            - generic [ref=e91]: "04"
            - heading "Camping" [level=3] [ref=e92]
            - paragraph [ref=e93]: Set up camp, stay prepared, and enjoy the outdoors.
            - text: Explore →
      - link "View All Skills →" [ref=e95] [cursor=pointer]:
        - /url: skills.html
    - generic [ref=e98]:
      - generic [ref=e99] [cursor=pointer]:
        - img "Video thumbnail" [ref=e100]
        - button "Play video" [ref=e101]
      - generic [ref=e105]:
        - paragraph [ref=e106]: Featured Video
        - heading "3 Days in Arctic Survival Shelter - Solo Bushcraft Camping & Blacksmithing." [level=2] [ref=e107]
        - paragraph [ref=e108]: Follow along with Grandpa Ron as he shares real outdoor adventures, practical lessons, and memorable experiences from the journey.
        - link "Watch Videos →" [ref=e109] [cursor=pointer]:
          - /url: videos.html
          - text: Watch Videos
          - generic [ref=e110]: →
    - generic [ref=e112]:
      - generic [ref=e113]:
        - generic [ref=e114]:
          - paragraph [ref=e115]: From the Journal
          - heading "Stories from the Road" [level=2] [ref=e116]
        - link "View All →" [ref=e117] [cursor=pointer]:
          - /url: adventures.html
      - generic [ref=e118]:
        - link "Fishing adventure ADVENTURE Our Favorite Fishing Spot A quiet morning on the water and what we've learned over the years. Read More →" [ref=e119] [cursor=pointer]:
          - /url: adventures.html
          - img "Fishing adventure" [ref=e120]
          - generic [ref=e121]:
            - generic [ref=e122]: ADVENTURE
            - heading "Our Favorite Fishing Spot" [level=3] [ref=e123]
            - paragraph [ref=e124]: A quiet morning on the water and what we've learned over the years.
            - text: Read More →
        - link "Canoe adventure CANOEING What We Keep in Our Canoe The things we never leave home without when heading onto the water. Read More →" [ref=e125] [cursor=pointer]:
          - /url: adventures.html
          - img "Canoe adventure" [ref=e126]
          - generic [ref=e127]:
            - generic [ref=e128]: CANOEING
            - heading "What We Keep in Our Canoe" [level=3] [ref=e129]
            - paragraph [ref=e130]: The things we never leave home without when heading onto the water.
            - text: Read More →
        - link "Camping adventure CAMPING A Winter Camping Experience What worked, what didn't, and what we'd do differently. Read More →" [ref=e131] [cursor=pointer]:
          - /url: adventures.html
          - img "Camping adventure" [ref=e132]
          - generic [ref=e133]:
            - generic [ref=e134]: CAMPING
            - heading "A Winter Camping Experience" [level=3] [ref=e135]
            - paragraph [ref=e136]: What worked, what didn't, and what we'd do differently.
            - text: Read More →
    - generic [ref=e139]:
      - paragraph [ref=e140]: THE JOURNEY CONTINUES
      - heading "The Best Stories Are Still Ahead." [level=2] [ref=e141]
      - paragraph [ref=e142]: From quiet mornings on the water to new trails waiting to be explored, there's always another adventure worth sharing.
      - link "Watch Our Adventures →" [ref=e143] [cursor=pointer]:
        - /url: videos.html
      - paragraph [ref=e144]: Real places. Real experiences. Always learning.
  - contentinfo [ref=e145]:
    - generic [ref=e146]:
      - generic [ref=e147]:
        - generic [ref=e148]:
          - img "Grandpa Ron" [ref=e150]
          - heading "Adventures with Grandpa Ron" [level=5] [ref=e151]
          - paragraph [ref=e152]: Real skills, real adventures, and a lifetime of learning outdoors together.
        - generic [ref=e153]:
          - heading "Explore" [level=4] [ref=e154]
          - link "Skills" [ref=e155] [cursor=pointer]:
            - /url: skills.html
          - link "Videos" [ref=e156] [cursor=pointer]:
            - /url: videos.html
          - link "Adventures" [ref=e157] [cursor=pointer]:
            - /url: adventures.html
          - link "Gear" [ref=e158] [cursor=pointer]:
            - /url: gear.html
        - generic [ref=e159]:
          - heading "About" [level=4] [ref=e160]
          - link "Our Story" [ref=e161] [cursor=pointer]:
            - /url: about.html
          - link "Contact" [ref=e162] [cursor=pointer]:
            - /url: "#"
        - generic [ref=e163]:
          - heading "Follow Along" [level=4] [ref=e164]
          - link "Instagram ↗" [ref=e165] [cursor=pointer]:
            - /url: https://www.instagram.com/adventures_with_grandpa_ron/
          - link "YouTube ↗" [ref=e166] [cursor=pointer]:
            - /url: https://www.youtube.com/@AdventuresWithGrandpaRon
      - generic [ref=e167]:
        - generic [ref=e168]: © 2026 Grandpa Ron Adventures
        - generic [ref=e169]: Go anywhere. Learn anything. Together.
```

# Test source

```ts
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
  117 |   });
  118 | 
  119 |   test('518px viewport', async ({ page }) => {
  120 |     await page.setViewportSize({ width: 518, height: 800 });
  121 |     await page.goto('http://127.0.0.1:5500/Project/Grandpa-Ron-Mockup-/index.html');
  122 | 
  123 |     const searchButton = page.locator('.search-button');
  124 |     const searchInput = page.locator('.search-input');
  125 | 
  126 |     await searchButton.click();
  127 |     await searchInput.fill('fire');
  128 |     await page.waitForTimeout(300);
  129 | 
  130 |     const resultsPanel = page.locator('.search-results-panel');
  131 |     await expect(resultsPanel).toBeVisible();
  132 |   });
  133 | 
  134 |   test('Desktop 1440px preserved', async ({ page }) => {
  135 |     await page.setViewportSize({ width: 1440, height: 900 });
  136 |     await page.goto('http://127.0.0.1:5500/Project/Grandpa-Ron-Mockup-/index.html');
  137 | 
  138 |     const navbar = page.locator('.navbar');
  139 |     const logo = page.locator('.logo');
  140 |     const searchButton = page.locator('.search-button');
  141 |     const searchInput = page.locator('.search-input');
  142 |     const searchContainer = page.locator('.search-container');
  143 | 
  144 |     await searchButton.click();
  145 |     await searchInput.fill('fire');
  146 |     await page.waitForTimeout(300);
  147 | 
  148 |     // Desktop should hide navbar elements
> 149 |     await expect(logo).not.toBeVisible();
      |                            ^ Error: expect(locator).not.toBeVisible() failed
  150 | 
  151 |     // Search should overlay
  152 |     await expect(navbar).toHaveClass(/search-active/);
  153 |     const containerBounds = await searchContainer.boundingBox();
  154 |     const navbarBounds = await navbar.boundingBox();
  155 | 
  156 |     // Container should be within navbar height
  157 |     expect(containerBounds.y).toBeLessThan(navbarBounds.height);
  158 | 
  159 |     const resultsPanel = page.locator('.search-results-panel');
  160 |     await expect(resultsPanel).toBeVisible();
  161 | 
  162 |     // Close
  163 |     const closeBtn = page.locator('.search-close');
  164 |     await closeBtn.click();
  165 |     await expect(logo).toBeVisible();
  166 |   });
  167 | });
  168 | 
```