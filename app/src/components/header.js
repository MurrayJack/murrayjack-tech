import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";

const Section = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding: 1.45rem 0;
`;

const HeaderStyled = styled.header`
  background-color: #2f3c4f;
  position: sticky;
  top:0;
  z-index: 1;
  text-transform: uppercase;
`;

const H1 = styled.h1`
    color: #47a0b7;
    font-size: 20px;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
`;

const SectionList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const SectionItem = styled.li`
    display: inline-block;
    color: white;
    padding-left: 20px;
`;

const Header = ({ siteTitle }) => (
    <HeaderStyled>
        <Section>
            <Wrapper>
                <H1>
                    {siteTitle}
                </H1>
                <SectionList>
                    <SectionItem>About Me</SectionItem>
                    <SectionItem>Work Experience</SectionItem>
                    <SectionItem>Contact</SectionItem>
                </SectionList>
            </Wrapper>
        </Section>
    </HeaderStyled>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
