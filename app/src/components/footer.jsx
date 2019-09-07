import React from "react"
import styled from "styled-components"
import theme from "../theme";

const Bar = styled.footer`
    color: white;
    background-color: #2f3c4f;
    padding-bottom: 120px;
    font-size: ${theme.font.Small};
`;

const Section = styled.section`
    max-width: 100%;
    margin: 0 auto;
    padding: 1.45rem 20px;
    text-align: center;
    display: grid;

    a {
        color: white;
    }

    @media (min-width: 960px) {
        text-align: left;
        max-width: 960px;
        padding: 1.45rem 0;
        display: grid;
        grid-template-columns: 50% 50%;
    }
`;

export default () => (
    <Bar>
        <Section>
            <div>Site Created Using: <a href="https://www.gatsbyjs.org/">Gatsby</a> | <a href="https://www.sanity.io/">Sanity.IO</a> | <a href="https://app.netlify.com">Netflify</a></div>
            <div><a target="_new" href="https://www.notion.so/http-murrayjack-tech-60dd1a8964ed4563a030baf2410adbc4">Development Notes</a></div>
        </Section>
    </Bar>
)

