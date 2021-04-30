import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
// styles
import headerStyles from "../styles/Header.module.scss";
import gridStyles from "../styles/Grid.module.scss";
import { useRouter } from "next/router";
import { animateHeader, appearTray } from "../animations/animations";

const Header = () => {
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
      setShowTray(false);
    });
  };

  const [showTray, setShowTray] = useState(false);
  const trayRef = useRef();
  const clickTray = (event, value) => {
    setShowTray(value);
  };
  useEffect(() => {
    appearTray(trayRef.current, { direction: showTray });
  }, [showTray]);

  return (
    <>
      <section className={`${gridStyles.container} ${headerStyles.fixed}`}>
        <header className={headerStyles.header} aria-label="header">
          <Link href="/">
            <a className={headerStyles.header_home}>
              <img src="/assets/images/smile.svg" alt="logo" />
            </a>
          </Link>
          <button
            className={headerStyles.header_tray_button}
            aria-label={"tray action"}
            onClick={event => clickTray(event, true)}
          >
            <img src="/assets/images/tray.svg" alt="tray" />
          </button>
          <nav className={headerStyles.header_nav} aria-label="navigation">
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
      <section
        className={`${gridStyles.container} ${headerStyles.tray}`}
        ref={trayRef}
      >
        <div className={headerStyles.tray_top}>
        <img src="/assets/images/smile.svg" alt="logo" />
        <button
          className={headerStyles.tray_button}
          aria-label={"tray action"}
          onClick={event => clickTray(event, false)}
        >
          <img
            src="/assets/images/exit_tray.svg"
            alt="exit"
          />
        </button>
        </div>
        <div className={headerStyles.line} ref={lineRef} />
        <nav className={headerStyles.tray_nav} aria-label="navigation">
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
      </section>
    </>
  );
};

export default Header;
