gsap.registerPlugin(ScrollTrigger);

function animationCircleGsap(parentsElement, positionTrigger) {
    const circle = document.querySelector(`${parentsElement} .shadow_circle`);
    return (
        gsap.fromTo(circle, {
            opacity: 0,
            scale: 0,
        }, {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
                trigger: parentsElement,
                start: `top ${positionTrigger}`,
                end: `bottom ${positionTrigger}`,
                scrub: true,
            }
        })
    )
}

animationCircleGsap('.estonia-inf', 'center');
animationCircleGsap('.crypto-exchange', 'bottom');
animationCircleGsap('.app', 'bottom');