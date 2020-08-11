import * as React from "react"

export const SiteGrid = ({ children, cols = 1 }) => {
    return (
        <>
            <div>{children}</div>
            <style jsx>{`
                div {
                    display: grid;
                    grid-gap: 24px;
                    grid-template-columns: repeat(${cols}, 1fr);
                }
            `}</style>
        </>
    )
}
