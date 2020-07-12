import React from "react"
import Layout from "../components/company/layout"
import SEO from "../components/seo"
import AboutMe from "../components/company/aboutMe"
import WorkExperience from "../components/company/workExperience"
import Contact from "../components/company/contact"
import Footer from "../components/company/footer"

export default () => (
    <Layout>
        <SEO title="Home" description="Murray Jack Resume" />

        <AboutMe />

        <WorkExperience />

        <Contact />

        <Footer />
    </Layout>
)
