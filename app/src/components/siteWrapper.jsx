import React from "react"
import { Header } from "./Header"
import { VStack } from "../components/Stack"
import { Section } from "../components/Section"
import { Text } from "../components/text"

export default ({ name, children, title }) => {
    return (
        <>
            <Header name={name} />

            <VStack pad="xLarge">
                <Section center>
                    <VStack gap="xLarge">
                        {title && <Text as="h1">{title}</Text>}

                        {children}
                    </VStack>
                </Section>
            </VStack>
        </>
    )
}
