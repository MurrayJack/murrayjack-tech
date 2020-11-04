import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Image, CloudinaryContext, Transformation } from "cloudinary-react"
import { HStack } from "./Stack"

export const ProjectsList = () => {
    const { allSanityProjects } = useStaticQuery(graphql`
        {
            allSanityProjects {
                nodes {
                    published
                    projectName
                    description
                    cloudinaryId
                }
            }
        }
    `)
    return (
        <>
            <CloudinaryContext cloudName="murrayjack">
                <HStack>
                    {allSanityProjects.nodes.map(e => (
                        <Image secure="true" publicId={e.cloudinaryId}>
                            <Transformation width="200" crop="scale" />
                        </Image>
                    ))}
                </HStack>
            </CloudinaryContext>
        </>
    )
}
