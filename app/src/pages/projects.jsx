import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { SiteGrid } from "../components/siteGrid"
import { SiteMain } from "../components/siteMain"
import { SiteSection } from "../components/siteSection"
import { Card } from "../components/card"
import SiteWrapper from "../components/siteWrapper"

export default () => {
    const data = useStaticQuery(graphql`
        {
            allSanityProjects {
                nodes {
                    published
                    projectName
                    description
                    cloudinaryId
                }
            }
        }
    `)

    return (
        <SiteWrapper name="Projects">

            <SEO title="Projects" description="Murray Jack List of Projects" />

            <SiteMain title="Projects">
                <SiteSection>
                    <SiteGrid cols={2}>
                        {data.allSanityProjects.nodes.map(e => (
                            <>
                                <Card
                                    title={e.projectName}
                                    image={e.cloudinaryId}
                                    description={e.description}
                                />
                            </>
                        ))}
                    </SiteGrid>
                </SiteSection>
            </SiteMain>
        </SiteWrapper>
    )
}
