import React, { useEffect, useRef, useState } from "react";
import { animatePreview, transform } from "../animations/animations";
// styles
import previewStyles from "../styles/Preview.module.scss";

const ProjectPreview = ({ imageLink, mouseX, mouseY }) => {
  const [animatedImage, setAnimatedImage] = useState(false);
  const imageRef = useRef();
  useEffect(() => {
    if (imageLink) {
      setAnimatedImage(false);
      transform(imageRef.current, {
        x: mouseX / 2 - imageRef.current.offsetWidth / 2,
        y: mouseY - imageRef.current.offsetHeight / 2,
      });
    } else {
      setAnimatedImage(true);
    }
  }, [imageRef, mouseX, mouseY]);

  useEffect(() => {
    !animatedImage &&
      animatePreview(imageRef.current, {
        skewX: 20,
        skewY: 0,
        duration: 0.5,
      });
    console.log(animatedImage);
  }, [animatedImage]);

  return (
    <>
      {imageLink && (
        <img
          className={previewStyles.preview}
          src={imageLink}
          alt="project preview"
          ref={imageRef}
        />
      )}
    </>
  );
};

export default ProjectPreview;
