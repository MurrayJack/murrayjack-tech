import React from "react"
import styled from "styled-components";

const Company = styled.section`
    padding-bottom: 100px;
`;

const Header = styled.header`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr 1fr;
`

export default ({ data }) =>
    <Company>
        <Header>
            <div>{data.companyName}</div>
            <div>URL</div>
            <div>TITLE</div>
            <div>{data.startDate} - {data.endDate}</div>
        </Header>

        <div>{data.location}</div>

        <div>chunk</div>

        <div>
            sadsadjklsajdlas
        </div>

    </Company>


