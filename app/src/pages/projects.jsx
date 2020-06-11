import React from "react"
import SEO from "../components/seo"
import * as Sentry from "@sentry/browser"
import { useStaticQuery, graphql } from "gatsby"

Sentry.init({
    dsn: "https://0d3f3a6c95694779ac5f7c87c7e961eb@sentry.io/1560759",
    release: "murrayjack-tech@1.0.0",
})

export default () => {
    const data = useStaticQuery(graphql`
    {
        allSanityProjects {
            nodes {
                published
                projectName
                url
            }
        }
    }
    `)

    return (
        <main>
            <SEO title="Projects" description="Murray Jack List of Projects" />

            {data.allSanityProjects.nodes.map(e => <div>

                <div>{e.projectName}</div>
                <div>{e.url}</div>


            </div>)}

        </main>
    )
}