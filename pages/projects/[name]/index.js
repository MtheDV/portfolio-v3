import {server} from "../../../config";
import React, {useEffect, useRef} from "react";
import Head from "next/head";
import Footer from "../../../components/Footer";
// styles
import gridStyles from "../../../styles/Grid.module.scss";
import projectStyles from "../../../styles/Projects.module.scss";
// animations
import {appearFromBottom} from "../../../animations/animations";

const Project = ({project}) => {
  const imageRefs = useRef(project.content.map(() => useRef()));
  useEffect(() => {
    imageRefs.current.map((imageRef) =>
      appearFromBottom(imageRef.current, {duration: 1, y: 1})
    );
  }, [imageRefs]);

  return (
    <>
      <Head>
        <title>Mathew de Vin</title>
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
        <meta property="og:title" content="Mathew de Vin - Portfolio"/>
        <meta property="og:description"
              content="Hello my name is Mathew de Vin! Designer and developer. This is my portfolio where you can get a small glimpse of who I am and what I do"/>
        <meta property="og:image" content="/assets/images/preview.jpg"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://mathewdevin.com"/>
        <meta property="twitter:title" content="Mathew de Vin - Portfolio"/>
        <meta property="twitter:description"
              content="Hello my name is Mathew de Vin! Designer and developer. This is my portfolio where you can get a small glimpse of who I am and what I do"/>
        <meta property="twitter:image" content="/assets/images/preview.jpg"/>
        <meta name="pinterest" content="nopin"/>
      </Head>
      <main className={gridStyles.container}>
        <section className={projectStyles.content}>
          <h1 className={projectStyles.title}>{project.display}</h1>
          <h2>Overview</h2>
          <p>{project.body}</p>
          <h2>Tools</h2>
          <p>{project.tools}</p>
          <h2>Links</h2>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="project link"
          >
            {project.link_title}
          </a>
        </section>
        <section className={projectStyles.images} aria-label="Project Images">
          {project.content.map((image, index) => (
            <img
              key={index}
              src={`/assets/images/${project.name}/${image}`}
              alt="project image"
              ref={imageRefs.current[index]}
            />
          ))}
        </section>
      </main>
      <Footer/>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/projects/${context.params.name}`);
  const project = await res.json();

  return {
    props: {
      project,
    },
  };
};

export default Project;
