import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const SiteIcon = ({ circular = true }) => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "icon.png" }) {
                childImageSharp {
                    fluid(maxWidth: 30) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <>
            <div>
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            </div>
            <style jsx>{`
                div {
                    border-radius: ${circular ? "50%" : "0"};
                    overflow: hidden;
                    width: 30px;
                }
            `}</style>
        </>
    )
}

