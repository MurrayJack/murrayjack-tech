import React from "react"

import "../../static/normalize.css";

export default () => <div>
    <div style={{ display: "grid", alignItems: "center", justifyItems: "center", height: "100vh", gridGap: "24px", gridTemplateRows: "100px 1fr 1fr", background: "black", color: "white" }}>
        <div style={{ color: "white", fontSize: "1.6em" }} href="./resume">Murray Jack </div>
        <div>
            <a style={{ color: "white", fontSize: "1.6em" }} href="./resume">Resume</a>
            <span> | </span>
            <a style={{ color: "white", fontSize: "1.6em" }} href="./blog">Blog</a>
        </div>
        <div></div>
    </div>
</div>