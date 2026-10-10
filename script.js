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

document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.library-video-image');
    if (!trigger) return;

    const card = trigger.closest('.library-video-card');
    if (!card) return;

    e.preventDefault();

    // Remove selected class and autoplay from all other cards
    document.querySelectorAll('.library-video-card.selected').forEach((c) => {
        if (c === card) return;
        c.classList.remove('selected');
        const oldIframe = c.querySelector('iframe');
        if (oldIframe) {
            let src = oldIframe.src;
            src = src.replace(/[?&]autoplay=1/g, '').replace(/[?&]mute=1/g, '');
            src = src.replace(/[?&]+$/, '');
            oldIframe.src = src;
        }
    });

    // Add selected class to clicked card and enable autoplay on its iframe
    card.classList.add('selected');
    const iframe = card.querySelector('iframe');
    if (iframe && !iframe.src.includes('autoplay=1')) {
        iframe.src += (iframe.src.includes('?') ? '&' : '?') + 'autoplay=1&mute=1';
    }
});