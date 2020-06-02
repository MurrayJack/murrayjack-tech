import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

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
                    }
                }
            }
        }
    `)

    const counts = {
        CHR: 0,
        HR: 0,
        IPR: 0,
        JR: 0,
        OPR: 0,
        total: 0,
    }

    data.allSanityTournament.nodes.forEach(t => {
        t.game.forEach(g => {
            counts[g.position]++
            counts["total"]++
        })
    })

    return (
        <div>
            <SEO title="Refume" description="Skatespeare Roller Derby" />

            {/* <main>{JSON.stringify(data)}</main> */}

            <main>
                <h1>Flat Track Derby Game History Summary</h1>

                <table>
                    <tr>
                        <th>CHR</th>
                        <td>{counts.CHR}</td>
                    </tr>
                    <tr>
                        <th>HR</th>
                        <td>{counts.HR}</td>
                    </tr>
                    <tr>
                        <th>IPR</th>
                        <td>{counts.IPR}</td>
                    </tr>
                    <tr>
                        <th>JR</th>
                        <td>{counts.JR}</td>
                    </tr>
                    <tr>
                        <th>OPR</th>
                        <td>{counts.OPR}</td>
                    </tr>
                    <tr>
                        <th>total</th>
                        <td>{counts.total}</td>
                    </tr>
                </table>

                {/* <table>
                Official's Legal Name		Murray Jack						Today's Date	2020-06-01	
Official's Derby Name		Skatespeare (Formerly William Skatespeare)						Officiating Since	2014-03-01	
Affiliated League		Victorian Roller Derby League								
Insurance #					Provider		Skate Vic			
Ref Cert Level				Endorsement(s)						
NSO Cert Level				Endorsement(s)						
                </table> */}

                <table></table>

                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Tournament</th>
                            <th>Host League</th>
                            <th>Home Team</th>
                            <th>Visiting Team</th>
                            <th>Position</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.allSanityTournament.nodes.map(e =>
                            e.game.map((g, i) => (
                                <tr>
                                    <td>
                                        {i === 0 && (
                                            <img
                                                srcSet={
                                                    e.image?.asset?.fluid
                                                        ?.srcSet
                                                }
                                            />
                                        )}
                                    </td>
                                    <td>{i === 0 && e.date}</td>
                                    <td>{i === 0 && e.name}</td>
                                    <td>{i === 0 && e.location}</td>
                                    <td>{g.homeTeam}</td>
                                    <td>{g.visitingTeam}</td>
                                    <td>{g.position}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </main>

            <style jsx>{`
                table {
                    /* width: 100%; */
                }

                td {
                    padding: 8px 16px;
                    border: 1px solid #ddd;
                }

                th {
                    text-align: left;
                    padding: 8px 16px;
                    background: #ddd;
                }

                img {
                    width: 60px;
                }
            `}</style>
        </div>
    )
}

export default NotFoundPage
