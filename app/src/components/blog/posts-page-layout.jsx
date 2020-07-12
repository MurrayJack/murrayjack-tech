import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import SEO from "../seo"
import { Tag } from "../tag"
import { Javascript } from "../styling"
import Layout from "./Layout";

const shortCodes = { Link, Javascript } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
    return (
        <Layout>

            <MDXProvider components={shortCodes}>
                <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>

            <div>
                <hr />

                <ul>
                    <li>
                        <Tag>
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

            <style jsx>{`
                ul {
                    padding: 0;
                    margin: 0;
                    list-style: none;
                }

                li {
                    display: inline-block;
                }

                hr {
                    border-color: var(--main-bg-color2);
                }
            `}</style>
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
