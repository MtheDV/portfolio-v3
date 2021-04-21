import React from 'react';
// styles
import headerStyles from '../styles/Header.module.scss';
import gridStyles from '../styles/Grid.module.scss';

const Header = () => {
  return (
    <header className={headerStyles.header} aria-label='header'>
      <img
        src='/assets/images/smile.svg'
        alt='logo'
      />
      <nav className={headerStyles.header__nav} aria-label='navigation'>
        <a href='#works'>works.</a>
        <a href='#about'>about me.</a>
        <a href='#contact'>contact.</a>
      </nav>
    </header>
  );
};

export default Header;