import React from "react"
import SEO from "../components/seo"
import { AboutMe } from "../components/AboutMe"
import { WorkExperience } from "../components/WorkExperience"
import SiteWrapper from "../components/siteWrapper"

export default () => {
    return (
        <SiteWrapper name="Resume" title="About Me">
            <SEO title="Resume" description="Murray Jack Resume" />

            <AboutMe />

            <WorkExperience />
        </SiteWrapper>
    )
}
