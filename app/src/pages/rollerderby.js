import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div>
    <Link to="/">Home</Link>
      <Link to="/resume/">Resume</Link>
      <Link to="/rollerderby/">Roller Derby</Link>
    </div>

    
  </Layout>
)

export default IndexPage
