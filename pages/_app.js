import "../styles/globals.scss";
import { useState } from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import Header from "../components/Header";
import Noise from "../components/Noise";
import { pageEnter, pageExit } from "../animations/animations";

const useMouseMove = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setState((state) => ({ ...state, x: e.clientX, y: e.clientY }));
  };

  const handleMouseLeave = () => {
    setState((state) => ({ ...state, x: undefined, y: undefined }));
  };

  return { x: state.x, y: state.y, handleMouseMove, handleMouseLeave };
};

const enter = (node) => {
  pageEnter(node);
};

const exit = (node) => {
  pageExit(node);
};

function MyApp({ Component, pageProps, router }) {
  const { x, y, handleMouseMove, handleMouseLeave } = useMouseMove();
  return (
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Noise />
      <Header />
      <SwitchTransition mode={"out-in"}>
        <Transition
          key={router.pathname}
          timeout={500}
          in={true}
          onEnter={enter}
          onExit={exit}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <Component {...pageProps} mouseX={x} mouseY={y} />
        </Transition>
      </SwitchTransition>
    </div>
  );
}

export default MyApp;
