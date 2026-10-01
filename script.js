/* ================= NAVIGATION ================= */

const navbar = document.getElementById("navbar");

function handleNavbar() {

    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", handleNavbar);

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