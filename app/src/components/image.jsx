import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 300px;
  
`;

const Image = () => {
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

  return <Wrapper><Img fluid={data.placeholderImage.childImageSharp.fluid} /></Wrapper>
}

export default Image
