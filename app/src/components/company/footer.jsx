import React from "react"
import styled from "styled-components"

export default () => (
    <>
    <Bar>
        <Section>
            <div>
                Site Created Using:{" "}
                <a href="https://www.gatsbyjs.org/">Gatsby</a> |{" "}
                <a href="https://www.sanity.io/">Sanity.IO</a> |{" "}
                <a href="https://app.netlify.com">Netflify</a>
            </div>
            <div>
                <a
                    target="_new"
                    href="https://www.notion.so/http-murrayjack-tech-60dd1a8964ed4563a030baf2410adbc4"
                >
                    Development Notes
                </a>
            </div>
        </Section>
    </Bar>

    <style jsx>{`
    
    
    `}</style>

    </>
)

const Bar = styled.footer`
    padding-bottom: 120px;
    font-size: var(--font-small);
`

const Section = styled.section`
    max-width: 100%;
    margin: 0 auto;
    padding: 1.45rem 20px;
    text-align: center;
    display: grid;

    @media (min-width: 960px) {
        text-align: left;
        max-width: 960px;
        padding: 1.45rem 0;
        display: grid;
        grid-template-columns: 50% 50%;
    }
`
