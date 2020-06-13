import React from "react"
import Container from "./container"
import Image from "../image"
import { useStaticQuery, graphql } from "gatsby"
import { FiLink, FiMail, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi"

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

    return (
        <Container
            ID="aboutme"
            Header="About Me"
            Info={data.sanityPersonalDetails.personalBlurb}
        >
            <section>
                <div>
                    <Image />
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

                    <Item
                        name="Email"
                        value={() => (
                            <a
                                href={
                                    "mailto:" + data.sanityPersonalDetails.email
                                }
                            >
                                {data.sanityPersonalDetails.email}
                            </a>
                        )}
                        icon={() => <FiMail />}
                    />

                    <Item
                        name="Twitter"
                        value={() => (
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href={data.sanityPersonalDetails.twitter}
                            >
                                {data.sanityPersonalDetails.twitterName}
                            </a>
                        )}
                        icon={() => <FiTwitter />}
                    />

                    <Item
                        name="GitHub"
                        icon={() => <FiGithub />}
                        value={() => (
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href={data.sanityPersonalDetails.github}
                            >
                                {data.sanityPersonalDetails.github}
                            </a>
                        )}
                    />

                    <Item
                        name="LinkedIn"
                        icon={() => <FiLinkedin />}
                        value={() => (
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href={data.sanityPersonalDetails.linkedIn}
                            >
                                {data.sanityPersonalDetails.linkedIn}
                            </a>
                        )}
                    />
                </ul>
            </section>

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

const Item = ({ name, value, icon }) => (
    <>
        <li>
            <span>{name}:</span>
            <span>{value()}</span>
            <span>{icon && icon()}</span>
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
                align-content: center;
                display: grid;
                grid-template-columns: 150px 1fr auto;
                grid-gap: 8px;
            }
        `}</style>
    </>
)
