import React from "react"

export const Tag = ({ children }) => (
    <>
        <span>
            {children}
        </span>

        <style jsx>{`
            span {
                padding: 8px 10px;
                margin: 4px;
                color: var(--main-color2);
                background-color: var(--main-bg-color2);
                border-radius: 3px;
                font-weight: bold;
                display: grid;
                grid-template-columns: 20px auto;
                align-items: center;
                font-size: var(--font-small);
            }
        `}</style>
    </>
);
