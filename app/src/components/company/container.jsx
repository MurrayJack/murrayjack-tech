import React from "react"
import { H2, P } from "../Styles"

export default ({ children, Header, Info, Info2, ID, className }) => (
    <>
        <div id={ID} className={className}>
            <article>
                <H2>{Header}</H2>
                <P>{Info}</P>
                {Info2 && <P>{Info2}</P>}

                {children}
            </article>
        </div>
        <style jsx>{`
            article {
                padding: 1.45rem 20px;
                text-align: center;
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
