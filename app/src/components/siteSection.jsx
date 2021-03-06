import * as React from "react"

export const SiteSection = ({ children }) => {
    return (
        <>
            <section>
                <div>{children}</div>
            </section>
            <style jsx>{`
                div {
                    margin: 0 auto;
                    border: 1px solid deeppink;
                }
            `}</style>
        </>
    )
}
