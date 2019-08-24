import React from "react"
import { graphql } from "gatsby"

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
            location
            techStack 
        }
    }
  }
`

const SecondPage = ({ data }) => (
    <Layout>
        <SEO title="Job Positions" />

        {data.allSanityJobposition.nodes.map((e) => <Company data={e} />)}

    </Layout>
)

export default SecondPage
