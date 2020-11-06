import React, { useState } from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { DerbyDetails } from "../components/derby/derbyDetails"
import { DerbyCounts } from "../components/derby/derbyCounts"
import { DerbyGamesList } from "../components/derby/derbyGamesList"
import SiteWrapper from "../components/siteWrapper"
import { VStack } from "../components/Stack"
import { Section } from "../components/Section"
import { Text } from "../components/text"

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
        <SiteWrapper name="Roller Derby">
            <SEO title="Roller Derby" description="Skatespeare Roller Derby" />

            <VStack pad="xLarge">
                <Section center>
                    <VStack gap="xLarge">
                        <Text as="h1">Roller Derby</Text>

                        <DerbyDetails />

                        <Text as="h2">WFTDA ({counts.total} - Games)</Text>

                        <DerbyCounts counts={counts} />

                        <Text as="h2">Game History</Text>

                        <DerbyGamesList
                            data={tournaments}
                            searchString={searchString}
                        />
                    </VStack>
                </Section>
            </VStack>

            {/* <SiteMain title="Skatespeare - Game History">
                <SiteSection>
                    <SiteGrid>
                        

                        

                        <h2>Game History</h2>

                        <SearchInput onSearch={handleOnSearch} />

                        <DerbyGamesList
                            data={tournaments}
                            searchString={searchString}
                        />
                    </SiteGrid>
                </SiteSection>
            </SiteMain> */}
        </SiteWrapper>
    )
}

export default RollerDerby
