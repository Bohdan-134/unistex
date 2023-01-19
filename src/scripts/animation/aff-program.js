import { animationSlideInBottom, animationOpacity } from './main.animation.js';
gsap.registerPlugin(ScrollTrigger);

animationSlideInBottom('.aff-program .container .aff-program__content .aff-program__title');
animationSlideInBottom('.aff-program .container .aff-program__content .aff-program__text');
animationSlideInBottom('.aff-program .container .aff-program__content .aff-program__btn');

animationOpacity('.aff-program__right-bg', '.aff-program');
animationOpacity('.aff-program__right-bg-shadow', '.aff-program');
animationOpacity('.aff-program__left-bg', '.aff-program');