import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";
import Scrollspy from 'react-scrollspy'

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

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        display: inline-block;
        color: white;
        padding-left: 20px;
    }

    a {
        color: white;
        text-decoration: none;
    }

    li.is-current {
        font-weight: bold;
        
        a {
            color: #47a0b7;
        }
    }
`;

const SectionList = styled.ul`
    
`;

const SectionItem = styled.li`
    
`;

const Header = ({ siteTitle }) => (
    <HeaderStyled>
        <Section>
            <Wrapper>
                <H1>
                    {siteTitle}
                </H1>
                <Scrollspy offset={-101} items={ ['aboutme1', 'experience1', 'contact1'] } currentClassName="is-current">
                    <li><a href="#aboutme">About Me</a></li>
                    <li><a href="#experience">Work Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </Scrollspy>
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
