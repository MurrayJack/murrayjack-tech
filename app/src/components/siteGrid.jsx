import * as React from "react"

export const SiteGrid = ({ children }) => {
    return (
        <>
            <div>{children}</div>
            <style jsx>{`
                div {
                    display: grid;
                    grid-gap: 16px;
                }
            `}</style>
        </>
    )
}
