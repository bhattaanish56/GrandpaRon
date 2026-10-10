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