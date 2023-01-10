
gsap.registerPlugin(ScrollTrigger);gsap.fromTo(".partners__list",{x:()=>'-100%',},{x:()=>'20%',scrollTrigger:{trigger:".partners",start:"top center",end:"150% center",scrub:true,}});