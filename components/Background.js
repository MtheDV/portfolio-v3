import React, { useEffect, useRef, useState } from "react";
// styles
import backgroundStyles from "../styles/Background.module.scss";
import { transform, animateBackground } from "../animations/animations";

const Background = ({ mouseX, mouseY }) => {
  const orbRef = useRef();
  useEffect(() => {
    if (!mouseX || !mouseY) {
      mouseX = window.innerWidth / 2;
      mouseY = window.innerHeight / 2;
    }
    transform(orbRef.current, {
      x: mouseX - orbRef.current.offsetWidth / 2,
      y: mouseY - orbRef.current.offsetHeight / 2,
    });
  }, [orbRef, mouseX, mouseY]);

  return (
    <div className={backgroundStyles.background}>
      <div className={backgroundStyles.orb} ref={orbRef} />
    </div>
  );
};

export default Background;
