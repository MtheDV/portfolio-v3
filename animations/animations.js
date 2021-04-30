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

export const lineAppear = (target, { duration, delay }) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: target,
        start: "center bottom",
        end: "center top",
      },
    })
    .fromTo(target, {
      width: 0,
    }, {
      width: "100vw",
      duration: duration,
      delay: delay,
    });
};

export const animateHeader = (targets) => {
  let timeline = gsap.timeline().fromTo(targets[0], {
    width: 0,
  }, {
    width: "100vw",
    duration: 0.5,
  });
  timeline.pause();

  ScrollTrigger.create({
    trigger: "#landing",
    start: "20 bottom",
    end: "20 top",
    invalidateOnRefresh: true,
    autoRefreshEvents: "DOMContentLoaded,load",
    onLeave: () => {
      timeline.play();
    },
    onEnterBack: () => {
      timeline.reverse();
    },
  });
};

export const appearTray = (target, { direction }) => {
  if (direction) {
    gsap.timeline().to(target, {
      x: 0,
      duration: 0.5,
    });
  } else {
    gsap.timeline().to(target, {
      x: target.offsetWidth,
      duration: 0.5,
    });
  }
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

export const appearFromBottom = (target, { duration, y }) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: target,
        start: () => "top bottom",
        end: () => "top top",
      },
    })
    .from(target, {
      opacity: 0,
      skewY: 10,
      y: y || target.offsetHeight * 1.5,
      duration: duration,
    });
};

export const eachAppear = (targets, {duration}) => {
  const values = document.getElementsByClassName(targets);
  for (let value of values) {
    gsap.timeline()
      .to(value, {
        opacity: 1,
        duration: duration,
        delay: 0.75,
      });
  }
}

export const eachShrink = (targets, amount) => {
  const values = document.getElementsByClassName(targets);
  for (let value of values) {
    let playable = true;
    let timelineShrink = gsap.timeline({
      paused: true,
      onComplete: () => {
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
        start: () => "bottom top+=300",
        end: () => "bottom top",
        invalidateOnRefresh: false,
        scrub: true,
      },
    });
    timelineScroll.to(value, {
      y: -1 * Math.random() * 0.25 - 0.25,
      skewY: -10,
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
