import React, { useState } from "react"
import { SiteIcon } from "./images/SiteIcon"
import { useStaticQuery, graphql } from "gatsby"
import { motion, AnimateSharedLayout } from "framer-motion"

const spring = {
    type: "spring",
    stiffness: 1000,
    damping: 50,
}

export const Header = ({ name }) => {
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
                                onPointerOver={() => setHoveredItem("Home")}
                            >
                                Home
                            </a>
                            {hoveredItem == "Home" && (
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
                    {/* <Hamburger size={20} toggled={isOpen} toggle={onClick} /> */}
                </div>
            </header>

            <style jsx>{`
                header {
                    background: var(--main-header-bg-color);
                    padding: var(--gaps-small);
                    display: grid;
                    grid-auto-flow: column;
                    grid-template-columns: 1fr auto;

                    background: #AA076B;  /* fallback for old browsers */
                    background: -webkit-linear-gradient(to right, #61045F, #AA076B);  /* Chrome 10-25, Safari 5.1-6 */
                    background: linear-gradient(to right, #61045F, #AA076B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    
                
                }

                .thingame {
                    position: relative;
                }

                a {
                    text-transform: uppercase;
                    text-decoration: none;
                    z-index: 1;
                    color: white;
                }

                a:hover {
                    color: white;
                }

                a[aria-selected="true"] {
                    color: white;
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
