import * as React from "react";
import Intro from "../components/me/intro";
import Company from "../components/co/company";
import Contact from "../components/me/contact";
import Skills from "../components/me/skills";
import Projects from "../components/me/projects";
import { Helmet } from "react-helmet";
import "../components/styles.css";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Murray Jack: CV</title>
      </Helmet>

      <header>
        <div>
          <StaticImage
            width="75px"
            height="75px"
            src="../images/murrayjack.png"
            alt="Betties by Post"
          />
        </div>
        <h1>Murray Jack: CV</h1>
      </header>

      <section>
        <Intro />

        <h2>Work Experience</h2>

        <Company />
      </section>

      <aside>
        <Contact />
        <Skills />
        <Projects />
      </aside>
    </main>
  );
};

export default IndexPage;
