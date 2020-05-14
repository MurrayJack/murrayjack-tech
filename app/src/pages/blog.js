import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Container from "../components/container"
import * as Sentry from "@sentry/browser"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

Sentry.init({
    dsn: "https://0d3f3a6c95694779ac5f7c87c7e961eb@sentry.io/1560759",
    release: "murrayjack-tech@1.0.0",
})

export default () => {
    const data = useStaticQuery(graphql`
    {
  allMdx {
    nodes {
      frontmatter {
        title
        path
        active
      }
    }
  }
}
    `)

    return (
        <Layout>
            <SEO title="Home" description="Murray Jack Resume" />

            <Helmet>
                {/* <script src={withPrefix("hotjar.js")} type="text/javascript" /> */}
            </Helmet>

            <Container
                Color="#364859"
                BGColor="#f2f2f2"
                Header="Blogs"
                Info=""
            >

                {data.allMdx.nodes.map(e => e.frontmatter.active ? <p><a href={e.frontmatter.path}>{e.frontmatter.title} </a></p> : <></>)}

            </Container>

            <Footer />
        </Layout>
    )
}