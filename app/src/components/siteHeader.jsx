import React, { useState } from "react"
import { SiteIcon } from "./images/SiteIcon"
import { useStaticQuery, graphql } from "gatsby"
import Hamburger from "hamburger-react"
import { motion, AnimateSharedLayout } from "framer-motion"

const spring = {
    type: "spring",
    stiffness: 1000,
    damping: 50,
}

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

    const [hoveredItem, setHoveredItem] = useState(name)

    let timeout
    const handleOnMouseDeBounce = () => {
        timeout = setTimeout(() => {
            setHoveredItem(name)
        }, 10)
    }

    return (
        <>
            <header>
                <div onPointerOut={handleOnMouseDeBounce}>
                    <SiteIcon />

                    <AnimateSharedLayout>
                        <div
                            className="thingame"
                            onPointerOver={() => clearTimeout(timeout)}
                        >
                            <a
                                href="/"
                                onPointerOver={() => setHoveredItem("me")}
                            >
                                MURRAY JACK
                            </a>
                            {hoveredItem == "me" && (
                                <motion.div
                                    layoutId="header"
                                    className="headerOutline"
                                    initial={false}
                                    transition={spring}
                                ></motion.div>
                            )}
                        </div>

                        {data.allSanitySitePages.nodes.map(e => (
                            <div
                                className="thingame"
                                onPointerOver={() => clearTimeout(timeout)}
                            >
                                <a
                                    aria-selected={name == e.name}
                                    key={e.name}
                                    href={e.url}
                                    className="menu"
                                    onPointerOver={() => setHoveredItem(e.name)}
                                >
                                    {e.name}
                                </a>
                                {hoveredItem == e.name && (
                                    <motion.div
                                        layoutId="header"
                                        className="headerOutline"
                                        initial={false}
                                        transition={spring}
                                    ></motion.div>
                                )}
                            </div>
                        ))}
                    </AnimateSharedLayout>
                </div>
                <div>
                    <Hamburger size={20} toggled={isOpen} toggle={onClick} />
                </div>
            </header>

            <style global>{`
                .headerOutline {
                    position: absolute;
                    top: -10px;
                    left: -10px;
                    right: -10px;
                    bottom: -10px;
                    // border: 1px solid var(--main-accent-color);
                    border-radius: 5px;
                    background: rgba(0, 0, 0, 0.2);
                }
            `}</style>

            <style jsx>{`
                header {
                    background: var(--main-accent-color);
                    padding: var(--gaps-large);
                    display: grid;
                    grid-auto-flow: column;
                    grid-template-columns: 1fr auto;
                }

                .thingame {
                    position: relative;
                }

                a {
                    text-transform: uppercase;
                    text-decoration: none;
                    z-index: 1;
                }

                a:hover {
                    color: var(--main-color-inv);
                }

                a[aria-selected="true"] {
                    color: var(--main-color-inv);
                }

                div {
                    display: grid;
                    grid-auto-flow: column;
                    grid-gap: var(--gaps-xlarge);
                    grid-auto-columns: max-content;
                    align-items: center;
                }

                .menu {
                    display: none;
                }

                @media (min-width: 960px) {
                    .menu {
                        display: grid;
                    }
                }
            `}</style>
        </>
    )
}
