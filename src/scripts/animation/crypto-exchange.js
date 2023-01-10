gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".crypto-exchange__bg5", {
    scale: 1.5,
    rotate: 20,
}, {
    scale: 1,
    rotate: 0,
    scrollTrigger: {
        trigger: ".crypto-exchange",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
    }
});