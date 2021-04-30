import "../styles/globals.scss";
import Header from "../components/Header";
import { useState } from "react";

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

function MyApp({ Component, pageProps }) {
  const { x, y, handleMouseMove, handleMouseLeave } = useMouseMove();
  return (
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Header mouseX={x} mouseY={y} />
      <Component {...pageProps} mouseX={x} mouseY={y} />
    </div>
  );
}

export default MyApp;
