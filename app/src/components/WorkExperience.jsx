import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Company } from "./Company"
import { VStack } from "./Stack"
import { Text } from "./Text"

export const WorkExperience = () => {
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
                    useNewTechStack
                    techStack2 {
                        name
                        percent
                    }
                    title
                    tagLine
                    jobPoints
                }
            }
        }
    `)

    return (
        <VStack gap="medium">
            <Text as="h2">Work Experience</Text>

            <Text as="p">{data.sanityPersonalDetails.workBlurb}</Text>
            <Text as="p">{data.sanityPersonalDetails.workBlurb2}</Text>

            <VStack gap="xxxLarge"></VStack>

            <VStack gap="xxxLarge">
                {data.allSanityJobposition.nodes.map((e, i) => (
                    <Company key={i} data={e} />
                ))}
            </VStack>
        </VStack>
    )
}
