import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";
import Container from "./container";

const HeaderStyled = styled.header`
  background-color: #2f3c4f;
`

const H1 = styled.h1`
  color: #47a0b7;
  font-size: 20px;
`



const Header = ({ siteTitle }) => (
<HeaderStyled>
    <Container>
      <H1>
          {siteTitle}
      </H1>
    </Container>
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
