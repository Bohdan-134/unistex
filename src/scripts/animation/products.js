import { animationSlideInBottom, animationOpacity } from './main.animation.js'
gsap.registerPlugin(ScrollTrigger);

animationSlideInTop('.bitcoin-title');
animationSlideInTop('.bitcoin-text');
animationSlideInTop('.bitcoin__strong-text');
animationSlideInTop('.container.product-container__bitcoin button');



animationOpacity('.product-back-img', '.products-container__purpose');

gsap.to(".container-perspective", {
    rotateX: '0deg',
    scrollTrigger: {
        trigger: ".products-container__purpose",
        start: "top center",
        end: "center center",
        scrub: true,
    }
});

gsap.from(".products-line", {
    scale: 0,
    scrollTrigger: {
        trigger: ".products-line",
        start: "top bottom",
        end: "bottom 75%",
        scrub: true,
    }
});

function animationSlideInTop(htmlElement) {
    const element = document.querySelector(`${htmlElement}`);
    return (
        gsap.from(element, {
            top: -50,
            opacity: 0,
            scrollTrigger: {
                trigger: element,
                start: "top 70%",
                end: "bottom 70%",
                scrub: true,
            }
        })
    )
}