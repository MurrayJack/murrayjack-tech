import React from "react"

import "../styles/normalize.css";
import "../styles/theme.css"

export default () => (
    <>
        <main>
            <header>
                <h1>Murray Jack </h1>
            </header>
            <article>
                <a href="./resume">Resume</a>
                <a href="./blog">Blog</a>
                <a href="./rollerderby">Roller Derby</a>
            </article>
        </main>

        <style jsx>{`
            main {
                background-color: var(--main-bg-color);
                color: var(--main-color);
                height: 100vh;
                display: grid;
                grid-template-rows: 80px 1fr 1fr;
                align-items: center;
                justify-items: center;
            }

            h1 {
                padding: 0;
                margin: 0;
                color: var(--main-header-color);
                font-size: var(--font-xlarge);
            }

            article {
                display: grid;
                grid-auto-flow: column;
                grid-gap: var(--gaps-xxlarge);
            }

            a {
                color: var(--main-color);
                font-size: var(--font-xlarge);
                text-decoration: none;
                border: 1px solid var(--main-color);
                padding: var(--gaps-xxlarge);
                text-align: center;
                transition: background ease-in-out 0.2s;
                width: 8em;
            }

            a:hover {
                border-color: transparent;
                background: var(--main-link-hover-bg-color);
                color: var(--main-link-hover-color);
            }

            @media (max-width: 900px) {
                article {
                    grid-auto-flow: row;
                }
            }

        `}</style>

    </>
)