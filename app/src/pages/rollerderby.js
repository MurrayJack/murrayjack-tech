import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { DerbyDetails } from "../components/derbyDetails"
import { DerbyCounts } from "../components/derbyCounts"

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
                        homeTeam
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
            let item = counts[`${g.type}_${g.position}`]

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

    return (
        <div>
            <SEO title="Refume" description="Skatespeare Roller Derby" />

            <main>
                <h1>Skatespeare - Game History</h1>

                <DerbyDetails />

                <DerbyCounts counts={counts} />

                <h2>Game History</h2>

                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th width="130">Date</th>
                            <th>Tournament</th>
                            <th>Location</th>
                            <th>Home Team</th>
                            <th>Visiting Team</th>
                            <th>Type</th>
                            <th>Position</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.allSanityTournament.nodes.map(e =>
                            e.game.map((g, i) => (
                                <tr>
                                    {i === 0 && (
                                        <td
                                            valign="top"
                                            rowSpan={e.game.length}
                                        >
                                            <img
                                                alt={e.game.name}
                                                srcSet={
                                                    e.image?.asset?.fluid
                                                        ?.srcSet
                                                }
                                            />
                                        </td>
                                    )}

                                    {i === 0 && (
                                        <td
                                            valign="top"
                                            rowSpan={e.game.length}
                                        >
                                            {new Date(e.date).toDateString()}
                                        </td>
                                    )}
                                    {i === 0 && (
                                        <td
                                            valign="top"
                                            rowSpan={e.game.length}
                                        >
                                            {e.name}
                                        </td>
                                    )}
                                    {i === 0 && (
                                        <td
                                            valign="top"
                                            rowSpan={e.game.length}
                                        >
                                            {e.location}
                                        </td>
                                    )}
                                    <td>{g.homeTeam}</td>
                                    <td>{g.visitingTeam}</td>
                                    <td>{g.type}</td>
                                    <td>{g.position}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </main>

            <style jsx>{`
                main {
                    padding: 24px;
                    display: grid;
                    grid-gap: 16px;
                }

                table {
                    /* width: 100%; */
                    /* width: 100%; */
                    border-collapse: collapse;
                    font-size: 14px;
                }

                td {
                    padding: 16px;
                    border: 1px solid #ccc;
                    line-height: 1.6em;
                }

                th {
                    text-align: left;
                    padding: 16px;
                    background: #f7f7f7;
                    border: 1px solid #ccc;
                    line-height: 1.6em;
                }

                img {
                    width: 60px;
                }
            `}</style>
        </div>
    )
}

export default NotFoundPage
