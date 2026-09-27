/* =========================================================
   MΛD06 PORTFOLIO
   COMPLETE JAVASCRIPT
   FRONTEND ONLY
   NO PRELOADER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       NAVBAR
    ===================================================== */

    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".menu-btn");
    const navMenu = document.querySelector(".nav-links");

    function updateNavbar() {
        if (!navbar) return;

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    updateNavbar();

    window.addEventListener("scroll", updateNavbar, {
        passive: true
    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", () => {

            navMenu.classList.toggle("mobile-open");
            menuButton.classList.toggle("active");

        });


        const menuLinks =
            navMenu.querySelectorAll("a");

        menuLinks.forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("mobile-open");
                menuButton.classList.remove("active");

            });

        });

    }


    /* =====================================================
       TYPING EFFECT
    ===================================================== */

    const typingElement =
        document.getElementById("typing");

    const roles = [
        "Software Developer",
        "Web Developer",
        "Frontend Developer",
        "UI Enthusiast"
    ];

    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;


    function typingEffect() {

        if (!typingElement) return;

        const currentRole =
            roles[roleIndex];


        if (!deleting) {

            characterIndex++;

            typingElement.textContent =
                currentRole.substring(
                    0,
                    characterIndex
                );


            if (
                characterIndex >=
                currentRole.length
            ) {

                deleting = true;

                setTimeout(
                    typingEffect,
                    1600
                );

                return;
            }


            setTimeout(
                typingEffect,
                75
            );

        } else {

            characterIndex--;

            typingElement.textContent =
                currentRole.substring(
                    0,
                    characterIndex
                );


            if (characterIndex <= 0) {

                characterIndex = 0;
                deleting = false;

                roleIndex++;

                if (
                    roleIndex >=
                    roles.length
                ) {
                    roleIndex = 0;
                }


                setTimeout(
                    typingEffect,
                    350
                );

                return;
            }


            setTimeout(
                typingEffect,
                45
            );
        }
    }


    if (typingElement) {
        typingEffect();
    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if (
        "IntersectionObserver" in window &&
        revealElements.length > 0
    ) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.08,
                    rootMargin:
                        "0px 0px -30px 0px"
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("show");

        });

    }


    /* =====================================================
       INITIAL HERO REVEAL
    ===================================================== */

    setTimeout(() => {

        document
            .querySelectorAll(
                ".hero .reveal"
            )
            .forEach((element, index) => {

                setTimeout(() => {

                    element.classList.add(
                        "show"
                    );

                }, index * 120);

            });

    }, 100);
        /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    function updateActiveNav() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 220;


        sections.forEach(section => {

            const top =
                section.offsetTop;

            const height =
                section.offsetHeight;


            if (
                scrollPosition >= top &&
                scrollPosition <
                    top + height
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            const href =
                link.getAttribute("href");


            if (
                href ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }


    updateActiveNav();


    window.addEventListener(
        "scroll",
        updateActiveNav,
        {
            passive: true
        }
    );


    /* =====================================================
       SMOOTH ANCHOR SCROLL
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetID =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetID ||
                        targetID === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetID
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });


                    if (navMenu) {
                        navMenu.classList.remove(
                            "mobile-open"
                        );
                    }


                    if (menuButton) {
                        menuButton.classList.remove(
                            "active"
                        );
                    }

                }
            );

        });


    /* =====================================================
       CURSOR GLOW
       DESKTOP ONLY
    ===================================================== */

    const cursorGlow =
        document.querySelector(
            ".cursor-glow"
        );


    const desktopPointer =
        window.matchMedia(
            "(pointer: fine)"
        ).matches;


    if (
        cursorGlow &&
        desktopPointer
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let glowX = 0;
        let glowY = 0;


        document.addEventListener(
            "mousemove",
            event => {

                mouseX =
                    event.clientX;

                mouseY =
                    event.clientY;

            },
            {
                passive: true
            }
        );


        function animateCursor() {

            glowX +=
                (mouseX - glowX) * 0.12;

            glowY +=
                (mouseY - glowY) * 0.12;


            cursorGlow.style.transform =
                `translate3d(
                    ${glowX}px,
                    ${glowY}px,
                    0
                )`;


            requestAnimationFrame(
                animateCursor
            );

        }


        requestAnimationFrame(
            animateCursor
        );

    }


    /* =====================================================
       MAGNETIC BUTTONS
    ===================================================== */

    if (desktopPointer) {

        const magneticButtons =
            document.querySelectorAll(
                ".magnetic"
            );


        magneticButtons.forEach(button => {

            button.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        button.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;


                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;


                    button.style.transform =
                        `translate3d(
                            ${x * 0.08}px,
                            ${y * 0.08}px,
                            0
                        )`;

                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    button.style.transform =
                        "translate3d(0,0,0)";

                }
            );

        });

    }


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Escape"
            ) {

                if (navMenu) {

                    navMenu.classList.remove(
                        "mobile-open"
                    );

                }


                if (menuButton) {

                    menuButton.classList.remove(
                        "active"
                    );

                }

            }

        }
    );
        /* =====================================================
       3D PROFILE CARD
       DESKTOP ONLY
    ===================================================== */

    const profileCard =
        document.querySelector(
            ".profile-card"
        );


    if (
        profileCard &&
        desktopPointer
    ) {

        profileCard.addEventListener(
            "mousemove",
            event => {

                const rect =
                    profileCard.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const rotateY =
                    ((x / rect.width) - 0.5) *
                    8;


                const rotateX =
                    ((y / rect.height) - 0.5) *
                    -8;


                profileCard.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            }
        );


        profileCard.addEventListener(
            "mouseleave",
            () => {

                profileCard.style.transform =
                    "perspective(900px) rotateX(0deg) rotateY(0deg)";

            }
        );

    }


    /* =====================================================
       HERO BACKGROUND PARALLAX
    ===================================================== */

    const heroGrid =
        document.querySelector(
            ".hero-grid"
        );


    const heroOrbs =
        document.querySelectorAll(
            ".orb"
        );


    if (
        desktopPointer &&
        (
            heroGrid ||
            heroOrbs.length > 0
        )
    ) {

        let parallaxX = 0;
        let parallaxY = 0;


        document.addEventListener(
            "mousemove",
            event => {

                parallaxX =
                    event.clientX /
                        window.innerWidth -
                    0.5;


                parallaxY =
                    event.clientY /
                        window.innerHeight -
                    0.5;

            },
            {
                passive: true
            }
        );


        function parallaxAnimation() {

            if (heroGrid) {

                heroGrid.style.transform =
                    `translate3d(
                        ${parallaxX * 5}px,
                        ${parallaxY * 5}px,
                        0
                    )`;

            }


            heroOrbs.forEach(
                (orb, index) => {

                    const strength =
                        (index + 1) * 8;


                    orb.style.transform =
                        `translate3d(
                            ${parallaxX * strength}px,
                            ${parallaxY * strength}px,
                            0
                        )`;

                }
            );


            requestAnimationFrame(
                parallaxAnimation
            );

        }


        requestAnimationFrame(
            parallaxAnimation
        );

    }


    /* =====================================================
       SKILL CARD + BAR ANIMATION
    ===================================================== */

    const skillCards =
        document.querySelectorAll(
            ".skill-card"
        );


    if (
        "IntersectionObserver" in window &&
        skillCards.length > 0
    ) {

        const skillObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "show"
                                );


                                skillObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        skillCards.forEach(card => {

            skillObserver.observe(card);

        });

    } else {

        skillCards.forEach(card => {

            card.classList.add("show");

        });

    }


    /* =====================================================
       SKILL BAR FALLBACK
       Makes sure bars animate even if observer
       does not trigger correctly.
    ===================================================== */

    const skillBars =
        document.querySelectorAll(
            ".skill-bar span"
        );


    if (
        "IntersectionObserver" in window &&
        skillBars.length > 0
    ) {

        const barObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                const bar =
                                    entry.target;


                                const skill =
                                    bar.style
                                        .getPropertyValue(
                                            "--skill"
                                        );


                                if (skill) {

                                    setTimeout(
                                        () => {

                                            bar.style.width =
                                                skill;

                                        },
                                        150
                                    );

                                }


                                barObserver.unobserve(
                                    bar
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.2
                }
            );


        skillBars.forEach(bar => {

            barObserver.observe(bar);

        });

    }


    /* =====================================================
       PROJECT CARD HOVER
    ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    if (desktopPointer) {

        projectCards.forEach(card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const rotateY =
                        ((x / rect.width) - 0.5) *
                        4;


                    const rotateX =
                        ((y / rect.height) - 0.5) *
                        -4;


                    card.style.transform =
                        `perspective(800px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-6px)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)";

                }
            );

        });

    }
    /* =====================================================
       CONTACT FORM
       GMAIL COMPOSE
       FRONTEND ONLY
    ===================================================== */

    const contactForm =
        document.querySelector(
            "#contactForm"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    document
                        .querySelector("#name")
                        ?.value
                        .trim() || "";


                const email =
                    document
                        .querySelector("#email")
                        ?.value
                        .trim() || "";


                const subject =
                    document
                        .querySelector("#subject")
                        ?.value
                        .trim() || "";


                const message =
                    document
                        .querySelector("#message")
                        ?.value
                        .trim() || "";


                if (
                    !name ||
                    !email ||
                    !subject ||
                    !message
                ) {

                    alert(
                        "Please fill in all fields."
                    );

                    return;

                }


                const receiver =
                    "madhesh10806@gmail.com";


                const emailBody =
`Hello Madhesh,

You received a new message from your MΛD06 portfolio.

Name: ${name}
Email: ${email}

Message:
${message}

------------------------------
Sent from MΛD06 Portfolio
`;


                const gmailURL =
                    "https://mail.google.com/mail/?view=cm" +
                    "&fs=1" +
                    "&to=" +
                    encodeURIComponent(
                        receiver
                    ) +
                    "&su=" +
                    encodeURIComponent(
                        subject
                    ) +
                    "&body=" +
                    encodeURIComponent(
                        emailBody
                    );


                window.open(
                    gmailURL,
                    "_blank"
                );


                setTimeout(
                    () => {
                        contactForm.reset();
                    },
                    500
                );

            }
        );

    }


    /* =====================================================
       BUTTON RIPPLE EFFECT
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".primary-btn, .secondary-btn, .nav-button"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                const ripple =
                    document.createElement(
                        "span"
                    );


                ripple.classList.add(
                    "button-ripple"
                );


                const rect =
                    button.getBoundingClientRect();


                ripple.style.left =
                    `${event.clientX - rect.left}px`;


                ripple.style.top =
                    `${event.clientY - rect.top}px`;


                button.appendChild(
                    ripple
                );


                setTimeout(
                    () => {

                        ripple.remove();

                    },
                    600
                );

            }
        );

    });


    /* =====================================================
       CARD STAGGER ANIMATION
    ===================================================== */

    const staggerGroups = [
        ".about-card",
        ".skill-card",
        ".project-card",
        ".timeline-card",
        ".experience-card"
    ];


    staggerGroups.forEach(selector => {

        const cards =
            document.querySelectorAll(
                selector
            );


        cards.forEach(
            (card, index) => {

                card.style.transitionDelay =
                    `${index * 0.08}s`;

            }
        );

    });


    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    const progressBar =
        document.querySelector(
            ".scroll-progress"
        );


    if (progressBar) {

        function updateProgress() {

            const scrollTop =
                window.scrollY;


            const documentHeight =
                document.documentElement
                    .scrollHeight -
                window.innerHeight;


            let progress = 0;


            if (documentHeight > 0) {

                progress =
                    (scrollTop /
                        documentHeight) *
                    100;

            }


            progressBar.style.width =
                `${progress}%`;

        }


        updateProgress();


        window.addEventListener(
            "scroll",
            updateProgress,
            {
                passive: true
            }
        );

    }


    /* =====================================================
       REDUCED MOTION CHECK
    ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducedMotion) {

        document
            .querySelectorAll(
                ".reveal"
            )
            .forEach(element => {

                element.classList.add(
                    "show"
                );

            });

    }


    /* =====================================================
       FINAL INITIALIZATION
    ===================================================== */

    document.body.classList.add(
        "js-ready"
    );


    console.log(
        "MΛD06 Portfolio JavaScript loaded successfully."
    );

});
