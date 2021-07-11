import * as React from "react";
import Intro from "../components/me/intro";
import Company from "../components/co/company";
import murray from "../images/murrayjack.png";
import Contact from "../components/me/contact";
import { Helmet } from "react-helmet";

import "../components/styles.css";

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Murray Jack: CV</title>
      </Helmet>

      <header>
        <img alt="Murray Jack" src={murray} />
        <h1>Murray Jack: CV</h1>
      </header>

      <section>
        <Intro />

        <h2>Work Experience</h2>

        <Company />
        {/* <RedBox />
        <HN />
        <Performa />
        <MDJ />
        <PAS /> */}
      </section>

      <aside>
        <Contact />
        {/* <Skills />
        <Projects /> */}
      </aside>
    </main>
  );
};

export default IndexPage;
