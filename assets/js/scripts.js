document.addEventListener("DOMContentLoaded", function () {
    new WOW().init();

    document.querySelectorAll(".select").forEach((element) => {
        new SlimSelect({
            select: element,
            settings: {
                showSearch: false,
            },
        });
    });

    const heroSlider = document.querySelector(".hero-slider");
    if (heroSlider) {
        new Splide(heroSlider, {
            type: "fade",
            rewind: true,
            speed: 1200,
            perPage: 1,
            arrows: false,
            pagination: false,
        }).mount();
    }

    const specializationSlider = document.querySelector(
        ".specializations-slider",
    );
    if (specializationSlider) {
        const isRTL =
            document.documentElement.dir === "rtl" ||
            document.documentElement.lang === "ar";
        new Splide(specializationSlider, {
            type: "loop",
            autoplay: true,
            speed: 1200,
            perPage: 3,
            gap: 20,
            pagination: true,
            arrows: true,
            direction: isRTL ? "rtl" : "ltr",
            breakpoints: {
                1200: {
                    perPage: 3,
                },
                992: {
                    perPage: 2,
                },
                576: {
                    perPage: 1,
                    arrows: false,
                },
            },
        }).mount();
    }

    const testimonialsSlider = document.querySelector(".testimonials-slider");
    if (testimonialsSlider) {
        const isRTL =
            document.documentElement.dir === "rtl" ||
            document.documentElement.lang === "ar";
        new Splide(testimonialsSlider, {
            type: "loop",
            autoplay: true,
            speed: 1200,
            perPage: 4,
            gap: 20,
            pagination: true,
            arrows: false,
            direction: isRTL ? "rtl" : "ltr",
            breakpoints: {
                1200: {
                    perPage: 4,
                },
                992: {
                    perPage: 3,
                },
                768: {
                    perPage: 2,
                },
                576: {
                    perPage: 2,
                },
            },
        }).mount();
    }

    const providersSlider = document.querySelector(".providers-slider");
    if (providersSlider) {
        const isRTL =
            document.documentElement.dir === "rtl" ||
            document.documentElement.lang === "ar";
        new Splide(providersSlider, {
            type: "loop",
            autoplay: true,
            speed: 1200,
            perPage: 6,
            gap: 20,
            pagination: false,
            arrows: false,
            direction: isRTL ? "rtl" : "ltr",
            breakpoints: {
                1200: {
                    perPage: 6,
                },
                992: {
                    perPage: 4,
                },
                576: {
                    perPage: 3,
                },
            },
        }).mount();
    }

    const providersSlider2 = document.querySelector(".providers-slider-2");
    if (providersSlider2) {
        const isRTL =
            document.documentElement.dir === "rtl" ||
            document.documentElement.lang === "ar";
        new Splide(providersSlider2, {
            type: "slide",
            autoplay: true,
            speed: 1200,
            perPage: 3,
            gap: 20,
            pagination: false,
            arrows: false,
            direction: isRTL ? "rtl" : "ltr",
            breakpoints: {
                1200: {
                    perPage: 3,
                },
                992: {
                    perPage: 2,
                },
                576: {
                    perPage: 1,
                },
            },
        }).mount();
    }

    const teamSlider = document.querySelector(".team-slider");
    if (teamSlider) {
        const isRTL =
            document.documentElement.dir === "rtl" ||
            document.documentElement.lang === "ar";

        new Splide(teamSlider, {
            type: "loop",
            autoplay: true,
            speed: 1200,
            perPage: 4,
            gap: 52,
            pagination: true,
            arrows: false,
            direction: isRTL ? "rtl" : "ltr",
            breakpoints: {
                1200: {
                    perPage: 4,
                },
                992: {
                    perPage: 3,
                },
                768: {
                    perPage: 2,
                },
                576: {
                    perPage: 1,
                },
            },
        }).mount();
    }

    const reviewsSlider = document.querySelector(".reviews-slider");
    if (reviewsSlider) {
        const isRTL =
            document.documentElement.dir === "rtl" ||
            document.documentElement.lang === "ar";

        new Splide(reviewsSlider, {
            direction: isRTL ? "rtl" : "ltr",
            pagination: false,
            grid: {
                rows: 2,
                cols: 1,
                gap: {
                    row: "2rem",
                    col: "2rem",
                },
            },
        }).mount(window.splide.Extensions);
    }

    const doctorsSlider = document.querySelector(".doctors-slider");
    if (doctorsSlider) {
        const isRTL =
            document.documentElement.dir === "rtl" ||
            document.documentElement.lang === "ar";

        new Splide(doctorsSlider, {
            direction: isRTL ? "rtl" : "ltr",
            type: "slide",
            autoplay: true,
            speed: 1200,
            perPage: 2,
            gap: 30,
            pagination: true,
            arrows: false,
            breakpoints: {
                768: {
                    perPage: 2,
                },
                576: {
                    perPage: 1,
                },
            },
        }).mount();
    }

    careersSlider = document.querySelector(".careers-slider");
    if (careersSlider) {
        const isRTL =
            document.documentElement.dir === "rtl" ||
            document.documentElement.lang === "ar";

        new Splide(careersSlider, {
            direction: isRTL ? "rtl" : "ltr",
            pagination: true,
            grid: {
                rows: 2,
                cols: 3,
                gap: {
                    row: "2rem",
                    col: "1rem",
                },
            },
            breakpoints: {
                1200: {
                    grid: {
                        rows: 2,
                        cols: 3,
                    },
                },
                768: {
                    grid: {
                        rows: 2,
                        cols: 2,
                    },
                },
                576: {
                    grid: {
                        rows: 2,
                        cols: 1,
                    },
                },
            },
        }).mount(window.splide.Extensions);
    }

    const postSlider = document.querySelector(".post-slider");
    if (postSlider) {
        const isRTL =
            document.documentElement.dir === "rtl" ||
            document.documentElement.lang === "ar";

        new Splide(postSlider, {
            direction: isRTL ? "rtl" : "ltr",
            pagination: true,
            arrows: false,
            grid: {
                rows: 3,
                cols: 1,
                gap: {
                    row: "2rem",
                    col: "2rem",
                },
            },
            breakpoints: {
                1200: {
                    grid: {
                        rows: 3,
                        cols: 1,
                    },
                },
                768: {
                    grid: {
                        rows: 2,
                        cols: 1,
                    },
                },
                576: {
                    grid: {
                        rows: 1,
                        cols: 1,
                    },
                },
            },
        }).mount(window.splide.Extensions);
    }

    const discountSlider = document.querySelector(".discount-slider");
    if (discountSlider) {
        const isRTL =
            document.documentElement.dir === "rtl" ||
            document.documentElement.lang === "ar";
        new Splide(discountSlider, {
            type: "loop",
            autoplay: true,
            speed: 1200,
            perPage: 3,
            gap: 20,
            pagination: true,
            arrows: false,
            direction: isRTL ? "rtl" : "ltr",
            breakpoints: {
                1200: {
                    perPage: 3,
                },
                992: {
                    perPage: 2,
                },
                576: {
                    perPage: 1,
                    arrows: false,
                },
            },
        }).mount();
    }

    const promotionsSlider = document.querySelector(".promotions-slider");
    if (promotionsSlider) {
        const isRTL =
            document.documentElement.dir === "rtl" ||
            document.documentElement.lang === "ar";
        new Splide(promotionsSlider, {
            type: "loop",
            autoplay: true,
            speed: 1200,
            perPage: 1,
            pagination: true,
            arrows: false,
            direction: isRTL ? "rtl" : "ltr",
        }).mount();
    }

    document.querySelectorAll("svg").forEach((svg) => {
        svg.addEventListener("animationend", (event) => {
            event.stopPropagation();
        });
    });

    const counters = document.querySelectorAll(".counter");
    const animateValue = (el, target) => {
        const duration = 2000;
        let startTimestamp = null;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            const current = Math.floor(progress * target);
            el.innerText = current.toLocaleString();

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                el.innerText = target.toLocaleString();
            }
        };
        window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const targetValue = parseFloat(
                        entry.target.getAttribute("data-target"),
                    );

                    if (!isNaN(targetValue)) {
                        animateValue(entry.target, targetValue);
                    }

                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 },
    );

    counters.forEach((el) => {
        const originalValue = el.innerText.replace(/[^\d.]/g, "");

        el.setAttribute("data-target", originalValue);

        el.innerText = "0";

        observer.observe(el);
    });

    if (typeof Fancybox !== "undefined") {
        Fancybox.bind("[data-fancybox]");
    }
    if (typeof flatpickr !== "undefined") {
        const flatpickrElements = document.querySelectorAll(".flatpickr");
        flatpickrElements.forEach((element) => {
            flatpickr(element, {});
        });
    }

    if (typeof flatpickr !== "undefined") {
        if (document.querySelector("#inline-calendar")) {
            flatpickr("#inline-calendar", { inline: true });
        }

        if (document.querySelector('input[type="date"]')) {
            flatpickr('input[type="date"]', { dateFormat: "Y-m-d" });
        }
    }

    // 1. Get elements
    const fileInput = document.getElementById("fileInput");
    const fileNameDisplay = document.getElementById("filename");

    // 2. Check if they exist on the current page
    if (fileInput && fileNameDisplay) {
        // Detect language (from <html lang="ar"> or default to 'en')
        const currentLang = document.documentElement.lang || "en";

        const translations = {
            en: {
                selected: "Selected",
                default: "<strong>Click to upload CV</strong> or drag and drop",
            },
            ar: {
                selected: "تم اختيار",
                default: "<strong>اضغط لرفع السيرة الذاتية</strong> أو اسحب الملف هنا",
            },
        };

        fileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            const lang = translations[currentLang] || translations.en;

            if (file) {
                fileNameDisplay.innerHTML = `${lang.selected}: <strong>${file.name}</strong>`;
            } else {
                fileNameDisplay.innerHTML = lang.default;
            }
        });
    }

    const minSpan = document.getElementById("timer-min");
    const secSpan = document.getElementById("timer-sec");
    const resendText = document.getElementById("resend-text");
    const resendContainer = document.getElementById("resend-container");

    if (secSpan || minSpan) {
        let countdownInterval;

        // Helper to get initial values from the style attribute
        const getValue = (el) =>
            parseInt(el?.style.getPropertyValue("--value")) || 0;
        let totalSeconds = getValue(minSpan) * 60 + getValue(secSpan);

        function handleExpiry() {
            // Add error styling (red text)
            resendContainer?.classList.add("text-error");

            // Transform the plain text into a clickable link
            if (resendText) {
                resendText.innerHTML =
                    '<a href="#" onclick="location.reload()" class="link link-primary">Resend Code</a>';
            }
        }

        function updateTimer() {
            if (totalSeconds <= 0) {
                clearInterval(countdownInterval);

                // Final UI update to exactly 0
                [minSpan, secSpan].forEach((el) => {
                    if (el) {
                        el.style.setProperty("--value", 0);
                        el.innerText = 0;
                    }
                });

                handleExpiry();
                return;
            }

            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;

            // DaisyUI requires updating BOTH the CSS variable and the text content
            if (minSpan) {
                minSpan.style.setProperty("--value", minutes);
                minSpan.innerText = minutes;
            }
            if (secSpan) {
                secSpan.style.setProperty("--value", seconds);
                secSpan.innerText = seconds;
            }

            totalSeconds--;
        }

        function startCountdown() {
            updateTimer();
            countdownInterval = setInterval(updateTimer, 1000);
        }

        startCountdown();
    }
});
