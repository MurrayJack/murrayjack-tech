import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { SanityImage } from "../components/sanityImage"
import { SiteHeader } from "../components/siteHeader"
import { SiteGrid } from "../components/siteGrid"
import { SiteMain } from "../components/siteMain"
import { SiteSection } from "../components/siteSection"

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
                    <SiteGrid>
                        {data.allSanityProjects.nodes.map(e => (
                            <article>
                                <div>
                                    <h3>{e.projectName}</h3>
                                    <p>{e.description}</p>
                                </div>
                                <SanityImage image={e.image} />
                            </article>
                        ))}
                    </SiteGrid>
                </SiteSection>
            </SiteMain>
        </>
    )
}
