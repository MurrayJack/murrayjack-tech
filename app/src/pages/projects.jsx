import React from "react"
import SEO from "../components/seo"
import SiteWrapper from "../components/siteWrapper"
import { ProjectsList } from "../components/ProjectsList"
import { Text } from "../components/Text"
import { Section } from "../components/Section"
import { VStack } from "../components/Stack"

export default () => {
    return (
        <SiteWrapper name="Projects">
            <SEO title="Projects" description="Murray Jack List of Projects" />

            <VStack gap="xLarge" pad="xLarge">
                <Section center>
                    <Text as="h2">Projects</Text>

                    <VStack pad="large" justify="center">
                        <ProjectsList />
                    </VStack>
                </Section>
            </VStack>
        </SiteWrapper>
    )
}
