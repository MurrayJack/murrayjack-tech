import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { DerbyDetails } from "../components/derbyDetails"

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

                <h2>WFTDA ({counts.total} - Games)</h2>

                <table>
                    <tr>
                        <th rowSpan={2}>Skating Positions</th>
                        <th
                            valign="bottom"
                            width="40"
                            align="center"
                            rowSpan={2}
                        >
                            Code
                        </th>
                        <th colSpan={5}>Game Designation</th>
                    </tr>

                    <tr>
                        <th>Champs</th>
                        <th>Playoff</th>
                        <th>Sanc</th>
                        <th>Reg</th>
                        <th>Other</th>
                    </tr>

                    <tr>
                        <th>Head Referee</th>
                        <td align="center">HR</td>
                        <td></td>
                        <td>{counts.Playoff_HR}</td>
                        <td>{counts.Sanc_HR}</td>
                        <td>{counts.Reg_HR}</td>
                        <td>{counts.Other_HR}</td>
                    </tr>
                    <tr>
                        <th>Jammer Referee</th>
                        <td align="center">JR</td>
                        <td></td>
                        <td>{counts.Playoff_JR}</td>
                        <td>{counts.Sanc_JR}</td>
                        <td>{counts.Reg_JR}</td>
                        <td>{counts.Other_JR}</td>
                    </tr>

                    <tr>
                        <th>Inside Pack Referee</th>
                        <td align="center">IPR</td>
                        <td></td>
                        <td>{counts.Playoff_IPR}</td>
                        <td>{counts.Sanc_IPR}</td>
                        <td>{counts.Reg_IPR}</td>
                        <td>{counts.Other_IPR}</td>
                    </tr>

                    {/* <tr>
                        <th>CHR</th>
                        <td>{counts.CHR}</td>
                    </tr> */}

                    <tr>
                        <th>Outside Pack Referee</th>
                        <td align="center">OPR</td>
                        <td></td>
                        <td>{counts.Playoff_OPR}</td>
                        <td>{counts.Sanc_OPR}</td>
                        <td>{counts.Reg_OPR}</td>
                        <td>{counts.Other_OPR}</td>
                    </tr>

                    <tr>
                        <th colSpan={2}>total</th>
                        <td></td>
                        <td>{counts.Playoff_total}</td>
                        <td>{counts.Sanc_total}</td>
                        <td>{counts.Reg_total}</td>
                        <td>{counts.Other_total}</td>
                    </tr>
                </table>

                <h2>Game History</h2>

                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th width="130">Date</th>
                            <th>Tournament</th>
                            <th>Host League</th>
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
