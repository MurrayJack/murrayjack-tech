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
          <p>Betties by Post</p>
        </li>
        <li>
          <StaticImage src="../../images/HN.png" alt="Harvey Nics" />
          <p>Harvey Nichols</p>
        </li>
        <li>
          <StaticImage src="../../images/FM.png" />
          <p>Fortnum &amp; Mason</p>
        </li>
        <li>
          <StaticImage src="../../images/SRW.png" />
          <p>StarRez Web</p>
        </li>
        <li>
          <StaticImage src="../../images/RG.png" />
          <p>Report Generator</p>
        </li>
      </ul>
    </article>
  );
};

export default Projects;
