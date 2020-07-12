import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

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