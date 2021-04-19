import React from 'react';
// styles
import gridStyles from '../styles/Grid.module.scss';

const Layout = ({children}) => {
  return (
    <div className={gridStyles.layout}>
      {children}
    </div>
  );
};

export default Layout;