import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"

const Page = styled.div`
  background-color: #2f3c4f;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  > main {
    display: inline-block;
    background-color: white;
    position: fixed;
    top: 30%;
    left: calc(50% - 200px);
    width: 400px;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 5px;
  }
`

const NotFoundPage = () => (
  <Page>
    <SEO title="Thank You!" description="Murray Jack Resume" />

    <main>Roller Derby</main>
  </Page>
)

export default NotFoundPage
