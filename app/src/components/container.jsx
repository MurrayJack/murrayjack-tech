import React from "react"
// import styled from "styled-components"
// import { H2, P } from "./Styles"

export default ({ children, BGColor, Color, Header, Info, ID }) => (
    <>
        {/* <IDOffset id={ID}></IDOffset>
        <Wrapper id={ID + "1"} BGColor={BGColor} Color={Color}>
            <Article>
                <H2>{Header}</H2>
                <P>{Info}</P> */}

                {children}
            {/* </Article>
        </Wrapper> */}
    </>
)

// const Wrapper = styled.div`
//     background-color: ${props => props.BGColor};
//     color: ${props => props.Color};
// `

// const Article = styled.article`
//     padding: 1.45rem 20px;
//     text-align: center;

//     @media (min-width: 960px) {
//         max-width: 960px;
//         margin: 0 auto;
//         padding: 1.45rem 0;
//         text-align: left;
//         padding-bottom: 150px;
//     }
// `

// const IDOffset = styled.div`
//     position: relative;
//     top: -100px;
// `
