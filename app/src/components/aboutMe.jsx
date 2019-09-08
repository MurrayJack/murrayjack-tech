import React from "react"
import styled from "styled-components"
import Container from "./container"
import Image from "../components/image"
import { useStaticQuery, graphql } from "gatsby"
import { FiLink } from "react-icons/fi"

const MyDetailsList = styled.ul`
  margin-top: 40px;

  @media (min-width: 960px) {
    margin-top: 0;
  }
`

const MyDetailsListItem = styled.li`
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid #ccc;
  line-height: 30px;
  margin-bottom: 20px;
  font-weight: bold;
  display: grid;
  align-items: center;
  align-content: center;

  > span {
    display: inline-block;
    font-weight: normal;
    margin-right: 5px;

    &:after {
      content: ":";
    }
  }

  > a {
    color: white;
    text-decoration: none;
    line-height: 30px;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
  }

  @media (min-width: 960px) {
    grid-template-columns: 160px auto;
  }
`

const Grid = styled.section`
  display: grid;
  grid-template-rows: auto auto;
  justify-items: center;

  @media (min-width: 960px) {
    grid-template-columns: 50% 50%;
    justify-items: left;
  }
`

const aboutMe = () => {
  const data = useStaticQuery(graphql`
    {
      sanityPersonalDetails {
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
          <ItemMail Name="Email" Value={data.sanityPersonalDetails.email} />
          <Item Name="Twitter" Value={data.sanityPersonalDetails.twitter} />
          <ItemLink Name="GitHub" Value={data.sanityPersonalDetails.github} />
        </MyDetailsList>
      </Grid>
    </Container>
  )
}

const Item = ({ Name, Value }) => (
  <MyDetailsListItem>
    <span>{Name}</span>
    {Value}
  </MyDetailsListItem>
)

const ItemLink = ({ Name, Value }) => (
  <MyDetailsListItem>
    <span>{Name}</span>
    <a rel="noopener noreferrer" target="_blank" href={Value}>
      {Value} <FiLink />
    </a>
  </MyDetailsListItem>
)

const ItemMail = ({ Name, Value }) => (
  <MyDetailsListItem>
    <span>{Name}</span>
    <a href={"mailto:" + Value}>
      {Value} <FiLink />
    </a>
  </MyDetailsListItem>
)

export default aboutMe
