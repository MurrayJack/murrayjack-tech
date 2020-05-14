import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "./layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import Footer from "../components/footer"
import Container from "./container"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
    return (
        <Layout>
            <SEO title="Home" description="Murray Jack Resume" />

            <Helmet>
                {/* <script src={withPrefix("hotjar.js")} type="text/javascript" /> */}
            </Helmet>

            <Container
                ID="experience"
                Color="#364859"
                BGColor="#d8dbdb"
                Header={mdx.frontmatter.title}
                Info=""
            >
                {/* <h1>{mdx.frontmatter.title}</h1> */}
                <MDXProvider components={shortcodes}>
                    <MDXRenderer>{mdx.body}</MDXRenderer>
                </MDXProvider>
            </Container>
            <Footer />
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
            }
        }
    }
`
