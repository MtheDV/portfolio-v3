import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ImagePreview from "./ImagePreview";
// styles
import gridStyles from "../styles/Grid.module.scss";
import workStyles from "../styles/Works.module.scss";
// animations
import { appearFromBottom, scrollThroughWorks } from "../animations/animations";

const Works = ({ projects, mouseX, mouseY }) => {
  const worksListRef = useRef();
  const worksTitleRef = useRef();
  useEffect(() => {
    scrollThroughWorks(worksListRef.current);
    appearFromBottom(worksTitleRef.current, { duration: 1 });
  }, [worksListRef, worksTitleRef]);

  const [currentImage, setCurrentImage] = useState(null);
  const setPreview = (name, display) => {
    setCurrentImage(name ? `/assets/images/${name}/${display}` : null);
  };

  return (
    <section className={gridStyles.container} id={"works"}>
      <h3 className={workStyles.hideText}>works</h3>
      <div className={workStyles.headerText} ref={worksTitleRef}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1409 277"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2,
          }}
          aria-label="Works"
        >
          <g transform="matrix(1,0,0,1,-58891,-23062)">
            <g transform="matrix(1,0,0,1,52427,22822)">
              <g transform="matrix(8.80805,0,0,8.80805,-77238,-708.825)">
                <g transform="matrix(55.6656,0,0,55.6656,9502.41,139.068)">
                  <path
                    d="M0.01,-0.5L0.098,-0.5L0.285,-0.039L0.466,-0.445C0.474,-0.462 0.479,-0.473 0.481,-0.478C0.482,-0.483 0.483,-0.486 0.483,-0.487C0.483,-0.492 0.479,-0.495 0.472,-0.495L0.45,-0.495L0.45,-0.5L0.519,-0.5L0.706,-0.039L0.903,-0.479C0.905,-0.484 0.906,-0.488 0.905,-0.491C0.904,-0.494 0.9,-0.495 0.893,-0.495L0.871,-0.495L0.871,-0.5L0.941,-0.5L0.941,-0.495C0.934,-0.495 0.928,-0.494 0.921,-0.493C0.914,-0.491 0.908,-0.485 0.905,-0.476L0.695,-0L0.599,-0L0.599,-0.004L0.623,-0.004C0.63,-0.004 0.635,-0.005 0.636,-0.008C0.638,-0.01 0.638,-0.013 0.637,-0.016L0.469,-0.441L0.273,-0.001L0.178,-0L0.178,-0.004L0.202,-0.004C0.209,-0.004 0.213,-0.005 0.215,-0.008C0.216,-0.01 0.216,-0.013 0.215,-0.016L0.037,-0.468C0.032,-0.483 0.023,-0.493 0.01,-0.5Z"
                    style={{ fill: "white", fillRule: "nonzero" }}
                  />
                </g>
                <g transform="matrix(55.6656,0,0,55.6656,9557.02,139.068)">
                  <path
                    d="M0.01,-0.251C0.01,-0.286 0.016,-0.318 0.029,-0.348C0.041,-0.379 0.058,-0.405 0.079,-0.428C0.1,-0.451 0.125,-0.469 0.154,-0.482C0.183,-0.495 0.213,-0.502 0.246,-0.502C0.279,-0.502 0.309,-0.495 0.338,-0.482C0.367,-0.469 0.392,-0.451 0.413,-0.428C0.434,-0.405 0.451,-0.379 0.464,-0.348C0.476,-0.318 0.482,-0.286 0.482,-0.251C0.482,-0.216 0.476,-0.184 0.464,-0.153C0.451,-0.122 0.434,-0.096 0.413,-0.073C0.392,-0.05 0.367,-0.033 0.338,-0.02C0.309,-0.007 0.279,-0 0.246,-0C0.213,-0 0.183,-0.007 0.154,-0.02C0.125,-0.033 0.1,-0.05 0.079,-0.073C0.058,-0.096 0.041,-0.122 0.029,-0.153C0.016,-0.184 0.01,-0.216 0.01,-0.251ZM0.039,-0.184C0.039,-0.141 0.052,-0.106 0.078,-0.079C0.103,-0.052 0.138,-0.039 0.181,-0.039C0.215,-0.039 0.248,-0.047 0.281,-0.064C0.314,-0.08 0.343,-0.101 0.369,-0.128C0.394,-0.154 0.415,-0.184 0.431,-0.217C0.446,-0.25 0.454,-0.283 0.454,-0.316C0.454,-0.337 0.451,-0.357 0.444,-0.375C0.437,-0.392 0.428,-0.407 0.415,-0.42C0.402,-0.433 0.387,-0.443 0.37,-0.45C0.353,-0.457 0.333,-0.461 0.312,-0.461C0.278,-0.461 0.245,-0.453 0.212,-0.437C0.179,-0.421 0.15,-0.4 0.125,-0.374C0.099,-0.347 0.078,-0.318 0.063,-0.284C0.047,-0.252 0.039,-0.218 0.039,-0.184Z"
                    style={{ fill: "white", fillRule: "nonzero" }}
                  />
                </g>
                <g transform="matrix(55.6656,0,0,55.6656,9586.08,139.068)">
                  <path
                    d="M0.01,-0L0.014,-0.005L0.041,-0.005C0.05,-0.005 0.057,-0.009 0.061,-0.017C0.064,-0.025 0.066,-0.036 0.066,-0.049L0.066,-0.462C0.065,-0.474 0.063,-0.487 0.058,-0.5L0.127,-0.447L0.127,-0.42C0.148,-0.445 0.174,-0.464 0.203,-0.478C0.233,-0.493 0.265,-0.5 0.299,-0.5C0.318,-0.5 0.338,-0.497 0.359,-0.491C0.38,-0.484 0.399,-0.476 0.417,-0.466C0.435,-0.455 0.45,-0.443 0.462,-0.43C0.473,-0.417 0.479,-0.403 0.479,-0.389C0.479,-0.379 0.477,-0.37 0.472,-0.361C0.468,-0.352 0.462,-0.348 0.454,-0.348C0.441,-0.348 0.431,-0.353 0.425,-0.362C0.418,-0.371 0.413,-0.381 0.408,-0.392C0.403,-0.404 0.4,-0.416 0.397,-0.428C0.394,-0.44 0.391,-0.448 0.39,-0.451C0.385,-0.462 0.374,-0.472 0.357,-0.482C0.34,-0.491 0.321,-0.495 0.299,-0.495C0.281,-0.495 0.262,-0.491 0.243,-0.484C0.223,-0.477 0.205,-0.465 0.189,-0.448C0.172,-0.431 0.158,-0.408 0.147,-0.381C0.136,-0.353 0.129,-0.318 0.127,-0.277L0.127,-0L0.01,-0Z"
                    style={{ fill: "white", fillRule: "nonzero" }}
                  />
                </g>
                <g transform="matrix(55.6656,0,0,55.6656,9614.97,139.068)">
                  <path
                    d="M0.01,-0.088C0.017,-0.071 0.024,-0.058 0.032,-0.047C0.039,-0.036 0.049,-0.031 0.062,-0.031C0.068,-0.031 0.074,-0.034 0.079,-0.04C0.084,-0.045 0.086,-0.057 0.087,-0.074L0.087,-0.5C0.097,-0.51 0.106,-0.519 0.115,-0.527C0.122,-0.534 0.13,-0.541 0.137,-0.548C0.143,-0.555 0.148,-0.559 0.15,-0.562L0.15,-0.193L0.218,-0.262L0.212,-0.268C0.203,-0.281 0.192,-0.291 0.178,-0.3L0.25,-0.299L0.253,-0.296L0.426,-0.47C0.435,-0.479 0.437,-0.485 0.432,-0.489C0.427,-0.492 0.421,-0.494 0.413,-0.494L0.379,-0.494L0.379,-0.5L0.48,-0.5L0.48,-0.494C0.471,-0.494 0.462,-0.491 0.453,-0.485C0.444,-0.479 0.436,-0.473 0.429,-0.466L0.255,-0.293L0.48,-0L0.348,-0L0.348,-0.006L0.382,-0.006C0.391,-0.006 0.397,-0.008 0.4,-0.012C0.402,-0.015 0.402,-0.019 0.4,-0.024L0.22,-0.257L0.15,-0.187L0.15,-0.071C0.15,-0.058 0.148,-0.046 0.144,-0.036C0.141,-0.027 0.136,-0.018 0.129,-0.011C0.122,-0.004 0.111,-0 0.096,-0C0.081,-0 0.069,-0.003 0.06,-0.009C0.051,-0.015 0.043,-0.023 0.037,-0.032C0.03,-0.041 0.025,-0.05 0.021,-0.061C0.017,-0.071 0.013,-0.08 0.01,-0.088Z"
                    style={{ fill: "white", fillRule: "nonzero" }}
                  />
                </g>
                <g transform="matrix(55.6656,0,0,55.6656,9643.91,139.068)">
                  <path
                    d="M0.01,-0.013L0.041,-0.13C0.04,-0.126 0.04,-0.122 0.04,-0.118L0.04,-0.107C0.04,-0.082 0.045,-0.063 0.054,-0.049C0.063,-0.035 0.075,-0.025 0.089,-0.018C0.102,-0.011 0.117,-0.006 0.133,-0.005C0.149,-0.004 0.164,-0.003 0.177,-0.003C0.193,-0.004 0.207,-0.008 0.22,-0.017C0.232,-0.026 0.242,-0.037 0.251,-0.051C0.26,-0.065 0.266,-0.082 0.271,-0.101C0.276,-0.119 0.278,-0.14 0.279,-0.161L0.279,-0.179C0.278,-0.184 0.277,-0.189 0.277,-0.194C0.277,-0.199 0.277,-0.203 0.276,-0.208C0.271,-0.248 0.26,-0.281 0.242,-0.308C0.224,-0.334 0.199,-0.346 0.168,-0.345C0.151,-0.345 0.133,-0.34 0.115,-0.331C0.096,-0.321 0.079,-0.308 0.064,-0.293C0.057,-0.287 0.051,-0.281 0.046,-0.274C0.041,-0.267 0.036,-0.259 0.031,-0.252L0.022,-0.27C0.014,-0.291 0.01,-0.313 0.01,-0.335C0.01,-0.356 0.014,-0.377 0.022,-0.398C0.03,-0.418 0.042,-0.436 0.058,-0.452C0.077,-0.471 0.099,-0.483 0.125,-0.49C0.151,-0.497 0.179,-0.5 0.208,-0.5C0.231,-0.5 0.254,-0.499 0.277,-0.496C0.3,-0.493 0.321,-0.49 0.34,-0.487L0.31,-0.37C0.311,-0.374 0.311,-0.378 0.311,-0.381L0.311,-0.391C0.311,-0.416 0.306,-0.436 0.297,-0.451C0.288,-0.465 0.276,-0.475 0.262,-0.483C0.248,-0.49 0.233,-0.494 0.217,-0.496C0.201,-0.497 0.186,-0.498 0.173,-0.497C0.141,-0.495 0.117,-0.48 0.1,-0.451C0.083,-0.422 0.074,-0.386 0.073,-0.342C0.099,-0.349 0.124,-0.353 0.148,-0.353C0.185,-0.353 0.218,-0.344 0.249,-0.327C0.28,-0.309 0.303,-0.283 0.319,-0.249L0.328,-0.23C0.336,-0.209 0.34,-0.188 0.34,-0.165C0.34,-0.144 0.336,-0.123 0.329,-0.102C0.321,-0.081 0.309,-0.063 0.292,-0.048C0.273,-0.029 0.251,-0.017 0.225,-0.01C0.199,-0.003 0.171,-0 0.142,-0C0.119,-0 0.096,-0.001 0.073,-0.004C0.05,-0.007 0.029,-0.01 0.01,-0.013Z"
                    style={{ fill: "white", fillRule: "nonzero" }}
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <ul className={workStyles.worksList} ref={worksListRef}>
        {projects.map((project, index) => (
          <li
            key={index}
            onMouseOver={() => setPreview(project.name, "slide1.jpg")}
            onMouseLeave={() => setPreview(null, null)}
          >
            <Link href={`/projects/${project.name}`}><a>{project.display}</a></Link>
          </li>
        ))}
      </ul>
      <ImagePreview
        imageLink={currentImage}
        mouseX={mouseX}
        mouseY={mouseY}
        showPreview={!!currentImage}
        rightSide={true}
      />
    </section>
  );
};

export default Works;
