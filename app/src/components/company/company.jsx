import React from "react"
import styled from "styled-components"
import { FiCalendar } from "react-icons/fi"
import { SkillList } from "../skills/SkillList"

const DateRange = ({ Start, End }) => (
    <StyledDate>
        <FiCalendar /> {Start} - {End || "Present"}
    </StyledDate>
)

const JobPoints = ({ jobPoints }) => (
    <>
        <ul>
            {jobPoints.map((e, i) => (
                <li key={i}>{e}</li>
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

export default ({ data }) => (
    <Company>
        <Wrapper>
            <div>
                <Header>{data.title}</Header>
                <CompanyDeets>
                    <div>
                        <a href={data.url}>{data.companyName}</a>:{" "}
                        {data.location}
                    </div>
                    <DateRange Start={data.startDate} End={data.endDate} />
                </CompanyDeets>

                <p>{data.tagLine}</p>

                <JobPoints jobPoints={data.jobPoints} />
            </div>
            <div>
                <SkillList useNewTechStack={data.useNewTechStack} data={data} />
            </div>
        </Wrapper>
    </Company>
)

const Wrapper = styled.div`
    display: grid;

    @media (min-width: 960px) {
        grid-template-columns: 3fr 1fr;
        grid-gap: 80px;
    }
`

const Company = styled.section`
    padding-bottom: 4em;
    margin-bottom: 2em;
`

const Header = styled.header`
    text-transform: uppercase;
    color: var(--main-accent-color);
    font-weight: bold;
    font-size: 20px;
    line-height: 1.6em;
`

const CompanyDeets = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    margin: 10px 0;
    font-weight: bold;
    align-items: center;

    a {
        text-decoration: none;
        border-bottom: 1px solid currentColor;
    }
`

const StyledDate = styled.div`
    padding: 8px 10px;
    margin: 4px;
    color: var(--main-color-inv);
    background-color: var(--main-color2);
    border-radius: 3px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 20px auto;
    align-items: center;
    font-size: var(--font-small);
    white-space: nowrap;
`
