gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".crypto-exchange__bg5", {
    scale: 2,
    rotate: 30,
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