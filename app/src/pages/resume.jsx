import React from "react"
import SEO from "../components/seo"
import AboutMe from "../components/company/aboutMe"
import WorkExperience from "../components/company/workExperience"
import Contact from "../components/company/contact"
import Footer from "../components/company/footer"
import { SiteHeader } from "../components/siteHeader"
import { SiteMain } from "../components/siteMain"
import { SiteSection } from "../components/siteSection"
import { SiteGrid } from "../components/siteGrid"

export default () => (
    <>
        <SiteHeader />

        <SEO title="Home" description="Murray Jack Resume" />
        
        <SiteMain>

            <SiteSection>
                <SiteGrid>

                    <AboutMe />

                    <WorkExperience />

                    <Contact />

                    <Footer />
                </SiteGrid>
            </SiteSection>
        </SiteMain>
    </>
)
