import React, { useEffect, useRef } from "react";
import Link from "next/link";
// styles
import headerStyles from "../styles/Header.module.scss";
import gridStyles from "../styles/Grid.module.scss";
import { useRouter } from "next/router";
import Background from "./Background";
import { animateHeader } from "../animations/animations";

const Header = ({ mouseX, mouseY }) => {
  const lineRef = useRef();
  useEffect(() => {
    animateHeader([lineRef.current]);
  }, [lineRef]);

  const router = useRouter();
  const clickNav = (event, type) => {
    event.preventDefault();
    router.push("/").then(() => {
      const scrollY = document.getElementById(type).offsetTop;
      window.scrollTo({ top: scrollY - 125, behavior: "smooth" });
    });
  };

  return (
    <section className={`${gridStyles.container} ${headerStyles.fixed}`}>
      <Background mouseX={mouseX} mouseY={mouseY} />
      <header className={headerStyles.header} aria-label="header">
        <Link href="/">
          <a className={headerStyles.header__home}>
            <img src="/assets/images/smile.svg" alt="logo" />
          </a>
        </Link>
        <nav aria-label="navigation">
          <Link href="/#works">
            <a onClick={(event) => clickNav(event, "works")}>works.</a>
          </Link>
          <Link href="/#about">
            <a onClick={(event) => clickNav(event, "about")}>about me.</a>
          </Link>
          <Link href="/#contact">
            <a onClick={(event) => clickNav(event, "contact")}>contact.</a>
          </Link>
        </nav>
      </header>
      <div className={headerStyles.line} ref={lineRef} />
    </section>
  );
};

export default Header;
