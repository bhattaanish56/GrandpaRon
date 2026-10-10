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


/* ================= VIDEO MODAL ================= */

function createVideoModal() {
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
        <div class="video-modal-overlay"></div>
        <div class="video-modal-content">
            <button class="video-modal-close" aria-label="Close video">&times;</button>
            <div class="video-modal-player"></div>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

function openVideoModal(videoId) {
    let modal = document.querySelector('.video-modal');
    if (!modal) {
        modal = createVideoModal();
    }

    const player = modal.querySelector('.video-modal-player');
    player.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        player.innerHTML = '';
    };

    modal.querySelector('.video-modal-close').onclick = closeModal;
    modal.querySelector('.video-modal-overlay').onclick = closeModal;
}

// Attach video modal to all video triggers
document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-video-id]');
    if (trigger) {
        e.preventDefault();
        const videoId = trigger.dataset.videoId;
        openVideoModal(videoId);
    }
});