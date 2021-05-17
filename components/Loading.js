import React, { useEffect, useRef, useState } from "react";
import { spin, transform } from "../animations/animations";
import loadingStyles from "../styles/Loading.module.scss";

const Loading = ({ mouseX, mouseY, useLoading=false}) => {
  const [display, setDisplay] = useState("none");
  useEffect(() => {
    setDisplay(useLoading ? "block" : "none");
  }, [useLoading]);
  const starRef = useRef();
  useEffect(() => {
    spin(starRef.current, { duration: 2 });
  }, [starRef]);
  useEffect(() => {
    if (!mouseX || !mouseY) {
      mouseX = window.innerWidth / 2;
      mouseY = window.innerHeight / 2;
    }
    transform(starRef.current, {
      x: mouseX + 5,
      y: mouseY + 5,
    });
  }, [starRef, mouseX, mouseY]);

  return (
    <div
      className={loadingStyles.star}
      ref={starRef}
      style={{ display: display }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 274 264"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
        }}
      >
        <g transform="matrix(1,0,0,1,-56530,-22312)">
          <g transform="matrix(1,0,0,1,49112.3,21673.6)">
            <g transform="matrix(1.08015,0.39197,-0.39197,1.08015,-25183.9,-20471.8)">
              <path
                d="M33088.7,7539.58L33108,7599.01L33158.6,7562.28L33139.3,7621.71L33201.8,7621.71L33151.2,7658.44L33201.8,7695.17L33139.3,7695.17L33158.6,7754.6L33108,7717.87L33088.7,7777.3L33069.4,7717.87L33018.8,7754.6L33038.2,7695.17L32975.7,7695.17L33026.2,7658.44L32975.7,7621.71L33038.2,7621.71L33018.8,7562.28L33069.4,7599.01L33088.7,7539.58Z"
                style={{ fill: "rgb(65, 115, 253" }}
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Loading;
