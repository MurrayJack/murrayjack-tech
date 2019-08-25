import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: ${(props) => props.Color};
`

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 1.45rem 0;
`

export default ({ children, Color }) =>
  <Wrapper Color={Color}>
    <Container>
      {children}
    </Container>
  </Wrapper>