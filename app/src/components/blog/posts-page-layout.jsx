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
            <SEO title="Blogs" description="Murray Jack Blog" />

            <main>
                <header>
                    <h4>murrayjack.tech</h4>
                    <hr />
                </header>

                <aside>
                    <div>Blog</div>
                    <div>Blog</div>
                    <div>Blog</div>
                </aside>

                <section>
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
                </section>
            </main>

            <style jsx>{`
                main {
                    display: grid;
                    grid-template-columns: 200px 1fr;
                    grid-template-rows: 50px 1fr;
                    grid-template-areas: "aside header" "aside section" 
                }

                header {
                    grid-area: header;
                }

                aside {
                    grid-area: aside;
                }

                section {
                    grid-area: section
                }

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
