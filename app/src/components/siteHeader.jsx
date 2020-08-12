import * as React from "react"
import { SiteIcon } from "./images/SiteIcon"
import { useStaticQuery, graphql } from "gatsby"
import Hamburger from 'hamburger-react'

export const SiteHeader = ({onClick, isOpen}) => {
    const data = useStaticQuery(graphql`
        {
            allSanitySitePages(sort: {fields: order, order: ASC}) {
                nodes {
                    name
                    url
                }
            }
        }
    `)

    return (
        <>
            <header>
                <div>
                    <SiteIcon />
                    <a href="/">MURRAY JACK</a>
                    {data.allSanitySitePages.nodes.map(e => (
                        <a key={e.name} href={e.url}>
                            {e.name}
                        </a>
                    ))}
                </div>
                <div>
                    <Hamburger size={20} toggled={isOpen} toggle={onClick} />
                </div>
            </header>

            <style jsx>{`
                header {
                    background: var(--main-color2);
                    padding: var(--gaps-large);
                    display: grid;
                    grid-auto-flow: column;
                    grid-template-columns: 1fr auto;
                    position: sticky;
                    top: 0;
                    z-index: 1;
                }

                a {
                    text-transform: uppercase;
                    text-decoration: none;
                }

                div {
                    display: grid;
                    grid-auto-flow: column;
                    grid-gap: var(--gaps-xlarge);
                    grid-auto-columns: max-content;
                    align-items: center;
                }
            `}</style>
        </>
    )
}
