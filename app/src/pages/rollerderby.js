import React, { useState } from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { DerbyDetails } from "../components/derby/derbyDetails"
import { DerbyCounts } from "../components/derby/derbyCounts"
import { SearchInput } from "../components/searchInput"
import { DerbyGamesList } from "../components/derby/derbyGamesList"

const NotFoundPage = () => {
    const data = useStaticQuery(graphql`
        {
            allSanityTournament(sort: { fields: date, order: DESC }) {
                nodes {
                    name
                    date
                    location
                    image {
                        asset {
                            fluid(maxWidth: 60) {
                                srcSet
                            }
                        }
                    }

                    game {
                        name
                        homeLeague {
                            name
                        }
                        homeTeam
                        visitingLeague {
                            name
                        }
                        visitingTeam
                        position
                        type
                    }
                }
            }
        }
    `)

    const counts = {
        total: 0,
    }

    data.allSanityTournament.nodes.forEach(t => {
        t.game.forEach(g => {
            if (counts[`${g.type}_${g.position}`] === undefined) {
                counts[`${g.type}_${g.position}`] = 0
            }

            if (counts[`${g.type}_total`] === undefined) {
                counts[`${g.type}_total`] = 0
            }

            counts[`${g.type}_${g.position}`]++
            counts[`${g.type}_total`]++
            counts["total"]++
        })
    })

    const [tournaments, setTournaments] = useState(
        data.allSanityTournament.nodes
    )

    const handleOnSearch = search => {
        const regex = new RegExp(search, "i")

        setTournaments(
            data.allSanityTournament.nodes.filter(
                e =>
                    regex.test(e.location) ||
                    regex.test(e.name) ||
                    regex.test(e.date)
            )
        )
        return Promise.resolve()
    }

    return (
        <div>
            <SEO title="Roller Derby" description="Skatespeare Roller Derby" />

            <main>
                <h1>Skatespeare - Game History</h1>

                <DerbyDetails />

                <DerbyCounts counts={counts} />

                <h2>Game History</h2>

                <SearchInput onSearch={handleOnSearch} />

                <DerbyGamesList data={tournaments} />
            </main>

            <style jsx>{`
                main {
                    padding: 24px;
                    display: grid;
                    grid-gap: 16px;
                }
            `}</style>
        </div>
    )
}

export default NotFoundPage
