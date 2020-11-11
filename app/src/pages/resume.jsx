import React from "react"
import SEO from "../components/seo"
import { AboutMe } from "../components/AboutMe"
import { WorkExperience } from "../components/WorkExperience"
import SiteWrapper from "../components/siteWrapper"
import { VStack } from "../components/Stack"
import { Section } from "../components/Section"
import { Text } from "../components/text"

export default () => {
    return (
        <SiteWrapper name="Resume" title="About Me">
            <SEO title="Resume" description="Murray Jack Resume" />

            <AboutMe />

            <WorkExperience />
        </SiteWrapper>
    )
}
