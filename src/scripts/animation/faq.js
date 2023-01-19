import { animationSlideInBottom } from './main.animation.js';

gsap.registerPlugin(ScrollTrigger);

const elements = gsap.utils.toArray('.faq-accordeon-list .accordeon-item');

animationSlideInBottom('.faq__title');

elements.forEach(element => {
    gsap.fromTo(element, {
        bottom: -50,
        opacity: 0,
    }, {
        bottom: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: element,
            start: "top 75%",
            end: "bottom 75%",
            scrub: true,
        }
    })
})