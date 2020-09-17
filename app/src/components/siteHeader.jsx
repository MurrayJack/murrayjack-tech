import * as React from "react"
import { SiteIcon } from "./images/SiteIcon"
import { useStaticQuery, graphql } from "gatsby"
import Hamburger from "hamburger-react"

export const SiteHeader = ({ onClick, isOpen, name }) => {
    const data = useStaticQuery(graphql`
        {
            allSanitySitePages(sort: { fields: order, order: ASC }) {
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
                        <a
                            aria-selected={name == e.name}
                            key={e.name}
                            href={e.url}
                        >
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
                    background: var(--main-accent-color);
                    padding: var(--gaps-large);
                    display: grid;
                    grid-auto-flow: column;
                    grid-template-columns: 1fr auto;
                }

                a {
                    text-transform: uppercase;
                    text-decoration: none;
                    border-bottom: 1px solid currentColor;
                }

                a:hover {
                    border-bottom: 1px solid var(--main-color1);
                    color: var(--main-color1);
                }

                a[aria-selected="true"] {
                    border-bottom: 1px solid var(--main-color1);
                    color: var(--main-color1);
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
