import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import LargeLink from "../components/general/LargeLink"
import { SiteHeader } from "../components/siteHeader"
import { SiteMain } from "../components/siteMain"
import { SiteSection } from "../components/siteSection"
import { SiteGrid } from "../components/siteGrid"

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
                        fragment
                    }
                }
            }
        }
    `)

    return (
        <>
            <SiteHeader />

            <SEO title="Blog" description="Murray Jack List of Blogs" />

            <SiteMain title="Blogs">
                <SiteSection>
                    <SiteGrid>
                        {data.allMdx.nodes.map(
                            e =>
                                e.frontmatter.active && (
                                    <LargeLink
                                        href={e.frontmatter.path}
                                        caption={e.frontmatter.title}
                                    >
                                        {e.frontmatter.fragment}
                                    </LargeLink>
                                )
                        )}
                    </SiteGrid>
                </SiteSection>
            </SiteMain>
        </>
    )
}
