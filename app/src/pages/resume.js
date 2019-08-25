import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Company from "../components/company";

export const query = graphql`
  query {
    allSanityJobposition {
        nodes {
            companyName
            startDate
            endDate
            url
            location
            techStack
            title
            tagLine
            jobPoints
        }
    }
  }
`

const SecondPage = ({ data }) => (
    <Layout>
        <SEO title="Resume" />

        <div>
    <Link to="/">Home</Link>
      <Link to="/resume/">Resume</Link>
      <Link to="/rollerderby/">Roller Derby</Link>
    </div>

        {data.allSanityJobposition.nodes.map((e) => <Company data={e} />)}

    </Layout>
)

export default SecondPage
