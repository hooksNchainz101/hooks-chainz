document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       HEADER
       ========================================= */

    const header =
        document.querySelector("header");

    function updateHeader() {

        if (!header) return;

        header.classList.toggle(
            "scrolled",
            window.scrollY > 25
        );

    }

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    /* =========================================
       MOBILE NAVIGATION
       ========================================= */

    const navbar =
        document.querySelector(".navbar");

    const navLinks =
        document.querySelector(".nav-links");

    if (navbar && navLinks) {

        const menuButton =
            document.createElement("button");

        menuButton.className =
            "menu-toggle";

        menuButton.type =
            "button";

        menuButton.setAttribute(
            "aria-label",
            "Open menu"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        const navCTA =
            document.querySelector(".nav-cta");

        if (navCTA) {

            navbar.insertBefore(
                menuButton,
                navCTA
            );

        } else {

            navbar.appendChild(
                menuButton
            );

        }


        function closeMenu() {

            navLinks.classList.remove(
                "open"
            );

            menuButton.classList.remove(
                "active"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        }


        menuButton.addEventListener(
            "click",
            () => {

                const open =
                    navLinks.classList.toggle(
                        "open"
                    );

                menuButton.classList.toggle(
                    "active",
                    open
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    String(open)
                );

                document.body.classList.toggle(
                    "menu-open",
                    open
                );

            }
        );


        navLinks
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    closeMenu
                );

            });


        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeMenu();

                }

            }
        );


        window.addEventListener(
            "resize",
            () => {

                if (
                    window.innerWidth > 780
                ) {

                    closeMenu();

                }

            }
        );

    }


    /* =========================================
       ACTIVE PAGE
       ========================================= */

    const page =
        window.location.pathname
            .split("/")
            .pop() ||
        "index.html";

    document
        .querySelectorAll(
            ".nav-links a"
        )
        .forEach(link => {

            const target =
                link
                    .getAttribute("href")
                    ?.split("/")
                    .pop();

            if (
                target === page
            ) {

                link.classList.add(
                    "active-page"
                );

            }

        });


    /* =========================================
       INTRO VIDEO
       ========================================= */

    const videoModal =
        document.getElementById(
            "videoModal"
        );

    const videoClose =
        document.getElementById(
            "videoClose"
        );

    const introVideo =
        document.getElementById(
            "introVideo"
        );

    const soundButton =
        document.getElementById(
            "soundButton"
        );

    const videoTowButton =
        document.getElementById(
            "videoTowButton"
        );


    function closeVideo() {

        if (!videoModal) return;

        videoModal.classList.remove(
            "open"
        );

        document.body.classList.remove(
            "modal-open"
        );

        if (introVideo) {

            introVideo.pause();

        }

    }


    if (
        videoModal &&
        window.location.pathname
            .endsWith("index.html") ||
        (
            videoModal &&
            window.location.pathname
                .endsWith("/")
        )
    ) {

        window.setTimeout(
            () => {

                videoModal.classList.add(
                    "open"
                );

                document.body.classList.add(
                    "modal-open"
                );

            },
            450
        );

    }


    if (videoClose) {

        videoClose.addEventListener(
            "click",
            closeVideo
        );

    }


    if (videoTowButton) {

        videoTowButton.addEventListener(
            "click",
            closeVideo
        );

    }


    if (
        soundButton &&
        introVideo
    ) {

        soundButton.addEventListener(
            "click",
            () => {

                introVideo.muted =
                    !introVideo.muted;

                soundButton.textContent =
                    introVideo.muted
                        ? "Turn Sound On"
                        : "Mute Video";

                if (
                    introVideo.paused
                ) {

                    introVideo.play()
                        .catch(() => {});

                }

            }
        );

    }


    /* =========================================
       SMOOTH SCROLL
       ========================================= */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const href =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        !href ||
                        href === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(
                            href
                        );

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior:
                            "smooth",
                        block:
                            "start"
                    });

                }
            );

        });


    /* =========================================
       TOW FORM
       FRONT-END PREVIEW ONLY
       ========================================= */

    const towForm =
        document.getElementById(
            "towForm"
        );

    const formMessage =
        document.getElementById(
            "formMessage"
        );

    if (towForm) {

        towForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                if (
                    !towForm.checkValidity()
                ) {

                    towForm.reportValidity();

                    return;
                }

                if (formMessage) {

                    formMessage.className =
                        "form-message show success";

                    formMessage.textContent =
                        "Tow-slip form is complete. Secure submission will be enabled when the private insurance intake system is connected.";

                }

            }
        );

    }


    /* =========================================
       COPYRIGHT
       ========================================= */

    const copyright =
        document.getElementById(
            "copyright"
        );

    if (copyright) {

        copyright.textContent =
            `© ${new Date().getFullYear()} Hooks and Chains. All Rights Reserved.`;

    }

});
