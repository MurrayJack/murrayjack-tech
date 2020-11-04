import React from "react"
import { FiCalendar } from "react-icons/fi"
import { SkillList } from "./SkillList"
import { HStack, VStack } from "./Stack"
import { Text } from "./Text"

export const Company = ({ data }) => (
    <HStack columns="3fr 1fr" gap="xLarge">
        <VStack gap="small">
            <Text as="h3">{data.title}</Text>

            <HStack columns="1fr auto">
                <div>
                    <a target="_blank" rel="noopenner noreferrer" href={data.url}>{data.companyName}</a>: {data.location}
                </div>
                <DateRange Start={data.startDate} End={data.endDate} />
            </HStack>

            <Text as="p">{data.tagLine}</Text>

            <JobPoints jobPoints={data.jobPoints} /> 
        </VStack>

        <div>
            <SkillList useNewTechStack={data.useNewTechStack} data={data} />
        </div>
    </HStack>
)

const DateRange = ({ Start, End }) => (
    <HStack columns="auto auto" gap="xSmall">
        <FiCalendar /> {Start} - {End || "Present"}
    </HStack>
)

const JobPoints = ({ jobPoints }) => (
    <>
        <ul>
            {jobPoints.map((e, i) => (
                <li key={i}> <Text as="p">{e}</Text></li>
            ))}
        </ul>
        <style jsx>{`
            ul {
                list-style: circle;
                padding-left: var(--gaps-xlarge);
            }

            li {
                list-style: circle;
                padding: 10px 0;
                padding-left: 10px;
            }
        `}</style>
    </>
)