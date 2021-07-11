import betties from "./Betties.png";
import hn from "./HN.png";
import fm from "./FM.png";
import srw from "./SRW.png";
import rg from "./RG.png";

const Projects = () => (
  <article>
    <h4>Previous Projects</h4>
    <ul>
      <li>
        <img width="228px" height="188px" alt="Betty's by Post" src={betties} />
      </li>
      <li>
        <img width="228px" height="188px" alt="Harvey Nichols" src={hn} />
      </li>
      <li>
        <img width="228px" height="188px" alt="Fortnum &amp; Mason" src={fm} />
      </li>
      <li>
        <img width="228px" height="188px" alt="StarRez Web" src={srw} />
      </li>
      <li>
        <img width="228px" height="188px" alt="Report Generator" src={rg} />
      </li>
    </ul>
  </article>
);

export default Projects;
