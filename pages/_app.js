import "../styles/globals.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Noise from "../components/Noise";
import Loading from "../components/Loading";

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
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadingOff = () => {
      setLoading(false);
    }
    const loadingOn = () => {
      setLoading(true);
    }
    router.events.on("routeChangeStart", loadingOn);
    router.events.on("routeChangeComplete", loadingOff);

    return () => {
      router.events.off("routeChangeStart", loadingOn);
      router.events.off("routeChangeComplete", loadingOff);
    };
  }, []);
  return (
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Noise />
      <Loading mouseX={x} mouseY={y} useLoading={loading} />
      <Header />
      <Component {...pageProps} mouseX={x} mouseY={y} />
    </div>
  );
}

export default MyApp;
