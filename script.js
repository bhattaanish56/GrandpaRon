/* ================= VIDEO CONFIGURATION ================= */
/* EDITABLE: Update video metadata here */
const VIDEO_LIBRARY = [
    {
        id: 'iys_pmJSp9M',
        title: 'Video',
        category: 'adventure',
        categoryLabel: 'Adventure',
        source: 'youtube',
        duration: null
    },
    {
        id: '6FJ-kY7TNA0',
        title: 'Video',
        category: 'tutorial',
        categoryLabel: 'Tutorial',
        source: 'youtube',
        duration: null
    },
    {
        id: 'nQdXp6HKKik',
        title: 'Video',
        category: 'tutorial',
        categoryLabel: 'Tutorial',
        source: 'youtube',
        duration: null
    },
    {
        id: 'ZgSdKNi6LTU',
        title: 'Video',
        category: 'tutorial',
        categoryLabel: 'Tutorial',
        source: 'youtube',
        duration: null
    },
    {
        id: 'U_LlX4t0A9I',
        title: 'Video',
        category: 'tutorial',
        categoryLabel: 'Tutorial',
        source: 'youtube',
        duration: null
    },
    {
        id: 'FtdIcmgfy_w',
        title: 'Video',
        category: 'short',
        categoryLabel: 'Short Clip',
        source: 'youtube',
        duration: null
    },
    {
        id: 'p9yaDeStS7A',
        title: 'Video',
        category: 'short',
        categoryLabel: 'Short Clip',
        source: 'youtube',
        duration: null
    }
];

// Legacy VIDEOS object for backward compatibility
const VIDEOS = {
    featured: 'iys_pmJSp9M',
    fishing: '6FJ-kY7TNA0',
    camping: 'nQdXp6HKKik',
    hunting: 'ZgSdKNi6LTU',
    fire: 'U_LlX4t0A9I',
    extra1: 'FtdIcmgfy_w',
    extra2: 'p9yaDeStS7A'
};

/* ================= VIDEO TITLE FETCHING ================= */

const videoTitleCache = {};

async function fetchYouTubeTitle(videoId) {
    if (videoTitleCache[videoId]) {
        return videoTitleCache[videoId];
    }

    try {
        const response = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
        if (response.ok) {
            const data = await response.json();
            videoTitleCache[videoId] = data.title;
            return data.title;
        }
    } catch (error) {
        console.warn(`Could not fetch title for video ${videoId}:`, error);
    }
    return null;
}

async function enrichVideoWithMetadata(video) {
    if (video.source === 'youtube') {
        const actualTitle = await fetchYouTubeTitle(video.id);
        if (actualTitle) {
            return { ...video, title: actualTitle };
        }
    }
    return video;
}

/* ================= NAVIGATION ================= */

const navbar = document.getElementById("navbar");
let lastScrollY = window.scrollY;
let ticking = false;

function handleNavbar() {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;
    const heroHeight = Math.max(window.innerHeight, 680);

    // Add scrolled class for background after 60px
    if (currentScrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Hide/show navbar based on scroll direction
    // Only hide after scrolling past the hero section
    if (Math.abs(scrollDelta) > 5) {
        if (scrollDelta > 0 && currentScrollY > heroHeight) {
            // Scrolling down and past hero - hide navbar
            navbar.classList.add("hidden");
        } else if (scrollDelta < 0) {
            // Scrolling up - show navbar
            navbar.classList.remove("hidden");
        }
    }

    lastScrollY = currentScrollY;
    ticking = false;
}

function requestNavbarUpdate() {
    if (!ticking) {
        window.requestAnimationFrame(handleNavbar);
        ticking = true;
    }
}

window.addEventListener("scroll", requestNavbarUpdate);

handleNavbar();


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

}

// Close mobile menu when clicking a link
if (mobileMenu) {
    const menuLinks = mobileMenu.querySelectorAll("a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });
}

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
    if (mobileMenu && mobileMenu.classList.contains("active")) {
        if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
            mobileMenu.classList.remove("active");
        }
    }
});

// Close mobile menu on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu && mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active");
    }
});

// Smooth scroll for hash links with navbar offset
document.addEventListener("click", (e) => {
    const link = e.target.closest("a[href^='#']");
    if (!link) return;

    const hash = link.getAttribute("href");
    if (!hash || hash === "#") return;

    const target = document.querySelector(hash);
    if (!target) return;

    e.preventDefault();
    const navbarHeight = 79;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});

// Handle section scrolling on page load
window.addEventListener('load', () => {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                const navbarHeight = 79;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }, 100);
        }
    }
});


/* ================= SEARCH ================= */

// Synonym dictionary for expanded search
const SEARCH_SYNONYMS = {
    fishing: ['angling', 'fish', 'catch', 'rod', 'reel', 'tackle', 'bait'],
    camping: ['camp', 'tent', 'outdoors', 'backpacking', 'wilderness'],
    hunting: ['hunt', 'game', 'tracking', 'wildlife', 'deer', 'bow'],
    hiking: ['hike', 'trail', 'walk', 'trek', 'backpacking'],
    fire: ['campfire', 'bonfire', 'flames', 'kindling', 'tinder'],
    gear: ['equipment', 'tools', 'supplies', 'kit'],
    adventure: ['trip', 'journey', 'expedition', 'explore']
};

// Comprehensive search index extracted from all pages
const SEARCH_INDEX = [
    // Home page
    { title: 'Home', description: 'Go Anywhere Together Real skills real adventures outdoor knowledge', url: 'index.html', category: 'Pages', keywords: 'home adventure outdoors skills videos' },
    { title: 'Meet Grandpa Ron', description: 'A lifetime outdoors love for adventure lessons worth passing along', url: 'index.html', category: 'About', section: 'about', keywords: 'about story grandpa ron' },

    // About page
    { title: 'About Grandpa Ron', description: 'Meet Grandpa Ron lifetime outdoors love for adventure and plenty of lessons worth passing along', url: 'about.html', category: 'About', keywords: 'about story couple outdoor experience' },
    { title: 'Our Story', description: 'We have always found our way outside Being outdoors spending time together enjoying places', url: 'about.html', category: 'About', section: 'story', keywords: 'story experience outdoor learning' },
    { title: 'Why We Share', description: 'Experience is better when it is passed on Learn Explore Together', url: 'about.html', category: 'About', section: 'values', keywords: 'learn explore together share knowledge' },

    // Skills pages
    { title: 'Fire', description: 'Learn how to start and maintain a fire in different conditions Building fires preparing site getting flames going', url: 'fire.html', category: 'Skills', keywords: 'fire campfire survival flames kindling tinder warmth' },
    { title: 'Building a Fire', description: 'Prepare location gather fuel choose fire-starting method build structure survival skill', url: 'fire.html', category: 'Skills', section: 'content', keywords: 'fire building campfire survival warmth cook' },

    { title: 'Fishing', description: 'Tips techniques and equipment learned from years on the water choosing spot casting line waiting for bite', url: 'fishing.html', category: 'Skills', keywords: 'fishing angling fish catch rod reel water lake' },
    { title: 'Fishing Basics', description: 'Choose the right spot gather gear choose bait cast your line patience on the water', url: 'fishing.html', category: 'Skills', section: 'content', keywords: 'fishing technique bait tackle rod reel catch' },

    { title: 'Hunting', description: 'Preparation field knowledge and outdoor experience understanding the land preparing gear moving responsibly', url: 'hunting.html', category: 'Skills', keywords: 'hunting game tracking wildlife field outdoor' },
    { title: 'Hunting Basics', description: 'Know the land prepare your gear read the signs move with care field knowledge', url: 'hunting.html', category: 'Skills', section: 'content', keywords: 'hunting tracking wildlife deer bow field' },

    { title: 'Camping', description: 'Set up camp stay prepared and enjoy the outdoors choosing campsite setting up shelter settling in', url: 'camping.html', category: 'Skills', keywords: 'camping camp tent shelter backpacking outdoors' },
    { title: 'Camping Basics', description: 'Choose your campsite set up shelter prepare camp settle in for the night', url: 'camping.html', category: 'Skills', section: 'content', keywords: 'camping tent shelter site preparation outdoors' },

    // Skills hub
    { title: 'All Skills', description: 'Outdoor Skills Practical knowledge learned through years of spending time outdoors Fire Fishing Hunting Camping', url: 'skills.html', category: 'Skills', keywords: 'skills survival outdoor fire fishing hunting camping' },

    // Adventures
    { title: 'Adventures', description: 'Out Here Together quiet mornings on water nights around campfire places and moments shared along the way', url: 'adventures.html', category: 'Adventures', keywords: 'adventures stories journey trip explore' },
    { title: 'Northern Lake', description: 'A few days away from everything exploring the lake by canoe enjoying the quiet of the outdoors', url: 'adventures.html', category: 'Adventures', section: 'featured', keywords: 'canoe lake canoeing adventure water' },
    { title: 'Days on the Lake', description: 'Early mornings quiet water and plenty of time to fish and explore', url: 'adventures.html', category: 'Adventures', keywords: 'fishing lake water morning explore' },
    { title: 'A Night Under the Stars', description: 'Setting up camp cooking over the fire and settling in for the night', url: 'adventures.html', category: 'Adventures', keywords: 'camping stars night fire cook' },
    { title: 'Into the Woods', description: 'Spending time in the field and learning to pay attention to what is around us', url: 'adventures.html', category: 'Adventures', keywords: 'hunting woods field wildlife nature' },
    { title: 'Evenings Around the Fire', description: 'There is something special about ending a day outdoors around a warm fire', url: 'adventures.html', category: 'Adventures', keywords: 'fire campfire evening warmth outdoors' },

    // Journal entries
    { title: 'Our Favorite Fishing Spot', description: 'A quiet morning on the water and what we have learned over the years', url: 'adventures.html', category: 'Journal', keywords: 'fishing water lake spot morning' },
    { title: 'What We Keep in Our Canoe', description: 'The things we never leave home without when heading onto the water', url: 'adventures.html', category: 'Journal', keywords: 'canoe gear equipment water lake' },
    { title: 'A Winter Camping Experience', description: 'What worked what did not and what we would do differently', url: 'adventures.html', category: 'Journal', keywords: 'camping winter experience outdoors' },

    // Gear page
    { title: 'Gear Guide', description: 'Gear For The Adventure Equipment and gear recommendations from our experiences Pack for the day', url: 'gear.html', category: 'Gear', keywords: 'gear equipment tools supplies kit prepare' },
    { title: 'Fishing Gear', description: 'Fishing rod reel tackle bait water equipment for catching fish on the lake', url: 'gear.html', category: 'Gear', section: 'fishing', keywords: 'fishing gear rod reel tackle bait equipment' },
    { title: 'Camping Gear', description: 'Tent sleeping bag backpack camp stove essentials for comfortable camping outdoors', url: 'gear.html', category: 'Gear', section: 'camping', keywords: 'camping gear tent sleeping bag backpack equipment' },
    { title: 'Hunting Gear', description: 'Rifle bow hunting knife field equipment for responsible hunting preparation', url: 'gear.html', category: 'Gear', section: 'hunting', keywords: 'hunting gear rifle bow knife field equipment' },
    { title: 'Fire & Survival Gear', description: 'Fire starter field knife cordage tarp flashlight emergency gear for unexpected situations', url: 'gear.html', category: 'Gear', section: 'fire-survival', keywords: 'fire survival gear emergency knife tarp flashlight' },
    { title: 'Canoeing Gear', description: 'Canoe paddle life jackets dry bags water equipment for adventures on the water', url: 'gear.html', category: 'Gear', section: 'canoeing', keywords: 'canoe paddle water lake gear equipment' },

    // Videos page
    { title: 'Videos', description: 'Real Adventures Real Lessons Watch our latest trips tutorials and outdoor experiences', url: 'videos.html', category: 'Videos', keywords: 'videos tutorials adventures watch learn' }
];

// Expand query with synonyms
function expandQueryWithSynonyms(query) {
    const words = query.toLowerCase().split(/\s+/);
    const expanded = [...words];

    words.forEach(word => {
        Object.keys(SEARCH_SYNONYMS).forEach(key => {
            if (word.includes(key) || key.includes(word)) {
                expanded.push(key, ...SEARCH_SYNONYMS[key]);
            }
            SEARCH_SYNONYMS[key].forEach(syn => {
                if (word.includes(syn) || syn.includes(word)) {
                    expanded.push(key, ...SEARCH_SYNONYMS[key]);
                }
            });
        });
    });

    return [...new Set(expanded)].join(' ');
}

// Detect GitHub Pages subpath
function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/GrandpaRon/')) {
        return '/GrandpaRon/';
    }
    return '/';
}

// Initialize Fuse.js search engine
let fuseInstance = null;

function initializeFuseSearch() {
    // Add videos to search index with fetched titles
    const searchData = [...SEARCH_INDEX];

    VIDEO_LIBRARY.forEach(video => {
        searchData.push({
            title: video.title,
            description: video.categoryLabel,
            url: 'videos.html',
            category: 'Videos',
            keywords: `video ${video.category} youtube`
        });
    });

    // Fuse.js configuration
    const fuseOptions = {
        keys: [
            { name: 'title', weight: 0.5 },
            { name: 'description', weight: 0.3 },
            { name: 'keywords', weight: 0.2 }
        ],
        threshold: 0.4,
        minMatchCharLength: 2,
        includeScore: true,
        ignoreLocation: true
    };

    fuseInstance = new Fuse(searchData, fuseOptions);
}

// Perform fuzzy search with synonym expansion
function performSearch(query) {
    if (!query || query.trim().length < 2) return [];
    if (!fuseInstance) initializeFuseSearch();

    const expandedQuery = expandQueryWithSynonyms(query);
    const results = fuseInstance.search(expandedQuery);

    // Deduplicate by URL + section
    const seen = new Set();
    const deduped = results.filter(result => {
        const key = `${result.item.url}#${result.item.section || ''}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });

    // Sort by score (lower is better in Fuse.js) and exact match priority
    const sorted = deduped.sort((a, b) => {
        const aExactTitle = a.item.title.toLowerCase().includes(query.toLowerCase());
        const bExactTitle = b.item.title.toLowerCase().includes(query.toLowerCase());

        if (aExactTitle && !bExactTitle) return -1;
        if (!aExactTitle && bExactTitle) return 1;

        return a.score - b.score;
    });

    // Return items, limit to 8 results
    return sorted.slice(0, 8).map(result => ({
        ...result.item,
        url: result.item.section ? `${result.item.url}#${result.item.section}` : result.item.url
    }));
}

// Create search UI
const searchButton = document.querySelector(".search-button");

if (searchButton && navbar) {
    // Create search container with close button
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <div class="search-controls">
            <button class="search-icon-display" aria-hidden="true"></button>
            <input type="text" class="search-input" placeholder="Search all content" aria-label="Search">
            <button class="search-close" aria-label="Close search">✕</button>
        </div>
    `;

    // Insert before search button in nav-right
    const navRight = document.querySelector('.nav-right');
    navRight.insertBefore(searchContainer, searchButton);

    // Create category filters
    const searchFilters = document.createElement('div');
    searchFilters.className = 'search-filters';
    searchFilters.innerHTML = `
        <button class="search-filter-btn active" data-filter="all">All</button>
        <button class="search-filter-btn" data-filter="Skills">Skills</button>
        <button class="search-filter-btn" data-filter="Adventures">Adventures</button>
        <button class="search-filter-btn" data-filter="Gear">Gear</button>
        <button class="search-filter-btn" data-filter="Videos">Videos</button>
    `;
    searchContainer.appendChild(searchFilters);

    // Get results panel (added to HTML)
    const searchResultsPanel = document.querySelector('.search-results-panel');
    const searchDropdown = searchResultsPanel ? searchResultsPanel.querySelector('.search-dropdown') : null;

    const searchInput = searchContainer.querySelector('.search-input');
    const searchClose = searchContainer.querySelector('.search-close');
    const filterBtns = searchContainer.querySelectorAll('.search-filter-btn');

    let selectedIndex = -1;
    let currentFilter = 'all';

    // Toggle search (mobile) or open (desktop)
    searchButton.addEventListener('click', (e) => {
        e.stopPropagation();
        if (navbar.classList.contains('search-active')) {
            closeSearch();
        } else {
            navbar.classList.add('search-active');
            searchInput.focus();
            positionResultsPanel();
        }
    });

    // Position results panel below search container + filters
    function positionResultsPanel() {
        if (searchResultsPanel) {
            requestAnimationFrame(() => {
                const filtersVisible = searchFilters && window.getComputedStyle(searchFilters).display !== 'none';
                const referenceElement = filtersVisible ? searchFilters : searchContainer;
                const rect = referenceElement.getBoundingClientRect();
                const gap = 20; // Gap between filters/controls and results
                searchResultsPanel.style.top = `${rect.bottom + gap}px`;
            });
        }
    }

    // Close search
    function closeSearch(returnFocus = false) {
        navbar.classList.remove('search-active');
        searchInput.value = '';
        if (searchDropdown) {
            searchDropdown.innerHTML = '';
        }
        if (searchResultsPanel) {
            searchResultsPanel.classList.remove('active');
            searchResultsPanel.style.top = '';
        }
        selectedIndex = -1;
        if (returnFocus) {
            searchButton.focus();
        }
    }

    searchClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeSearch();
    });

    // Category filter logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;

            // Re-run search with new filter
            if (searchInput.value.trim().length >= 2) {
                const results = performSearchWithFilter(searchInput.value);
                renderResults(results, true);
            }
            positionResultsPanel();
        });
    });

    // Filter search by category
    function performSearchWithFilter(query) {
        const allResults = performSearch(query);

        if (currentFilter === 'all') {
            return allResults;
        }

        return allResults.filter(item => {
            const cat = item.category;
            return cat === currentFilter ||
                   (currentFilter === 'Adventures' && (cat === 'Adventures' || cat === 'Journal'));
        });
    }

    // Render search results
    function renderResults(results, showAll = false) {
        if (!searchDropdown || !searchResultsPanel) return;

        if (results.length === 0) {
            searchDropdown.innerHTML = '<div class="search-empty">No results found</div>';
            searchResultsPanel.classList.add('active');
            positionResultsPanel();
            return;
        }

        const displayResults = showAll ? results : results.slice(0, 5);

        searchDropdown.innerHTML = displayResults.map((item, index) => `
            <a href="${item.url}" class="search-result" data-index="${index}">
                <div class="search-result-title">${item.title}</div>
                <div class="search-result-meta">
                    <span class="search-result-category">${item.category}</span>
                    ${item.description ? `<span class="search-result-description">${item.description}</span>` : ''}
                </div>
            </a>
        `).join('');

        searchResultsPanel.classList.add('active');
        positionResultsPanel();
        selectedIndex = -1;
    }

    // Live search
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        if (query.trim().length < 2) {
            if (searchDropdown) searchDropdown.innerHTML = '';
            if (searchResultsPanel) searchResultsPanel.classList.remove('active');
            return;
        }

        const results = performSearchWithFilter(query);
        renderResults(results, false);
    });

    // Keyboard navigation
    searchInput.addEventListener('keydown', (e) => {
        if (!searchDropdown) return;
        const results = searchDropdown.querySelectorAll('.search-result');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, results.length - 1);
            updateSelection(results);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, -1);
            updateSelection(results);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selectedIndex >= 0 && results[selectedIndex]) {
                results[selectedIndex].click();
            } else {
                // Show all results
                const query = searchInput.value;
                if (query.trim().length >= 2) {
                    const allResults = performSearchWithFilter(query);
                    renderResults(allResults, true);
                }
            }
        } else if (e.key === 'Escape') {
            closeSearch(true);
        }
    });

    function updateSelection(results) {
        results.forEach((result, index) => {
            if (index === selectedIndex) {
                result.classList.add('selected');
                result.scrollIntoView({ block: 'nearest' });
            } else {
                result.classList.remove('selected');
            }
        });
    }

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (navbar.classList.contains('search-active')) {
            if (!searchContainer.contains(e.target) &&
                !searchButton.contains(e.target) &&
                (!searchResultsPanel || !searchResultsPanel.contains(e.target))) {
                closeSearch();
            }
        }
    });

    // Prevent closing when clicking inside results
    if (searchResultsPanel) {
        searchResultsPanel.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
}


/* ================= VIDEO CARD SELECTION (videos.html) ================= */

const videoModal = document.getElementById('videoModal');
const videoModalBackdrop = videoModal ? videoModal.querySelector('.video-modal-backdrop') : null;
const videoModalClose = videoModal ? videoModal.querySelector('.video-modal-close') : null;
const videoModalPlayer = videoModal ? videoModal.querySelector('.video-modal-player') : null;

function openVideoModal(videoId) {
    if (!videoModal) return;

    // Create iframe for modal player
    videoModalPlayer.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    // Show modal
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    if (!videoModal) return;

    // Add closing class to trigger animations
    videoModal.classList.add('closing');

    // Wait for animation to complete before hiding
    setTimeout(() => {
        videoModal.classList.remove('active', 'closing');
        document.body.style.overflow = '';
        videoModalPlayer.innerHTML = '';
    }, 300);
}

// Close modal when clicking close button OR clicking outside video container
if (videoModal) {
    videoModal.addEventListener('click', (e) => {
        // Close if clicking the close button or its children
        if (e.target.closest('.video-modal-close')) {
            closeVideoModal();
            return;
        }
        // Close if clicking the modal background (not the container or its children)
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });
}

// Remove separate close button handler (handled above)

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
        closeVideoModal();
    }
});

// Handle YouTube thumbnail click-to-load
document.addEventListener('click', (e) => {
    const playButton = e.target.closest('.youtube-play-button, .youtube-play-button-small');
    if (!playButton) return;

    const container = playButton.closest('.youtube-embed-container');
    if (!container) return;

    e.preventDefault();

    const videoId = container.dataset.videoId;
    if (!videoId) return;

    // Check if library video (opens modal) or featured video (replaces inline)
    const isLibraryVideo = container.classList.contains('library-video-image');

    if (isLibraryVideo) {
        openVideoModal(videoId);
    } else {
        // Replace thumbnail with iframe for featured video
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;

        container.innerHTML = '';
        container.appendChild(iframe);
    }
});


/* ================= SCROLL REVEAL ================= */

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.classList.add('reveal');
    sectionObserver.observe(section);
});


/* ================= VIDEO LIBRARY & FILTERING ================= */

function getVideoEmbedUrl(video) {
    if (video.source === 'youtube') {
        return `https://www.youtube.com/embed/${video.id}`;
    }
    return video.id; // ponytail: add other sources when needed
}

function renderVideoCard(video) {
    const thumbnailUrl = video.source === 'youtube'
        ? `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`
        : video.id;

    return `
        <article class="library-video-card" data-category="${video.category}">
            <div class="library-video-image youtube-embed-container" data-video-id="${video.id}">
                <img src="${thumbnailUrl}" alt="${video.title}" class="youtube-thumbnail" loading="lazy">
                <button class="youtube-play-button-small" aria-label="Play ${video.title}">
                    <svg viewBox="0 0 68 48" width="48" height="34">
                        <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
                        <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                    </svg>
                </button>
            </div>
            <div class="library-video-info">
                <h3>${video.title}</h3>
                ${video.duration ? `<span class="video-duration">${video.duration}</span>` : ''}
                <span class="video-tag">${video.categoryLabel}</span>
            </div>
        </article>
    `;
}

let currentRenderToken = 0;

async function renderVideoLibrary(filter = 'all') {
    const grid = document.querySelector('.video-library-grid');
    if (!grid) return;

    const renderToken = ++currentRenderToken;

    const filtered = filter === 'all'
        ? VIDEO_LIBRARY
        : VIDEO_LIBRARY.filter(v => v.category === filter);

    // Render with fallback titles immediately
    grid.innerHTML = filtered.map(renderVideoCard).join('');

    // Fetch actual titles and update only text elements (preserve thumbnails and event handlers)
    const enriched = await Promise.all(filtered.map(enrichVideoWithMetadata));
    if (renderToken === currentRenderToken) {
        const cards = grid.querySelectorAll('.library-video-card');
        enriched.forEach((video, index) => {
            if (cards[index]) {
                const h3 = cards[index].querySelector('h3');
                if (h3 && video.title !== 'Video') {
                    h3.textContent = video.title;
                }
                // Update aria-label on play button
                const playButton = cards[index].querySelector('.youtube-play-button-small');
                if (playButton && video.title !== 'Video') {
                    playButton.setAttribute('aria-label', `Play ${video.title}`);
                }
            }
        });
    }
}

// Initialize video filters
const videoFilters = document.querySelectorAll('.video-filter');
if (videoFilters.length > 0) {
    renderVideoLibrary('all'); // Render initial videos

    videoFilters.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            // Update active state
            videoFilters.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter videos
            renderVideoLibrary(filter);
        });

        // Keyboard accessibility
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
}


/* ================= IMAGE SKELETON LOADING ================= */

// Handle image loading states for skeleton effect
function handleImageLoad() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    lazyImages.forEach(img => {
        // Check if already loaded (cached)
        if (img.complete && img.naturalWidth > 0) {
            img.classList.add('loaded');
        } else {
            // Listen for load event
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            }, { once: true });

            // Handle error - still mark as loaded to stop animation
            img.addEventListener('error', function() {
                this.classList.add('loaded');
                console.warn('Image failed to load:', this.src);
            }, { once: true });
        }
    });
}

// Handle YouTube thumbnails separately
function handleYouTubeThumbnails() {
    const thumbnails = document.querySelectorAll('.youtube-thumbnail');

    thumbnails.forEach(img => {
        if (img.complete && img.naturalWidth > 0) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            }, { once: true });

            img.addEventListener('error', function() {
                this.classList.add('loaded');
            }, { once: true });
        }
    });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        handleImageLoad();
        handleYouTubeThumbnails();
    });
} else {
    // DOM already loaded
    handleImageLoad();
    handleYouTubeThumbnails();
}

// Re-run for dynamically rendered video library thumbnails
const videoGrid = document.querySelector('.video-library-grid');
if (videoGrid) {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                // New thumbnails added, handle their loading
                setTimeout(handleYouTubeThumbnails, 100);
            }
        });
    });

    observer.observe(videoGrid, { childList: true });
}