import { animationSlideInBottom } from './main.animation.js';
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".app-line-decor", {
    width: 0,
}, {
    width: 1100,
    scrollTrigger: {
        trigger: ".app",
        start: "80% 90%",
        end: "95% 90%",
        scrub: true,
    },
});



animationSlideInBottom('.app .container .app-content .app__title');
animationSlideInBottom('.app .container .app-content .app__text');
animationSlideInBottom('.app .container .app-content .app__text-last');
animationSlideInBottom('.app .container .app-content #downloud-btn');