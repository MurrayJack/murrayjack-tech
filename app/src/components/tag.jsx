import React from "react"
import styled from "styled-components"
import theme from "../theme"

export const Tag = ({ children }) => {
   return (
      <SkillItem>
           {children}
      </SkillItem>
  );
};

const SkillItem = styled.div`
    display: inline-block;
    padding: 4px 10px;
    margin: 4px;
    background-color: #d8dbdb;
    border-radius: 3px;
    line-height: 1.4em;
    font-size: ${theme.font.Small};
`