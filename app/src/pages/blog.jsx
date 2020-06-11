import React from "react"
import SEO from "../components/seo"
import * as Sentry from "@sentry/browser"
import { useStaticQuery, graphql } from "gatsby"
import LargeLink from "../components/general/LargeLink"

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
                        date
                    }
                }
            }
        }
    `)

    return (
        <main>
            <SEO title="Blog" description="Murray Jack List of Blogs" />

            <table>
                {data.allMdx.nodes.map(e =>
                    e.frontmatter.active ? (
                        <LargeLink href={e.frontmatter.path} caption="??">
                            {e.frontmatter.title}
                        </LargeLink>
                    ) : (
                        // <tr>
                        //     <td>
                        //         <time>{e.frontmatter.date}</time>
                        //     </td>
                        //     <td>
                        //         <a href={e.frontmatter.path}>
                        //             {e.frontmatter.title}{" "}
                        //         </a>
                        //     </td>
                        // </tr>
                        <></>
                    )
                )}
            </table>
        </main>
    )
}
