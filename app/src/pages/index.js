import React from "react"
import LargeLink from "../components/general/LargeLink"

export default () => {
    return (
        <>
            <main>
                <header>
                    <h1>Murray Jack </h1>
                    <hr></hr>
                </header>

                <article>
                    <LargeLink href="./resume" caption="My Resume"></LargeLink>

                    <LargeLink href="./blog" caption="My Blog">
                        Im trying to do some blogging, appologies i havent done
                        a lot so far.
                    </LargeLink>

                    <LargeLink href="./rollerderby" caption="My Roller Derby">
                        Information on my referee career within the Melbourne
                        Roller Derby community.
                    </LargeLink>
                </article>
            </main>

            <style jsx>{`
                main {
                    height: 100vh;
                    display: grid;
                    grid-template-rows: 120px 1fr 1fr;
                    grid-gap: 40px;
                    align-items: center;
                    justify-items: center;
                }

                h1 {
                    padding: 0;
                    margin: 0;
                }

                article {
                    display: grid;
                    grid-auto-flow: row;
                    grid-gap: var(--gaps-xxlarge);
                }
            `}</style>
        </>
    )
}
