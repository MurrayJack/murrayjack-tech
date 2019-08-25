import React from "react"
import styled from "styled-components";
import Container from "./container";
import Image from "../components/image";
import { useStaticQuery, graphql } from "gatsby";

const MyDetailsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const MyDetailsListItem = styled.li`
    text-transform: uppercase;
    letter-spacing: 1.0px;
    border-bottom: 1px solid #ccc;
    line-height: 30px;
    margin-bottom: 20px;
    font-weight: bold;

    > span {
        display: inline-block;
        width: 160px;
        font-weight: normal
    }
`

const Grid = styled.section`
    display: grid;
    grid-template-columns: 50% 50%;
`

const aboutMe = () => {
    const data = useStaticQuery(graphql`
    {
        sanityPersonalDetails{
          name
          personalBlurb
          email
          location
          visa
        }
    }  
    `)

    return (
        <Container
            ID="aboutme"
            Color="white"
            BGColor="#47a0b7"
            Header="About Me"
            Info={data.sanityPersonalDetails.personalBlurb}
        >
            <Grid>
                <div>
                    <Image />
                </div>
                <MyDetailsList>
                    <Item Name="Name" Value={data.sanityPersonalDetails.name} />
                    <Item Name="Visa" Value={data.sanityPersonalDetails.visa} />
                    <Item Name="Located" Value={data.sanityPersonalDetails.location} />
                    <Item Name="Email" Value={data.sanityPersonalDetails.email} />
                </MyDetailsList>
            </Grid>
        </Container>
    )
}

const Item = ({ Name, Value }) => <MyDetailsListItem><span>{Name}</span>{Value}</MyDetailsListItem>

export default aboutMe