import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import SiteWrapper from "../components/siteWrapper"
import { ProjectsList } from "../components/ProjectsList"
import { Text } from "../components/Text"
import { Section } from "../components/Section"

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

            <Section center>
                <Text as="h1">Projects</Text>

                <ProjectsList />
            </Section>
        </SiteWrapper>
    )
}
