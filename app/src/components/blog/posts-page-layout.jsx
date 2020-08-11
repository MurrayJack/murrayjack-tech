import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { Tag } from "../tag"
import { Javascript } from "../styling"
import Layout from "./Layout";

const CodeSandbox = ({ src, title }) => (
    <iframe
        src={src}
        style={{ width: "100%", height: "500px", border: 0, borderRadius: "4px", overflow: "hidden" }}
        title={title}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
)

//"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"

const shortCodes = { Link, Javascript, CodeSandbox } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
    return (
        <Layout>

            <MDXProvider components={shortCodes}>
                <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>

            <div>
                {/* <hr /> */}

                <ul>
                    <li>
                        {new Date(
                            mdx.frontmatter.date
                        ).toLocaleDateString()}
                    </li>

                    {mdx.frontmatter.tags.map(e => (
                        <li>
                            {e}
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

                {/* li {
                    {/* display: inline-block; */}
                } */}

                hr {
                    
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
