document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector("header");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");
    const callButton = document.querySelector(".call-button");

    // CREATE MOBILE MENU BUTTON
    const menuButton = document.createElement("button");

    menuButton.className = "menu-toggle";
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuButton.setAttribute("aria-expanded", "false");

    menuButton.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    navbar.insertBefore(menuButton, callButton);


    // MOBILE MENU OPEN / CLOSE
    menuButton.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("open");

        menuButton.classList.toggle("active");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        document.body.classList.toggle("menu-open", isOpen);

    });


    // CLOSE MENU AFTER CLICKING A LINK
    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");
            menuButton.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove("menu-open");

        });

    });


    // HEADER EFFECT WHILE SCROLLING
    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    // CLOSE MOBILE MENU IF SCREEN BECOMES DESKTOP SIZE
    window.addEventListener("resize", () => {

        if (window.innerWidth > 650) {

            navLinks.classList.remove("open");
            menuButton.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove("menu-open");

        }

    });

});
