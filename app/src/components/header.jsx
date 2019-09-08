import React from "react"
import styled from "styled-components"
import Scrollspy from "react-scrollspy"

const HeaderStyled = styled.header`
  background-color: #2f3c4f;
  position: sticky;
  top: 0;
  z-index: 1;
  text-transform: uppercase;
`

const Section = styled.section`
  max-width: 100%;
  margin: 0 auto;
  padding: 1.45rem 20px;

  @media (min-width: 960px) {
    max-width: 960px;
    padding: 1.45rem 0;
  }
`

const H1 = styled.h1`
  color: #47a0b7;
  font-size: 20px;
  text-align: center;

  @media (min-width: 960px) {
    text-align: left;
  }
`

const Wrapper = styled.div`
  li {
    display: inline-block;
    color: white;
    padding-left: 20px;
  }

  a {
    color: white;
    text-decoration: none;
    transition: all linear 0.25s;
  }

  li.is-current {
    a {
      font-weight: bold;
      color: #47a0b7;
    }
  }

  li:hover {
    a {
      font-weight: bold;
      color: #47a0b7;
    }
  }

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
  }
`

const ScrollSpy = styled(Scrollspy)`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;

  @media (min-width: 960px) {
    text-align: left;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <Section>
      <Wrapper>
        <H1>{siteTitle}</H1>
        <ScrollSpy
          offset={-101}
          items={["aboutme1", "experience1", "contact1"]}
          currentClassName="is-current"
        >
          <li>
            <a href="#aboutme">About Me</a>
          </li>
          <li>
            <a href="#experience">Work Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ScrollSpy>
      </Wrapper>
    </Section>
  </HeaderStyled>
)

export default Header
