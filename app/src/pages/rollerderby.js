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

                    game {
                        homeTeam
                        visitingTeam
                        position
                    }
                }
            }
        }
    `)

    return (
        <div>
            <SEO title="Refume" description="Skatespeare Roller Derby" />

            {/* <main>{JSON.stringify(data)}</main> */}

            <main>
                <h1>Flat Track Derby Game History Summary</h1>

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
                td {
                    padding: 8px 16px;
                    border: 1px solid #ddd;
                }

                th {
                    text-align: left;
                    padding: 8px 16px;
                    background: #ddd;
                }
            `}</style>
        </div>
    )
}

export default NotFoundPage
