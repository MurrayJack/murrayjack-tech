import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import SEO from "../seo"
import { Tag } from "../tag"
import { Javascript } from "../styling"

const shortCodes = { Link, Javascript } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
    return (
        <>
            <main>
                <SEO title="Blogs" description="Murray Jack Blog" />

                <div style={{ textAlign: "right" }}>
                    <ul>
                        <li>
                            <Tag>
                                {/* <FiCalendar /> */}
                                {new Date(
                                    mdx.frontmatter.date
                                ).toLocaleDateString()}
                            </Tag>
                        </li>

                        {mdx.frontmatter.tags.map(e => (
                            <li>
                                <Tag>{e}</Tag>
                            </li>
                        ))}
                    </ul>
                </div>

                <MDXProvider components={shortCodes}>
                    <MDXRenderer>{mdx.body}</MDXRenderer>
                </MDXProvider>
            </main>

            <style jsx>{`
                ul {
                    padding: 0;
                    margin: 0;
                    list-style: none;
                    // display: flex;
                    // flex-direction: row-reverse;
                }
            `}</style>
        </>
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
