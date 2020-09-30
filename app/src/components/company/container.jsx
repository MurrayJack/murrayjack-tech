import React from "react"
import { H2, P } from "../Styles"

export default ({ children, Header, Info, Info2, ID, className }) => (
    <>
        <div id={ID} className={className}>
            <article>
                <H2>{Header}</H2>
                {Info && <p>{Info}</p>}
                {Info2 && <p>{Info2}</p>}

                {children}
            </article>
        </div>
        <style jsx>{`
            article {
                padding: 1.45rem 20px;
                text-align: center;
            }

            p {
                padding: 0;
                margin: 0;
                line-height: 1.8em;
                margin-bottom: 2em;
            }

            p:last-of-type {
                margin-bottom: 4em;
            }

            @media (min-width: 960px) {
                article {
                    max-width: 960px;
                    margin: 0 auto;
                    padding: 1.45rem 0;
                    text-align: left;
                }
            }
        `}</style>
    </>
)
