import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { HStack, VStack } from "./Stack"
import { Text } from "./Text"
import { MyImage } from "./MyImage"

export const AboutMe = () => {
    const data = useStaticQuery(graphql`
        {
            sanityPersonalDetails {
                name
                personalBlurb
                personalBlurb2
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
        <VStack gap="medium">
            <Text as="h2">About Me</Text>

            <HStack columns="300px 1fr" gap="large">
                <div>
                    <MyImage data={data} />
                </div>
                <div>
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
                    <VStack gap="medium">
                        <Text as="p">
                            {data.sanityPersonalDetails.personalBlurb}
                        </Text>
                        <Text as="p">
                            {data.sanityPersonalDetails.personalBlurb2}
                        </Text>
                    </VStack>
                </div>
            </HStack>
        </VStack>
    )
}

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
                // line-height: 32px;
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
                    grid-template-rows: inherit;
                    grid-template-columns: 150px 1fr;
                    grid-gap: 8px;
                }
            }
        `}</style>
    </>
)
