import React from "react"

export const Text = ({ as, children }) => {
    return (
        <>
            {as === "h1" && <h1>{children}</h1>}
            {as === "h2" && <h2>{children}</h2>}
            {as === "h3" && <h3>{children}</h3>}
            {as === "h4" && <h4>{children}</h4>}
            {as === "p" && <p>{children}</p>}
            {as === "small" && <small>{children}</small>}
            
            <style jsx>{`
                small {
                    font-size: var(--font-small);
                    line-height: 1.6em;
                    letter-spacing: 0.02em;
                    color: var(--text-color1);
                }

                p {
                    font-size: var(--font-normal);
                    line-height: 1.6em;
                    letter-spacing: 0.02em;
                    color: var(--text-color1)
                }

                h1 {
                    color: var(--main-accent-color);
                    letter-spacing: 0.3px;
                    font-size: var(--font-xlarge);
                    font-weight: normal;
                    padding: 0;
                    margin: 0;
                }

                h2 {
                    letter-spacing: 0.3px;
                    font-size: var(--font-large);
                    font-weight: normal;
                    text-transform: uppercase;
                    color: var(--main-color1);
                    padding: 0;
                    margin: 0;
                }

                h3 {
                    letter-spacing: 0.3px;
                    font-size: var(--font-large);
                    font-weight: normal;
                    text-transform: uppercase;
                    color: var(--main-color1);
                    padding: 0;
                    margin: 0;
                }

                h4 {
                    letter-spacing: 0.3px;
                    font-size: var(--font-large);
                    font-weight: normal;
                    padding: 0;
                    margin: 0;
                }
                

            `}</style>
        </>
    )
}
