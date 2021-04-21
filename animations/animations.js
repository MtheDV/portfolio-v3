import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const spin = (target, {amount, duration, repeat}) => {
  gsap.to(target, {
    rotate: amount || 360,
    duration: duration || 1,
    ease: 'none',
    repeat: repeat || -1,
    transformOrigin: "50% 50%"
  });
};

export const eachShrink = (targets, amount) => {
  const values = document.getElementsByClassName(targets);
  for (let value of values) {
    let playable = true;
    let timeline = gsap.timeline({paused: true, onComplete: args => {playable = true}});
    timeline.to(value, {
      scale: amount,
      duration: 0.15,
      transformOrigin: "50% 50%"
    }).to(value, {
      scale: 1,
      duration: 0.5,
      transformOrigin: "50% 50%"
    });
    value.addEventListener('mouseover', () => {
      playable ? timeline.restart() : null;
      playable = false;
    });
  }
};