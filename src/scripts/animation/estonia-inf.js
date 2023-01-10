gsap.registerPlugin(ScrollTrigger);



gsap.from('.estonia-inf__text', {
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".estonia-inf",
        start: "top center",
        end: "center center",
        scrub: true,
    }
});

gsap.from('.estonia-inf .btn-registration', {
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".estonia-inf",
        start: "center bottom",
        end: "bottom bottom",
        scrub: true,
    }
});