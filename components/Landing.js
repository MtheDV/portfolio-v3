import React, {useEffect, useRef} from 'react';
// styles
import landingStyles from '../styles/Landing.module.scss';
import gridStyles from '../styles/Grid.module.scss';
// animations
import { spin } from '../animations/animations'

const Landing = () => {

  const helloCircleRef = useRef();
  const starRef = useRef();
  useEffect(() => {
    spin(helloCircleRef.current, {duration: 10});
    spin(starRef.current, {amount: -360, duration: 30});
  }, [helloCircleRef, starRef]);

  return (
    <section className={gridStyles.container}>
      <div className={landingStyles.intro}>
        <img className={landingStyles.star} ref={starRef} src={'/assets/images/star.svg'} alt={'Blue star'}/>
        <img className={landingStyles.circleText} ref={helloCircleRef} src={'/assets/images/hello_circle.svg'} alt={'Hello! text in a circle'}/>
        <h1 className={landingStyles.header}>mathew de vin<br/>web developer & designer.</h1>
      </div>
    </section>
  );
};

export default Landing;