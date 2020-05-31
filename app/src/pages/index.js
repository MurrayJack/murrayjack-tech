import React from "react"

import "../styles/normalize.css";
import "../styles/theme.css"
import css from "../styles/main.module.css"

export default () => (
    <div className={css.main}>
        <header>
            <h1>Murray Jack </h1>
        </header>
        <article>
            <a href="./resume">Resume</a>
            <a href="./blog">Blog</a>
            <a href="./rollerderby">Roller Derby</a>
        </article>
    </div>
)