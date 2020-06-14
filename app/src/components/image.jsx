import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({circular = true}) => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "murrayjack.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
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
                    width: 300px;
                }
            `}</style>
        </>
    )
}

export default Image
