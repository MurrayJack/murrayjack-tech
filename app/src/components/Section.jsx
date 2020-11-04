import React from "react"

export const Section = ({ children, center, color }) => {
    return (
        <>
            <section>
                <div>{children}</div>
            </section>
            <style jsx>{`
                section {
                    background: ${color}
                }

                div {
                    margin: 0 auto;
                    max-width: ${center ? "1100px": "inherit"};
                }
            `}</style>
        </>
    )
}
