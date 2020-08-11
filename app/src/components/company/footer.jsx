import React from "react"

export default () => (
    <>
        <footer>
            <section>
                <p>
                    <span>Site Created Using</span>
                    <a href="https://www.gatsbyjs.org/">Gatsby</a>
                    <a href="https://www.sanity.io/">Sanity.IO</a>
                    <a href="https://app.netlify.com">Netflify</a>
                    <span>❤️</span>
                </p>
            </section>
        </footer>

        <style jsx>{`
            p {
                display: grid;
                grid-auto-flow: column;
                grid-gap: var(--gaps-small)
            }

            footer {
                padding-bottom: 120px;
                font-size: var(--font-small);
            }

            section {
                max-width: 100%;
                margin: 0 auto;
                padding: 1.45rem 20px;
                text-align: center;
                display: grid;
                grid-auto-flow: column;
                grid-auto-columns: max-content;
                grid-gap: 8px;
            }

            @media (min-width: 960px) {
                section {
                    text-align: left;
                    max-width: 960px;
                    padding: 1.45rem 0;
                    display: grid;
                }
            }
        `}</style>
    </>
)
