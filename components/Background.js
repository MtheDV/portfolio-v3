import React from 'react';
// styles
import backgroundStyles from '../styles/Background.module.scss';

const Background = () => {
  return (
    <div className={backgroundStyles.background}>
      <div className={backgroundStyles.orb}/>
    </div>
  );
};

export default Background;