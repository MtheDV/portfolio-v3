import React from 'react';
// styles
import customStyles from "../styles/404.module.scss";

const Custom404 = () => {
  return (
    <section className={customStyles._404}>
      <img src={"assets/images/sad.svg"} alt="sad face" />
      <h3>couldn't find what you were looking for</h3>
    </section>
  );
};

export default Custom404;