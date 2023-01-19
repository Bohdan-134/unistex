import './estonia-inf.js';
import './partners.js';
import './shadow-circle.js';
import './crypto-exchange.js';
import './app.js';
import './aff-program.js';
import './products.js'
import './ads.js';
import './faq.js';

export function animationSlideInBottom(htmlElement) {
    const element = document.querySelector(`${htmlElement}`);
    return (
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
    )
}

export function animationOpacity(srcElement, srcElementParent) {
    const element = document.querySelector(`${srcElement}`);
    const elementParent = document.querySelector(`${srcElementParent}`)
    return (
        gsap.from(element, {
            opacity: 0,
            scrollTrigger: {
                trigger: elementParent,
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        })
    )
}