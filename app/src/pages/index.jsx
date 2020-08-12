import React from "react"
import LargeLink from "../components/general/LargeLink"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import { SiteMain } from "../components/siteMain"
import { SiteSection } from "../components/siteSection"
import { SiteGrid } from "../components/siteGrid"
import SiteWrapper from "../components/siteWrapper"

export default () => {
    const { allSanitySitePages } = useStaticQuery(graphql`
        {
            allSanitySitePages(sort: { order: ASC, fields: order }) {
                nodes {
                    name
                    description
                    url
                }
            }
        }
    `)

    return (
        <SiteWrapper>
            <SiteMain title="Murray Jack">

            <SEO title="Blog" description="Murray Jack List of Blogs" />

                <SiteSection>
                    <SiteGrid>
                        {allSanitySitePages.nodes.map(e => (
                            <LargeLink
                                href={e.url}
                                caption={e.name}
                                key={e.name}
                            >
                                {e.description}
                            </LargeLink>
                        ))}
                    </SiteGrid>
                </SiteSection>
            </SiteMain>
        </SiteWrapper>
    )
}
