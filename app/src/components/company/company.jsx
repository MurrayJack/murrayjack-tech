import React from "react"
import styled from "styled-components"
import { FiCalendar } from "react-icons/fi"
import theme from "../../theme"

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
                color: var(--main-color);
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
                <h3>Key Skills</h3>
                <SkillList>
                    {data.techStack.sort().map((e, i) => (
                        <SkillItem key={i}>{e}</SkillItem>
                    ))}
                </SkillList>
            </div>
        </Wrapper>
    </Company>
)

const Wrapper = styled.div`
    display: grid;

    @media (min-width: 960px) {
        grid-template-columns: 70% 30%;
        grid-gap: 80px;
    }
`

const Company = styled.section`
    padding-bottom: 4em;
    margin-bottom: 2em;
`

const Header = styled.header`
    text-transform: uppercase;
    color: var(--main-header-color2);
    font-weight: bold;
    font-size: 20px;
    line-height: 1.6em;
`

const SkillList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
`

const SkillItem = styled.li`
    display: inline-block;
    padding: 8px 10px;
    margin: 4px;
    color: var(--main-color2);
    background-color: var(--main-bg-color2);
    border-radius: 3px;
    font-size: var(--font-small);
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
    color: var(--main-color2);
    background-color: var(--main-bg-color2);
    border-radius: 3px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 20px auto;
    align-items: center;
    font-size: ${theme.font.Small};
`
