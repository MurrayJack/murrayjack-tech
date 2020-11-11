import React from "react"
import SEO from "../components/seo"
import SiteWrapper from "../components/siteWrapper"
import { ProjectsList } from "../components/ProjectsList"
import { useStaticQuery, graphql } from "gatsby"
import { Text } from "../components/Text"

export default () => {
    const { sanitySitePages } = useStaticQuery(graphql`
        {
            sanitySitePages(name: {eq: "Projects"}) {
                description
            }
        }
    `)

    return (
        <SiteWrapper name="Projects" title="Projects">
            <SEO title="Projects" description="Murray Jack List of Projects" />

            <Text as="p">{sanitySitePages.description}</Text>

            <ProjectsList />
        </SiteWrapper>
    )
}
