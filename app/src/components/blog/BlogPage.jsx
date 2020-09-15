import React from "react"
import SEO from "../seo"
import SiteWrapper from "../siteWrapper"
import { SiteMain } from "../siteMain"
import { SiteSection } from "../siteSection"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { Javascript } from "../styling"
import { Link } from "gatsby"


const CodeSandbox = ({ src, title }) => (
    <iframe
        src={src}
        style={{ width: "100%", height: "500px", border: 0, borderRadius: "4px", overflow: "hidden" }}
        title={title}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
)

const shortCodes = { Link, Javascript, CodeSandbox } // Provide common components here


export default function BlogPage({ data: { mdx } }) {
    return (
        <SiteWrapper name="Blogs">
            <SEO title="Blogs" description="Murray Jack Blog" />

            <SiteMain title={mdx.title} description={mdx.title}>
                <SiteSection>
                    <MDXProvider components={shortCodes}>
                        <MDXRenderer>{mdx.body}</MDXRenderer>
                    </MDXProvider>
                </SiteSection>
            </SiteMain>
        </SiteWrapper>
    )
}

export const pageQuery = graphql`
    query BlogPage($id: String) {
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
