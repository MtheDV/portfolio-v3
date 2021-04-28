import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const spin = (target, { amount, duration, repeat }) => {
  gsap.to(target, {
    rotate: amount || 360,
    duration: duration || 1,
    ease: "none",
    repeat: repeat || -1,
    transformOrigin: "50% 50%",
  });
};

export const transform = (target, { x, y }) => {
  gsap.timeline().to(target, {
    x: x,
    y: y,
    transformOrigin: "50% 50%",
  });
};

export const opacity = (target, { final, duration }) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: target,
        start: () => "center bottom",
        end: () => "center top",
        scrub: true,
      },
    })
    .fromTo(
      target,
      {
        opacity: 1 - final,
      },
      {
        opacity: final,
        duration: duration,
        delay: 2,
        ease: "none",
      }
    );
};

export const glidingText = (target, { distance, duration }) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: target,
        start: () => "top bottom",
        end: () => "bottom top",
        scrub: true,
        invalidateOnRefresh: false,
      },
    })
    .to(target, {
      x: `${distance}rem`,
      duration: duration,
      ease: "slow",
    });
};

export const animatePreview = (target, { skewX, skewY, duration }) => {
  gsap.timeline().fromTo(
    target,
    {
      opacity: 0,
      skewX: skewX,
      skewY: skewY,
    },
    {
      opacity: 1,
      skewX: 0,
      skewY: 0,
      duration: duration,
      ease: "back",
    }
  );
};

export const appearFromBottom = (target, { duration }) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: target,
        start: () => "top-=300 bottom",
        end: () => "top-=300 top",
        toggleActions: "play none none reset",
      },
    })
    .from(target, {
      opacity: 0,
      skewY: 10,
      y: target.offsetHeight * 2,
      duration: duration,
    });
};

export const animateBackground = (target, { gradient1, gradient2 }) => {
  gsap.fromTo(
    target,
    { backgroundImage: gradient1 },
    {
      backgroundImage: gradient2,
      repeat: -1,
      yoyo: true,
      duration: 0,
      ease: "elastic",
    }
  );
};

export const eachShrink = (targets, amount) => {
  const values = document.getElementsByClassName(targets);
  for (let value of values) {
    let playable = true;
    let timelineShrink = gsap.timeline({
      paused: true,
      onComplete: (args) => {
        playable = true;
      },
    });
    timelineShrink
      .to(value, {
        scale: amount,
        rotation: Math.random() < 0.5 ? -20 : 20,
        duration: 0.15,
        transformOrigin: "50% 50%",
      })
      .to(value, {
        scale: 1,
        rotation: 0,
        duration: 0.5,
        transformOrigin: "50% 50%",
      });
    value.addEventListener("mouseover", () => {
      playable ? timelineShrink.restart() : null;
      playable = false;
    });
    let timelineScroll = gsap.timeline({
      scrollTrigger: {
        trigger: value,
        start: () => "center 25%",
        end: () => "center top",
        scrub: true,
      },
    });
    timelineScroll.to(value, {
      y: -1 * Math.random() * 0.25 - 0.25,
      duration: 2,
      ease: "none",
    });
  }
};

export const scrollThroughWorks = (targets) => {
  for (let child of targets.children) {
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: child,
        start: () => "center bottom",
        end: () => "center top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    timeline
      .fromTo(
        child,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .to(child, {
        opacity: 0,
        delay: 1,
      });
  }
};
