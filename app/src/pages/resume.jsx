import React from "react"
import SEO from "../components/seo"
import { AboutMe } from "../components/AboutMe"
import { WorkExperience } from "../components/WorkExperience"
import SiteWrapper from "../components/siteWrapper"
import { VStack } from "../components/Stack"
import { Section } from "../components/Section"

export default () => {
    return (
        <SiteWrapper name="Resume">
            <SEO title="Resume" description="Murray Jack Resume" />

            <VStack gap="xLarge" pad="xLarge">
                <Section center>
                    <AboutMe />
                </Section>

                <Section center>
                    <WorkExperience />
                </Section>
            </VStack>
        </SiteWrapper>
    )
}
