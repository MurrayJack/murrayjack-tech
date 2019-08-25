import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/aboutMe"
import WorkExperience from "../components/workExperience"
import Conect from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <AboutMe />

    <WorkExperience />

    <Conect />

  </Layout>
)

export default IndexPage
