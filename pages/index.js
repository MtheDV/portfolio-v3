import { server } from "../config";
import Head from "next/head";
// components
import Landing from "../components/Landing";
import Works from "../components/Works";

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>mathew de vin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Landing />
        <Works projects={projects} />
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
