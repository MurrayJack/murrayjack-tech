import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/aboutMe"
import WorkExperience from "../components/workExperience"
import Connect from "../components/contact"
import Footer from "../components/footer";

export default () => (
  <Layout>
    <SEO title="Murray Jack" description="Murray Jack Resume" />

    <AboutMe />

    <WorkExperience />

    <Connect />

    <Footer />

  </Layout>
);