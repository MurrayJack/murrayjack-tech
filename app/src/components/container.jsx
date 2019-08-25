import React from "react"
import styled from "styled-components"
import { H2, P } from "./Styles";

const Wrapper = styled.div`
  background-color: ${(props) => props.BGColor};
  color: ${(props) => props.Color};
`

const Article = styled.article`
  max-width: 960px;
  margin: 0 auto;
  padding: 1.45rem 0;
  padding-bottom: 150px;
`

export default ({ children, BGColor, Color, Header, Info }) =>
    <Wrapper BGColor={BGColor} Color={Color}>
        <Article>
            <H2>{Header}</H2>
            <P>{Info}</P>

            {children}
        </Article>
    </Wrapper>