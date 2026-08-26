/* ========================================
   MOBILE MENU
======================================== */

const menuButton = document.getElementById("menu-button");

const mobileMenu = document.getElementById("mobile-menu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

});


/* ========================================
   CLOSE MOBILE MENU ON LINK CLICK
======================================== */

const mobileLinks =
    document.querySelectorAll(".mobile-link");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

    });

});


/* ========================================
   HEADER ON SCROLL
======================================== */

const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("header-scrolled");

    } else {

        header.classList.remove("header-scrolled");

    }

});


/* ========================================
   SECTION REVEAL ANIMATION
======================================== */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },
        {
            threshold: 0.1
        }
    );

const reveals =
    document.querySelectorAll(".reveal");

reveals.forEach(element => {

    observer.observe(element);

});