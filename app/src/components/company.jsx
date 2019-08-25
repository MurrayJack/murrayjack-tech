import React from "react"
import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    grid-gap: 80px;
`

const Company = styled.section`
    padding-bottom: 4em;
    margin-bottom: 2em;
`;

const Header = styled.header`
    text-transform: uppercase;
    color: #47a0b7;
    font-weight: bold;
    font-size: 20px;
    line-height: 1.6em;
`

const SkillList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const SkillItem = styled.li`
    display: inline-block;
    padding: 4px 10px;
    margin: 4px;
    background-color: #bbc0c0;
    border-radius: 3px;
    line-height: 1.4em;
`

const CompanyDeets = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    margin: 10px 0;
    font-weight: bold;
    align-items: center;

    a {
        color: currentColor;
        text-decoration: none;
        border-bottom: 1px solid currentColor;
    }
`

const StyledDate = styled.div`
    padding: 4px 10px;
    margin: 4px;
    background-color: #bbc0c0;
    border-radius: 3px;
    font-weight: bold;
`

const JobPoints = styled.ul`
    list-style: circle;
    padding-left: 20px;

    > li {
        list-style: circle;
        padding: 10px 0;
        padding-left: 10px;
    }
`

const DateRange = ({ Start, End }) => <StyledDate>{Start} - {End || "Present"}</StyledDate>

export default ({ data }) =>
    <Company>
        <Wrapper>
            <div>
                <Header>{data.title}</Header>
                <CompanyDeets>
                    <div>
                        <a href={data.url}>{data.companyName}</a>: {data.location}
                    </div>
                    <DateRange Start={data.startDate} End={data.endDate} />
                </CompanyDeets>

                <p>{data.tagLine}</p>

                <JobPoints>
                    {data.jobPoints.map((e, i) => <li key={i}>{e}</li>)}
                </JobPoints>
            </div>
            <div>
                <h3>Key Skills</h3>
                <SkillList>{data.techStack.map((e, i) => <SkillItem key={i}>{e}</SkillItem>)}</SkillList>
            </div>
        </Wrapper>
    </Company>


