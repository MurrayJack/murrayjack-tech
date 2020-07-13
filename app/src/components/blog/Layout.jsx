import React from "react"
import SEO from "../seo"

export default function Layout({ children }) {
    return (
        <>
            <SEO title="Blogs" description="Murray Jack Blog" />

            <main>
                <header>
                    <h4>murrayjack.tech</h4>
                    {/* <hr /> */}
                </header>

                <aside>
                    <div>Blog</div>
                    <div>Blog</div>
                    <div>Blog</div>
                </aside>

                <section>
                    {children}
                </section>
            </main>

            <style jsx>{`
                main {
                    display: grid;
                    grid-template-columns: 200px 1fr;
                    grid-template-rows: 50px 1fr;
                    grid-template-areas: "aside header" "aside section" 
                }

                header {
                    grid-area: header;
                }

                aside {
                    grid-area: aside;
                }

                section {
                    grid-area: section
                }

                ul {
                    padding: 0;
                    margin: 0;
                    list-style: none;
                }

                li {
                    display: inline-block;
                }

                hr {
                    border-color: var(--main-bg-color2);
                }
            `}</style>
        </>
    )
}

