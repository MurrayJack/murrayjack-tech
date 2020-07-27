import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { SanityImage } from "../components/sanityImage"

export default () => {
    const data = useStaticQuery(graphql`
        {
            allSanityProjects {
                nodes {
                    published
                    projectName
                    description
                    image {
                        asset {
                            fluid {
                                srcSet
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <>
            <main>
                <SEO
                    title="Projects"
                    description="Murray Jack List of Projects"
                />

                <header>
                    <div>Murray Jack</div>
                    <div>Home | Resume | Projects | Roller Derby | Blog</div>
                </header>

                <h1>Projects</h1>

                {data.allSanityProjects.nodes.map(e => (
                    <article>
                        <div>
                            <h3>{e.projectName}</h3>
                            <p>{e.description}</p>
                        </div>
                        <SanityImage image={e.image} />
                    </article>
                ))}
            </main>
            <style jsx>{`
                main {
                    width: 920px;
                    margin: 0 auto;
                }

                article {
                    border: 1px solid var(--main-bg-color2);
                    display: grid;
                    grid-auto-flow: column;
                    padding: 8px;
                    border-radius: 4px;
                }

                h3 {
                    padding: 0;
                    margin: 0;
                }
            `}</style>
        </>
    )
}
