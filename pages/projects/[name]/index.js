import { server } from "../../../config";
import React from "react";
import Head from "next/head";
// styles
import gridStyles from "../../../styles/Grid.module.scss";
import projectStyles from "../../../styles/Projects.module.scss";

const Project = ({ project }) => {
  return (
    <>
      <Head>
        <title>mathew de vin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={gridStyles.container}>
        <section className={projectStyles.content}>
          <h1 className={projectStyles.title}>{project.display}</h1>
          <p className={projectStyles.body}>{project.body}</p>
        </section>
        <section className={projectStyles.images} aria-label="Project Images">
        {
          project.content.map((image, index) => (
            <img key={index} src={`/assets/images/${project.name}/${image}`} alt="project image"/>
          ))
        }
        </section>
      </main>
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
