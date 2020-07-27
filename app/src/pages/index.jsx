import React from "react"
import LargeLink from "../components/general/LargeLink"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
    const { allSanitySitePages } = useStaticQuery(graphql`
        {
            allSanitySitePages(sort: {order: ASC, fields: order}) {
                nodes {
                    name
                    description
                    url
                }
            }
        }
    `)

    return (
        <>
            <main>
                <header>
                    <h1>Murray Jack </h1>
                    <hr></hr>
                </header>

                <article>
                    {allSanitySitePages.nodes.map(e => (
                        <LargeLink href={e.url} caption={e.name} key={e.name}>
                            {e.description}
                        </LargeLink>
                    ))}
                </article>
            </main>

            <style jsx>{`
                main {
                    height: 100vh;
                    display: grid;
                    grid-template-rows: 120px 1fr 1fr;
                    grid-gap: 40px;
                    align-items: center;
                    justify-items: center;
                }

                h1 {
                    padding: 0;
                    margin: 0;
                }

                article {
                    display: grid;
                    grid-auto-flow: row;
                    grid-gap: var(--gaps-xxlarge);
                }
            `}</style>
        </>
    )
}
