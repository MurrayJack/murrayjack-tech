import React, { useState } from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { DerbyDetails } from "../components/derby/derbyDetails"
import { DerbyCounts } from "../components/derby/derbyCounts"
import { DerbyGamesList } from "../components/derby/derbyGamesList"
import SiteWrapper from "../components/siteWrapper"
import { Text } from "../components/Text"

const RollerDerby = () => {
    const [searchString, setSearchString] = useState("")

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

        setSearchString(search)

        setTournaments(
            data.allSanityTournament.nodes.filter(
                e =>
                    regex.test(e.location) ||
                    regex.test(e.name) ||
                    regex.test(e.date) ||
                    (e.games && e.games.filter(g => regex.test(g.name)))
            )
        )
        return Promise.resolve()
    }

    return (
        <SiteWrapper name="Roller Derby" title="Roller Derby">
            <SEO title="Roller Derby" description="Skatespeare Roller Derby" />

            <DerbyDetails />

            <Text as="h2">WFTDA ({counts.total} - Games)</Text>

            <DerbyCounts counts={counts} />

            <Text as="h2">Game History</Text>

            <DerbyGamesList data={tournaments} searchString={searchString} />
        </SiteWrapper>
    )
}

export default RollerDerby
