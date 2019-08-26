import React from "react"
import styled from "styled-components"

const Bar = styled.footer`
    color: white;
    background-color: #2f3c4f;
    padding-bottom: 120px;
`;

const Section = styled.section`
    max-width: 100%;
    margin: 0 auto;
    padding: 1.45rem 20px;
    display: grid;
    grid-template-columns: 50% 50%;

    a {
        color: white;
    }

    @media (min-width: 960px) {
        max-width: 960px;
        padding: 1.45rem 0;
    }
`;

export default () => (
    <Bar>
        <Section>
            <div>Site Created Using: <a href="https://www.gatsbyjs.org/">Gatsby</a> | <a href="https://www.sanity.io/">Sanity.IO</a> | <a href="https://app.netlify.com">Netflify</a></div>
        </Section>
    </Bar>
)

