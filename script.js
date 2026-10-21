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


/* ================= SEARCH ================= */

// Search data index
const SEARCH_INDEX = {
    skills: [
        { title: 'Fire', description: 'Learn how to start and maintain a fire in different conditions', url: 'fire.html', category: 'Skills' },
        { title: 'Fishing', description: 'Tips, techniques and equipment learned from years on the water', url: 'fishing.html', category: 'Skills' },
        { title: 'Hunting', description: 'Preparation, field knowledge and outdoor experience', url: 'hunting.html', category: 'Skills' },
        { title: 'Camping', description: 'Set up camp, stay prepared, and enjoy the outdoors', url: 'camping.html', category: 'Skills' }
    ],
    adventures: [
        { title: 'Northern Lake', description: 'A few days away from everything, exploring the lake by canoe', url: 'adventures.html', category: 'Adventures' },
        { title: 'Days on the Lake', description: 'Early mornings, quiet water, and plenty of time to fish and explore', url: 'fishing.html', category: 'Adventures' },
        { title: 'A Night Under the Stars', description: 'Setting up camp, cooking over the fire, and settling in for the night', url: 'camping.html', category: 'Adventures' },
        { title: 'Into the Woods', description: 'Spending time in the field and learning to pay attention', url: 'hunting.html', category: 'Adventures' },
        { title: 'Evenings Around the Fire', description: 'Something special about ending a day outdoors around a warm fire', url: 'fire.html', category: 'Adventures' },
        { title: 'Our Favorite Fishing Spot', description: 'A quiet morning on the water and what we have learned over the years', url: 'adventures.html', category: 'Journal' },
        { title: 'What We Keep in Our Canoe', description: 'The things we never leave home without when heading onto the water', url: 'adventures.html', category: 'Journal' },
        { title: 'A Winter Camping Experience', description: 'What worked, what did not, and what we would do differently', url: 'adventures.html', category: 'Journal' }
    ],
    pages: [
        { title: 'About Us', description: 'Meet Grandpa Ron and learn about our outdoor adventures', url: 'about.html', category: 'About' },
        { title: 'Gear Guide', description: 'Equipment and gear recommendations from our experiences', url: 'gear.html', category: 'Gear' },
        { title: 'All Skills', description: 'Explore our complete collection of survival skills', url: 'skills.html', category: 'Skills' },
        { title: 'All Videos', description: 'Watch our adventures, tutorials and outdoor experiences', url: 'videos.html', category: 'Videos' }
    ]
};

// Get current page context
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('videos.html')) return 'videos';
    if (path.includes('skills.html')) return 'skills';
    if (path.includes('adventures.html')) return 'adventures';
    if (path.includes('fire.html') || path.includes('fishing.html') ||
        path.includes('hunting.html') || path.includes('camping.html')) return 'skill-detail';
    return 'home';
}

// Get search scope text
function getSearchScope() {
    const page = getCurrentPage();
    if (page === 'home') return 'Search all content';
    if (page === 'videos') return 'Search videos';
    if (page === 'skills') return 'Search skills';
    if (page === 'adventures') return 'Search adventures';
    if (page === 'skill-detail') return 'Search this page';
    return 'Search';
}

// Filter search results based on page context
function getSearchableContent() {
    const page = getCurrentPage();
    let content = [];

    if (page === 'home') {
        // Homepage: search everything
        content = [...SEARCH_INDEX.skills, ...SEARCH_INDEX.adventures, ...SEARCH_INDEX.pages];

        // Add videos with fetched titles
        VIDEO_LIBRARY.forEach(video => {
            content.push({
                title: video.title,
                description: video.categoryLabel,
                url: 'videos.html',
                category: 'Videos',
                videoId: video.id
            });
        });
    } else if (page === 'videos') {
        // Videos page: only videos
        VIDEO_LIBRARY.forEach(video => {
            content.push({
                title: video.title,
                description: video.categoryLabel,
                url: 'videos.html',
                category: 'Videos',
                videoId: video.id
            });
        });
    } else if (page === 'skills') {
        // Skills page: only skills
        content = [...SEARCH_INDEX.skills];
    } else if (page === 'adventures') {
        // Adventures page: only adventures
        content = [...SEARCH_INDEX.adventures];
    }

    return content;
}

// Search function with partial matching
function performSearch(query) {
    if (!query || query.trim().length < 2) return [];

    const searchContent = getSearchableContent();
    const terms = query.toLowerCase().trim().split(/\s+/);

    return searchContent.filter(item => {
        const searchText = `${item.title} ${item.description}`.toLowerCase();
        return terms.every(term => searchText.includes(term));
    }).slice(0, 8); // Limit to 8 results
}

// Create search UI
const searchButton = document.querySelector(".search-button");

if (searchButton) {
    // Create search container
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <input type="text" class="search-input" placeholder="${getSearchScope()}" aria-label="Search">
        <div class="search-dropdown"></div>
    `;

    // Insert after nav-right
    const navRight = document.querySelector('.nav-right');
    navRight.insertBefore(searchContainer, searchButton);

    const searchInput = searchContainer.querySelector('.search-input');
    const searchDropdown = searchContainer.querySelector('.search-dropdown');
    let selectedIndex = -1;

    // Toggle search input
    searchButton.addEventListener('click', (e) => {
        e.stopPropagation();
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
            searchInput.focus();
        } else {
            searchInput.value = '';
            searchDropdown.innerHTML = '';
            searchDropdown.classList.remove('active');
        }
    });

    // Render search results
    function renderResults(results, showAll = false) {
        if (results.length === 0) {
            searchDropdown.innerHTML = '<div class="search-empty">No results found</div>';
            searchDropdown.classList.add('active');
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

        searchDropdown.classList.add('active');
        selectedIndex = -1;
    }

    // Live search
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        if (query.trim().length < 2) {
            searchDropdown.innerHTML = '';
            searchDropdown.classList.remove('active');
            return;
        }

        const results = performSearch(query);
        renderResults(results, false);
    });

    // Keyboard navigation
    searchInput.addEventListener('keydown', (e) => {
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
                    const allResults = performSearch(query);
                    renderResults(allResults, true);
                }
            }
        } else if (e.key === 'Escape') {
            searchContainer.classList.remove('active');
            searchInput.value = '';
            searchDropdown.innerHTML = '';
            searchDropdown.classList.remove('active');
        }
    });

    function updateSelection(results) {
        results.forEach((result, index) => {
            if (index === selectedIndex) {
                result.classList.add('selected');
            } else {
                result.classList.remove('selected');
            }
        });
    }

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target) && !searchButton.contains(e.target)) {
            searchContainer.classList.remove('active');
            searchInput.value = '';
            searchDropdown.innerHTML = '';
            searchDropdown.classList.remove('active');
        }
    });

    // Prevent closing when clicking inside dropdown
    searchDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });
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

// Close modal when clicking backdrop
if (videoModalBackdrop) {
    videoModalBackdrop.addEventListener('click', closeVideoModal);
}

// Close modal when clicking close button
if (videoModalClose) {
    videoModalClose.addEventListener('click', closeVideoModal);
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
        closeVideoModal();
    }
});

// Open modal when clicking video card
document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.library-video-image');
    if (!trigger) return;

    const card = trigger.closest('.library-video-card');
    if (!card) return;

    e.preventDefault();

    const videoId = trigger.dataset.videoId;
    if (videoId) {
        openVideoModal(videoId);
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
    return `
        <article class="library-video-card" data-category="${video.category}">
            <a href="#" class="library-video-image" data-video-id="${video.id}">
                <iframe src="${getVideoEmbedUrl(video)}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </a>
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

    // Fetch actual titles and update only if still current
    const enriched = await Promise.all(filtered.map(enrichVideoWithMetadata));
    if (renderToken === currentRenderToken) {
        grid.innerHTML = enriched.map(renderVideoCard).join('');
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