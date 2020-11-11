import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Image, CloudinaryContext, Transformation } from "cloudinary-react"

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
                    grid-template-columns: 33% 33% 33%;
                    grid-template-rows: auto auto auto;
                }
            `}</style>
        </>
    )
}
