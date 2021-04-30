import { server } from "../config";
import Head from "next/head";
// components
import Landing from "../components/Landing";
import Works from "../components/Works";
import ScrollBanner from "../components/ScrollBanner";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import React from "react";

export default function Home({ projects, mouseX, mouseY }) {
  return (
    <>
      <Head>
        <title>mathew de vin</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://mathewdevin.com"/>
        <meta property="og:title" content="Mathew de Vin"/>
        <meta property="og:description"
              content="Hello my name is Mathew de Vin! Designer and developer. This is my portfolio where you can get a small glimpse of who I am and what I do"/>
        <meta property="og:image" content="/assets/images/preview.jpg"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://mathewdevin.com"/>
        <meta property="twitter:title" content="Mathew de Vin"/>
        <meta property="twitter:description"
              content="Hello my name is Mathew de Vin! Designer and developer. This is my portfolio where you can get a small glimpse of who I am and what I do"/>
        <meta property="twitter:image" content="/assets/images/preview.jpg"/>
        <meta name="pinterest" content="nopin"/>
      </Head>
      <main>
        <Landing />
        <ScrollBanner text={"CHECK ME OUT"} />
        <Works projects={projects} mouseX={mouseX} mouseY={mouseY} />
        <ScrollBanner text={"WHO AM I?"} />
        <About mouseX={mouseX} mouseY={mouseY} />
        <ScrollBanner text={"GET IN TOUCH"} />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/projects`);
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
};
