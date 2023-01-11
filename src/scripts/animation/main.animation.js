import './estonia-inf.js';
import './partners.js';
import './shadow-circle.js';
import './crypto-exchange.js';
import './app.js';
import './aff-program.js';

export function animationSlideInBottom(htmlText) {
    const text = document.querySelector(`${htmlText}`);
    return (
        gsap.fromTo(text, {
            bottom: -50,
            opacity: 0,
        }, {
            bottom: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: text,
                start: "top 75%",
                end: "bottom 75%",
                scrub: true,
            }
        })
    )
}