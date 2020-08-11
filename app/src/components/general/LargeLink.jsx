import React from "react"

export default ({ href, caption, children }) => <>
    <a href={href}>
        <h4>{caption}</h4>
        <span>{children}</span>
    </a>

    <style jsx>{`
            a {
                text-decoration: none;
                border: 1px solid var(--main-color);
                padding: var(--gaps-xlarge);
                transition: all ease-in-out 0.2s;
                width: 350px;
                display: grid;
                grid-template-rows: 1fr auto;
                grid-gap: var(--gaps-large);
            }

            a h4 {
                font-size: var(--font-xlarge);
                color: var(--main-header-color);
                padding: 0;
                margin: 0;
            }

            a span {
                font-size: var(--font-small);
                line-height: 1.6em;
            }

            a:hover {
                background: var(--main-link-hover-bg-color);
                color: var(--main-link-hover-color);
            }

        `}</style>

</>