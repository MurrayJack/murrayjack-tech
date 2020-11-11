import React from "react"
import { Header } from "./Header"
import { VStack } from "./Stack"
import { Section } from "./Section"
import { Text } from "./text"

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
