import React from "react"

export const Tag = ({ children }) => (
    <>
        <div>
            {children}
        </div>

        <style jsx>{`
            div {
                display: inline-block;
                padding: 4px 10px;
                margin: 4px;
                background-color: #d8dbdb;
                border-radius: 3px;
                line-height: 1.4em;
                font-size: var(--font-small);
            }
        `}</style>
    </>
);
