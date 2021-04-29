import React, { useEffect, useRef } from "react";
import Link from "next/link";
// styles
import gridStyles from "../styles/Grid.module.scss";
import footerStyles from "../styles/Footer.module.scss";
import { lineAppear } from "../animations/animations";

const Footer = () => {
  const lineRef = useRef();
  useEffect(() => {
    lineAppear(lineRef.current, { duration: 1, delay: 0.75 });
  }, [lineRef]);

  return (
    <footer className={gridStyles.container} id={"footer"}>
      <div className={footerStyles.line} ref={lineRef} />
      <Link href={"/"}>
        <a className={footerStyles.smile}>
          <span>&#169; Mathew de Vin</span>
          <img src="/assets/images/smile.svg" alt="logo" />
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
