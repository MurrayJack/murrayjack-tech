import React from "react"
import Container from "./container"
import { useStaticQuery, graphql } from "gatsby"
import Company from "./company"

const WorkExperience = () => {
    const data = useStaticQuery(graphql`
        {
            sanityPersonalDetails {
                workBlurb
                workBlurb2
            }

            allSanityJobposition(sort: { order: DESC, fields: endDate }) {
                nodes {
                    companyName
                    startDate(formatString: "YYYY")
                    endDate(formatString: "YYYY")
                    url
                    location
                    techStack
                    title
                    tagLine
                    jobPoints
                }
            }
        }
    `)

    return (
        <Container
            ID="experience"
            Color="white"
            BGColor="transparent"
            Header="Work Experience"
            Info={data.sanityPersonalDetails.workBlurb}
            Info2={data.sanityPersonalDetails.workBlurb2}
        >
            
            {data.allSanityJobposition.nodes.map((e, i) => (
                <Company key={i} data={e} />
            ))}
        </Container>
    )
}

export default WorkExperience
