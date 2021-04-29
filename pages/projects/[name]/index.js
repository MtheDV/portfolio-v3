import { server } from "../../../config";
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Footer from "../../../components/Footer";
// styles
import gridStyles from "../../../styles/Grid.module.scss";
import projectStyles from "../../../styles/Projects.module.scss";
// animations
import { appearFromBottom } from "../../../animations/animations";

const Project = ({ project }) => {
  const imageRefs = useRef(project.content.map(() => useRef()));
  useEffect(() => {
    imageRefs.current.map((imageRef) =>
      appearFromBottom(imageRef.current, { duration: 1, y: 1 })
    );
  }, [imageRefs]);

  return (
    <>
      <Head>
        <title>mathew de vin</title>
        <link rel="icon" href="/favicon.ico" />
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
      <Footer />
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/projects/${context.params.name}`);
  const project = await res.json();

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/projects`);
  const projects = await res.json();

  const projectNames = projects.map((project) => project.name);
  const paths = projectNames.map((name) => ({ params: { name: name } }));

  return {
    paths,
    fallback: false,
  };
};

export default Project;
