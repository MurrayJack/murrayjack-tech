import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Image, CloudinaryContext, Transformation } from "cloudinary-react"
import { Text } from "./Text"
import { Section } from "./Section"
import { VStack } from "./Stack"

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
                <section>
                    {allSanityProjects.nodes.map(
                        e =>
                            e.cloudinaryId && (
                                <div>
                                    <Image
                                        secure="true"
                                        publicId={e.cloudinaryId}
                                    >
                                        <Transformation
                                            width="300"
                                            crop="scale"
                                        />
                                    </Image>
                                </div>
                            )
                    )}
                </section>
            </CloudinaryContext>

            <style jsx>{`
                section {
                    display: grid;
                    column-gap: 30px;
                    row-gap: 30px;
                    grid-template-columns: 300px 300px 300px;
                    grid-template-rows: auto auto auto;
                }
            `}</style>
        </>
    )
}
