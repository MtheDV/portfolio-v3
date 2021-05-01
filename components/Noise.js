import React, { useEffect, useRef } from "react";
// styles
import noiseStyles from "../styles/Noise.module.scss";
// animations
import { moveNoise } from "../animations/animations";

const Noise = () => {
  const noiseRef = useRef();
  useEffect(() => {
    moveNoise(noiseRef.current);
  }, [noiseRef]);

  return <div className={noiseStyles.noise} ref={noiseRef} />;
};

export default Noise;