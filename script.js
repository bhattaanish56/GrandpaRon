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

const searchButton = document.querySelector(".search-button");

if (searchButton) {

    searchButton.addEventListener("click", () => {

        alert("Search will be added later.");

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