import * as React from "react"

export const SiteSection = ({ children }) => {
    return (
        <>
            <section>
                <div>{children}</div>
            </section>
            <style jsx>{`
                div {
                    // width: 960px;
                    margin: 0 auto;
                }
            `}</style>
        </>
    )
}
