import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "./layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Container from "./container"
import { Tag } from "./tag"
// import { FiCalendar } from "react-icons/fi"
import { Javascript } from "./styling"

const shortcodes = { Link, Javascript } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
    return (
        <Layout>
            <SEO title="Home" description="Murray Jack Resume" />

            <Container
                ID="experience"
                Color="#364859"
                BGColor="#f2f2f2"
                Header={mdx.frontmatter.title}
                Info=""
            >
                <div style={{ textAlign: "right" }}>
                    <Tag>
                        {/* <FiCalendar /> */}
                        {new Date(mdx.frontmatter.date).toLocaleDateString()}
                    </Tag>
                    
                    {mdx.frontmatter.tags.map(e => (
                        <Tag>{e}</Tag>
                    ))}
                </div>

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
                tags
                date
            }
        }
    }
`
