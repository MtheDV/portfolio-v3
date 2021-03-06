import React, { useEffect, useRef } from "react";
// animations
import { glidingText } from "../animations/animations";
// styles
import bannerStyles from "../styles/ScrollBanner.module.scss";
import gridStyles from "../styles/Grid.module.scss";

const ScrollBanner = ({ text }) => {
  const checkRef = useRef();
  useEffect(() => {
    glidingText(checkRef.current, { distance: -15, duration: 3 });
  }, [checkRef]);

  return (
    <section
      className={`${gridStyles.container} ${bannerStyles.hide_overflow}`}
    >
      <div className={bannerStyles.section} ref={checkRef}>
        <h2>{text}</h2>
        <h2>{text}</h2>
        <h2>{text}</h2>
        <h2>{text}</h2>
        <h2>{text}</h2>
        <h2>{text}</h2>
      </div>
    </section>
  );
};

export default ScrollBanner;
