import React from "react"
import Container from "./container"
import MurrayJack from "../images/MurrayJack"
import { useStaticQuery, graphql } from "gatsby"
import { FiMail, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi"

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
            className="aboutMe"
        >
            <section>
                <div className="me">
                    <MurrayJack />
                    <div>
                        <div>
                            <a
                                href={
                                    "mailto:" + data.sanityPersonalDetails.email
                                }
                                aria-label="Email Me"
                            >
                                <FiMail />
                            </a>
                        </div>
                        <div>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href={data.sanityPersonalDetails.twitter}
                                aria-label="Link to twitter"
                            >
                                <FiTwitter />
                            </a>
                        </div>
                        <div>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href={data.sanityPersonalDetails.github}
                                aria-label="Link to GitHub"
                            >
                                <FiGithub />
                            </a>
                        </div>
                        <div>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href={data.sanityPersonalDetails.linkedIn}
                                aria-label="Linked In"
                            >
                                <FiLinkedin />
                            </a>
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

                .me > div > div > a {
                    height: 40px;
                    width: 40px;
                    display: grid;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: var(--main-color2);
                }

                .me > div > div > a:hover {
                    background: var(--main-accent-color);
                    color: white;
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
