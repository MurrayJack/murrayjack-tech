import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { H4 } from "../h4";

const Projects = () => {
  return (
    <article>
      <H4 caption="Previous Projects" type="projects" />
      <ul>
        <li>
          <StaticImage src="../../images/Betties.png" alt="Betties by Post" />
        </li>
        <li>
          <StaticImage src="../../images/HN.png" alt="Harvey Nics" />
        </li>
        <li>
          <StaticImage src="../../images/FM.png" />
        </li>
        <li>
          <StaticImage src="../../images/SRW.png" />
        </li>
        <li>
          <StaticImage src="../../images/RG.png" />
        </li>
      </ul>
    </article>
  );
};

export default Projects;
