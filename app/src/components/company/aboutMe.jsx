import React from "react"
import Container from "./container"
import Image from "../image"
import { useStaticQuery, graphql } from "gatsby"
import { FiLink, FiMail } from "react-icons/fi"

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
                        value={() => data.sanityPersonalDetails.twitter}
                        icon={() => <FiLink />}
                    />

                    <Item
                        name="GitHub"
                        icon={() => <FiLink />}
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
                </ul>
            </section>

            <style jsx>{`
                section {
                    display: grid;
                    grid-template-rows: auto auto;
                    justify-items: center;
            }

                ul {
                    width: 100%;
                }

                @media (min-width: 960px) {
                    section {
                        grid-template-columns: 50% 1fr;
                        justify-items: left;
                        align-items: center;
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
                width: 100%;
                text-transform: lowercase;
                letter-spacing: 1px;
                border-bottom: 1px solid #ccc;
                line-height: 30px;
                margin-bottom: 20px;
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

// const ItemLink = ({ Name, Value }) => (
//     <MyDetailsListItem>
//         <span>{Name}</span>
//         <a rel="noopener noreferrer" target="_blank" href={Value}>
//             {Value} <FiLink />
//         </a>
//     </MyDetailsListItem>
// )

// const ItemMail = ({ Name, Value }) => (
//     <MyDetailsListItem>
//         <span>{Name}</span>
//         <a href={"mailto:" + Value}>
//             {Value} <FiMail />
//         </a>
//     </MyDetailsListItem>
// )
