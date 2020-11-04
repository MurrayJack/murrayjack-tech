import React from "react"
import { Text } from "./Text"
import { VStack } from "./Stack"

export const SkillList = ({ data }) => {
    return (
        <VStack gap="small">
            <Text as="h3">Key Skills</Text>

            <VStack gap="small">
                {data.techStack2.map((e, i) => (
                    <SkillItem key={e.name} {...e} />
                ))}
            </VStack>
        </VStack>
    )
}

export const SkillItem = ({ name, percent }) => {
    return (
        <>
            <VStack gap="xxSmall">
                <Text as="small">{name}</Text>
                <div className="line" style={{ width: `${percent}%` }} />
            </VStack>

            <style jsx>{`
                .line {
                    height: 2px;
                    background: var(--main-accent-color);
                }
            `}</style>
        </>
    )
}
