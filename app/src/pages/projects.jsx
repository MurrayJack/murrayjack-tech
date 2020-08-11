import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { SiteHeader } from "../components/siteHeader"
import { SiteGrid } from "../components/siteGrid"
import { SiteMain } from "../components/siteMain"
import { SiteSection } from "../components/siteSection"
import { Card } from "../components/card"

export default () => {
    const data = useStaticQuery(graphql`
        {
            allSanityProjects {
                nodes {
                    published
                    projectName
                    description
                    image {
                        asset {
                            fluid {
                                srcSet
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <>
            <SiteHeader />

            <SEO title="Projects" description="Murray Jack List of Projects" />

            <SiteMain title="Projects">
                <SiteSection>
                    <SiteGrid cols={2}>
                        {data.allSanityProjects.nodes.map(e => (
                            <Card
                                title={e.projectName}
                                image={e.image}
                                description={e.description}   
                            />
                        ))}
                    </SiteGrid>
                </SiteSection>
            </SiteMain>
        </>
    )
}
