import React from "react"
import SEO from "../components/seo"
import SiteWrapper from "../components/siteWrapper"
import { ProjectsList } from "../components/ProjectsList"

export default () => {
    return (
        <SiteWrapper name="Projects" title="Projects">
            <SEO title="Projects" description="Murray Jack List of Projects" />

            <ProjectsList />
        </SiteWrapper>
    )
}
