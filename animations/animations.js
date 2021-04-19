import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const spin = (target, {amount, duration, repeat}) => {
  gsap.to(target, {
    rotate: amount || 360,
    duration: duration || 1,
    ease: 'none',
    repeat: repeat || -1
  });
};