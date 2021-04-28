import React, { useEffect, useRef, useState } from "react";
import { animatePreview, transform } from "../animations/animations";
// styles
import previewStyles from "../styles/Preview.module.scss";

const ProjectPreview = ({ imageLink, mouseX, mouseY, showPreview }) => {
  const imageRef = useRef();
  useEffect(() => {
    if (imageLink) {
      transform(imageRef.current, {
        x: mouseX / 2 - imageRef.current.offsetWidth / 2,
        y: mouseY - imageRef.current.offsetHeight / 2,
      });
    }
  }, [imageRef, mouseX, mouseY]);

  useEffect(() => {
    showPreview &&
      animatePreview(imageRef.current, {
        skewX: 20,
        skewY: 0,
        duration: 0.5,
      });
  }, [showPreview]);

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
