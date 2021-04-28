import { server } from "../config";
import Head from "next/head";
// components
import Landing from "../components/Landing";
import Works from "../components/Works";
import ScrollBanner from "../components/ScrollBanner";
import About from "../components/About";

export default function Home({ projects, mouseX, mouseY }) {
  return (
    <>
      <Head>
        <title>mathew de vin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Landing />
        <ScrollBanner text={"CHECK ME OUT"} />
        <Works projects={projects} mouseX={mouseX} mouseY={mouseY} />
        <ScrollBanner text={"WHO AM I?"} />
        <About mouseX={mouseX} mouseY={mouseY} />
        <ScrollBanner text={"GET IN TOUCH"} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/projects`);
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
};
