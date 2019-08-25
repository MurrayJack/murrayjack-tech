import React from "react"
import styled from "styled-components";
import Container from "./container";
import { useStaticQuery, graphql } from "gatsby"
import Company from "./company";
import { H2, P } from "./Styles";

const AboutMe = styled.article`
    background-color: #d8dbdb;
    color: #364859;
`

const Grid = styled.section`
    display: grid;
    grid-template-columns: 50% 50%;
`

const WorkExperience = () => {
    const data = useStaticQuery(graphql`
    {
        sanityPersonalDetails {
          workBlurb
        }

        allSanityJobposition {
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
        <AboutMe>
            <Container>
                <H2>Work Experience</H2>


                <P>{data.sanityPersonalDetails.workBlurb}</P>
                <div>
                    {data.allSanityJobposition.nodes.map((e) => <Company data={e} />)}
                </div>
            </Container>
        </AboutMe>)
}

export default WorkExperience