# script.js

```javascript
/* ========================================
   MENU MOBILE
======================================== */

const menuButton = document.getElementById("menu-button");

const mobileMenu = document.getElementById("mobile-menu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

});


/* ========================================
   FECHAR MENU MOBILE
   AO CLICAR EM UM LINK
======================================== */

const mobileLinks =
    document.querySelectorAll(".mobile-link");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

    });

});


/* ========================================
   HEADER AO ROLAR A PÁGINA
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
   ANIMAÇÃO DAS SEÇÕES
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
            threshold: 0.15
        }
    );


/* ========================================
   ELEMENTOS PARA ANIMAÇÃO
======================================== */

const elements =
    document.querySelectorAll(
        ".section-title, .skill-card, .experience-item, .project-card"
    );


elements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* ========================================
   ANO AUTOMÁTICO NO FOOTER
======================================== */

const currentYear =
    new Date().getFullYear();

const footerYear =
    document.querySelector(".footer-year");


if (footerYear) {

    footerYear.textContent = currentYear;

}


/* ========================================
   EFEITO DE DIGITAÇÃO
======================================== */

const typingElement =
    document.querySelector(".typing");


if (typingElement) {

    const texts = [
        "Desenvolvedor Java.",
        "Desenvolvedor Web.",
        "Entusiasta de IA.",
        "Criador de soluções."
    ];

    let textIndex = 0;

    let characterIndex = 0;

    let deleting = false;


    function typeEffect() {

        const currentText =
            texts[textIndex];


        if (!deleting) {

            typingElement.textContent =
                currentText.substring(
                    0,
                    characterIndex + 1
                );

            characterIndex++;


            if (characterIndex === currentText.length) {

                deleting = true;

                setTimeout(typeEffect, 1800);

                return;

            }

        } else {

            typingElement.textContent =
                currentText.substring(
                    0,
                    characterIndex - 1
                );

            characterIndex--;


            if (characterIndex === 0) {

                deleting = false;

                textIndex =
                    (textIndex + 1) % texts.length;

            }

        }


        setTimeout(
            typeEffect,
            deleting ? 50 : 90
        );

    }


    typeEffect();

}


/* ========================================
   LINKS INTERNOS
======================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId === "#" ||
                !targetId
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });
```
