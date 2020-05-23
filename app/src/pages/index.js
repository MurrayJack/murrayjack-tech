import React from "react"
import styled from "styled-components"

import "../../static/normalize.css";

export default () => <div>
    <div style={{ display: "grid", alignItems: "center", justifyItems: "center", height: "100vh", gridGap: "24px", gridTemplateRows: "100px 1fr 1fr", background: "black", color: "white" }}>
        <div style={{ color: "white", fontSize: "1.6em" }} >Murray Jack </div>
        <div>
            <Link href="./resume">Resume</Link>
            <Link href="./blog">Blog</Link>
        </div>
        <div></div>
    </div>
</div>

const Link = styled.a`
    color: white;
    font-size: 1.6em;
    text-decoration: none;
    margin: 16px;
    border: 1px solid whitesmoke;
    padding: 32px;
    width: 200px;
    display: inline-block;
    text-align: center;

    &:hover {
        color: black;
        background: white;
    }
`