import React from "react"
import { ProjectsList } from "../components/ProjectsList"
import SEO from "../components/seo"
import SiteWrapper from "../components/siteWrapper"
import { VStack } from "../components/stack"
import { Section } from "../components/Section"
import { Text } from "../components/Text"
import { useStaticQuery, graphql } from "gatsby"
import { MyImage } from "../components/MyImage"

export default () => {
    const data = useStaticQuery(graphql`
        {
            sanityPersonalDetails {
                name
                personalBlurb
                personalBlurb2
                email
                location
                visa
                github
                twitter
                twitterName
                linkedIn
            }
        }
    `)

    return (
        <SiteWrapper>
            <SEO title="Home" description="Murray Jack Home Page" />

            <Section center>
                <VStack pad="xLarge" gap="xLarge" justify="center">
                    <Text as="h1">Murray Jack</Text>
                    <MyImage data={data} />
                </VStack>
            </Section>

            <Section center>
                <VStack pad="xLarge" gap="xLarge" justify="center">
                    <Text as="h1">Projects</Text>
                    <ProjectsList />
                </VStack>
            </Section>
        </SiteWrapper>
    )
}
