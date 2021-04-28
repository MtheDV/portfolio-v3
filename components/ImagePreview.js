import React, { useEffect, useRef } from "react";
import { animatePreview, transform } from "../animations/animations";
// styles
import previewStyles from "../styles/Preview.module.scss";

const ImagePreview = ({ imageLink, mouseX, mouseY, showPreview, rightSide }) => {
  const imageRef = useRef();
  useEffect(() => {
    if (imageLink) {
      const x = mouseX / 4 + (rightSide ? window.innerWidth / 2 : 0);
      const y = mouseY - imageRef.current.offsetHeight / 2;
      transform(imageRef.current, {
        x,
        y,
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

export default ImagePreview;
