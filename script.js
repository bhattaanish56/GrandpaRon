/* ================= VIDEO CONFIGURATION ================= */
/* EDITABLE: Update these YouTube video IDs to change site videos */
const VIDEOS = {
    featured: 'iys_pmJSp9M',
    fishing: '6FJ-kY7TNA0',
    camping: 'nQdXp6HKKik',
    hunting: 'ZgSdKNi6LTU',
    fire: 'U_LlX4t0A9I',
    extra1: 'FtdIcmgfy_w',
    extra2: 'p9yaDeStS7A'
};

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