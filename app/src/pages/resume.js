import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/aboutMe"
import WorkExperience from "../components/workExperience"
import Connect from "../components/contact"
import Footer from "../components/footer"
import * as Sentry from "@sentry/browser"

Sentry.init({
  dsn: "https://0d3f3a6c95694779ac5f7c87c7e961eb@sentry.io/1560759",
  release: "murrayjack-tech@1.0.0",
})

export default () => (
  <Layout>
    <SEO title="Home" description="Murray Jack Resume" />

    <AboutMe />

    <WorkExperience />

    <Connect />

    <Footer />
  </Layout>
)