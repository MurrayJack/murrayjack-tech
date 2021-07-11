import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Projects = () => {
  return (
    <article>
      <h4>Previous Projects</h4>
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
