import { animationSlideInBottom, animationOpacity } from './main.animation.js';

gsap.registerPlugin(ScrollTrigger);

animationSlideInBottom('.estonia-inf__text');
animationSlideInBottom('.estonia-inf .btn-registration');

animationOpacity('.estonia-inf img', '.estonia-inf')