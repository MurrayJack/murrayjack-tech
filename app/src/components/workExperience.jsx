import React from "react"
import Container from "./container";
import { useStaticQuery, graphql } from "gatsby"
import Company from "./company";

const WorkExperience = () => {
    const data = useStaticQuery(graphql`
    {
        sanityPersonalDetails {
          workBlurb
        }

        allSanityJobposition(sort: {order: DESC, fields: endDate})  {
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
            Color="#364859"
            BGColor="#d8dbdb"
            Header="Work Experience"
            Info={data.sanityPersonalDetails.workBlurb}
        >

            {data.allSanityJobposition.nodes.map((e) => <Company data={e} />)}

        </Container>)
}

export default WorkExperience