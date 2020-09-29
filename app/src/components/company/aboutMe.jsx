import React from "react"
import Container from "./container"
import MurrayJack from "../images/MurrayJack"
import { useStaticQuery, graphql } from "gatsby"
import { FiMail, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi"
import { motion, AnimateSharedLayout } from "framer-motion"
import { useState } from "react"

export default () => {
    const data = useStaticQuery(graphql`
        {
            sanityPersonalDetails {
                name
                personalBlurb
                email
                location
                visa
                github
                twitter
                twitterName
                linkedIn
            }
        }
    `)

    const [socialItem, setSocialItem] = useState("")
    let timeout;

    const handleOnMouseDeBounce = () => {
        timeout = setTimeout(() => {
            setSocialItem("")
        }, 10)
    }

    return (
        <Container
            ID="aboutme"
            Header="About Me"
            Info={data.sanityPersonalDetails.personalBlurb}
            className="aboutMe"
        >
            <AnimateSharedLayout>
                <section onPointerOver={() => clearTimeout(timeout)} onPointerOutCapture={handleOnMouseDeBounce}>
                    <div className="me">
                        <MurrayJack />
                        <div>
                            <div>
                                <SocialItem
                                    href={
                                        "mailto:" +
                                        data.sanityPersonalDetails.email
                                    }
                                    label="Email Me"
                                    onHover={() => setSocialItem("Email Me")}
                                    selected={socialItem}
                                    icon={() => <FiMail />}
                                />
                            </div>
                            <div>
                                <SocialItem
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href={data.sanityPersonalDetails.twitter}
                                    label="Link to twitter"
                                    onHover={() =>
                                        setSocialItem("Link to twitter")
                                    }
                                    selected={socialItem}
                                    icon={() => <FiTwitter />}
                                />
                            </div>
                            <div>
                                <SocialItem
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href={data.sanityPersonalDetails.github}
                                    label="Link to GitHub"
                                    onHover={() =>
                                        setSocialItem("Link to GitHub")
                                    }
                                    selected={socialItem}
                                    icon={() => <FiGithub />}
                                />
                            </div>
                            <div>
                                <SocialItem
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href={data.sanityPersonalDetails.linkedIn}
                                    label="Linked In"
                                    onHover={() => setSocialItem("Linked In")}
                                    selected={socialItem}
                                    icon={() => <FiLinkedin />}
                                />
                            </div>
                        </div>
                    </div>
                    <ul>
                        <Item
                            name="Name"
                            value={() => data.sanityPersonalDetails.name}
                        />
                        <Item
                            name="Visa"
                            value={() => data.sanityPersonalDetails.visa}
                        />

                        <Item
                            name="Located"
                            value={() => data.sanityPersonalDetails.location}
                        />
                    </ul>
                </section>
            </AnimateSharedLayout>

            <style jsx>{`
                section {
                    display: grid;
                    grid-template-rows: auto auto;
                    justify-items: center;
                    grid-gap: 40px;
                }

                ul {
                    padding: 0;
                    margin: 0;
                }

                .me {
                    display: grid;
                }

                .me > div {
                    margin-top: -20px;
                    z-index: 1;
                    display: grid;
                    grid-auto-flow: column;
                    gap: 16px;
                    justify-content: center;
                }

                @media (min-width: 960px) {
                    section {
                        grid-template-columns: auto 1fr;
                        justify-items: left;
                        align-items: top;
                    }
                }
            `}</style>
        </Container>
    )
}

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
}

const SocialItem = ({ href, label, icon, selected, onHover, ...rest }) => (
    <>
        <a {...rest} href={href} aria-label={label} onPointerOver={onHover}>
            {icon()}
            {selected === label && (
                <motion.div
                    layoutId="outline"
                    className="outline"
                    initial={false}
                    transition={spring}
                ></motion.div>
            )}
        </a>

        <style global>{`
            .outline {
                position: absolute;
                top: -5px;
                left: -5px;
                right: -5px;
                bottom: -5px;
                border: 2px solid var(--main-accent-color);
                border-radius: 50%;
            }
        `}</style>

        <style jsx>{`
            a {
                height: 40px;
                width: 40px;
                display: grid;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: var(--main-color2);
                position: relative;
                transition: background-color linear 0.4s;
            }

            a:hover {
                background: var(--main-accent-color);
                transition: background-color linear 0.2s;
                color: white;
            }
        `}</style>
    </>
)

const Item = ({ name, value }) => (
    <>
        <li>
            <span>{name}:</span>
            <span>{value()}</span>
        </li>

        <style jsx>{`
            li {
                text-transform: lowercase;
                letter-spacing: 1px;
                border-bottom: 1px solid var(--text-border-color);
                line-height: 32px;
                margin-bottom: 16px;
                font-weight: bold;
                display: grid;
                align-items: center;
                align-content: top;
                display: grid;
                grid-template-rows: 10px 50px;
                grid-gap: 0px;
            }

            @media (min-width: 960px) {
                li {
                    align-content: center;
                    grid-template-columns: 150px 1fr;
                    grid-gap: 8px;
                }
            }
        `}</style>
    </>
)
