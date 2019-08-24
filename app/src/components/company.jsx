import React from "react"
import styled from "styled-components";

const Company = styled.section`
    padding-bottom: 4em;
    border-bottom: 1px solid deeppink;
    margin-bottom: 2em;
`;

const Header = styled.header`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr 1fr;
    line-height: 1.6em;
    font-size: 18px;
    letter-spacing: -0.14px
    margin-bottom: 2em;
`

export default ({ data }) =>
    <Company>
        <Header>
            <div>{data.companyName}</div>
            <div><a href={data.url}>{data.url}</a></div>
            <div>{data.title}</div>
            <div>{data.startDate} - {data.endDate}</div>
        </Header>

        <p>{data.location}</p>

        <ul>{data.techStack.map((e) => <li>{e}</li>)}</ul>

        <p>{data.tagLine}</p>

        <ul>
            {data.jobPoints.map((e) => <li>{e}</li>)}
        </ul>

    </Company>


