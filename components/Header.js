import React from "react";
import Link from "next/link";
// styles
import headerStyles from "../styles/Header.module.scss";
import gridStyles from "../styles/Grid.module.scss";

const Header = () => {
  return (
    <section className={`${gridStyles.container} ${headerStyles.sticky}`}>
      <header className={headerStyles.header} aria-label="header">
        <Link href="/">
          <a className={headerStyles.header__home}>
            <img src="/assets/images/smile.svg" alt="logo" />
          </a>
        </Link>
        <nav aria-label="navigation">
          <a href="#works">works.</a>
          <a href="#about">about me.</a>
          <a href="#contact">contact.</a>
        </nav>
      </header>
    </section>
  );
};

export default Header;
