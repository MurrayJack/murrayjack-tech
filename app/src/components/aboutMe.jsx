import React from "react"
import styled from "styled-components";
import Container from "./container";
import Image from "../components/image";
import { useStaticQuery, graphql } from "gatsby";

const MyDetailsList = styled.ul`
    margin-top: 40px;

    @media (min-width: 960px) {
        margin-top:0;
    }
`

const MyDetailsListItem = styled.li`
    text-transform: uppercase;
    letter-spacing: 1.0px;
    border-bottom: 1px solid #ccc;
    line-height: 30px;
    margin-bottom: 20px;
    font-weight: bold;

    >span {
        display: inline-block;
        font-weight: normal;
        margin-right: 5px;

        &:after {
            content: ':'
        }
    }

    @media (min-width: 960px) { 
        > span {
            width: 160px;
        }   
    }
`

const Grid = styled.section`
    @media (min-width: 960px) {
        display: grid;
        grid-template-columns: 50% 50%;
    }
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
          github
          twitter
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
                    <Item Name="Twitter" Value={data.sanityPersonalDetails.twitter} />
                    <Item Name="GitHub" Value={data.sanityPersonalDetails.github} />
                </MyDetailsList>
            </Grid>
        </Container>
    )
}

const Item = ({ Name, Value }) => <MyDetailsListItem><span>{Name}</span>{Value}</MyDetailsListItem>

export default aboutMe