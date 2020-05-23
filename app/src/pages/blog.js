import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Container from "../components/container"
import * as Sentry from "@sentry/browser"
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
                    date
                }
            }
        }
    }
    `)

    return (
        <main>
            <SEO title="Blog" description="Murray Jack List of Blogs" />

            <Container
                Color="#364859"
                BGColor="#f2f2f2"
                Header="Blogs"
                Info="Im trying to blog a but more, should be fun!"
            >
                <table>
                    {data.allMdx.nodes.map(e => e.frontmatter.active ? <tr>
                        <td>
                            <time>{e.frontmatter.date}</time>
                        </td>
                        <td>
                            <a href={e.frontmatter.path}>{e.frontmatter.title} </a>
                        </td>
                    </tr> : <></>)}
                </table>

            </Container>
        </main>
    )
}