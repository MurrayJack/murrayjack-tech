import * as React from "react"
import { Highlighted } from "../text/highlight"

export const DerbyGamesList = ({ data, searchString }) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th width="130">Date</th>
                        <th>Tournament</th>
                        <th>Game</th>
                        <th>Teams</th>
                        <th>Type</th>
                        <th>Position</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map(e =>
                        e.game.map((g, i) => (
                            <tr>
                                {i === 0 && (
                                    <td valign="top" rowSpan={e.game.length}>
                                        <img
                                            alt={e.game.name}
                                            srcSet={
                                                e.image?.asset?.fluid?.srcSet
                                            }
                                        />
                                    </td>
                                )}
                                {i === 0 && (
                                    <td valign="top" rowSpan={e.game.length}>
                                        {new Date(e.date).toLocaleDateString()}
                                    </td>
                                )}
                                {i === 0 && (
                                    <td valign="top" rowSpan={e.game.length}>
                                        <Highlighted
                                            text={e.name}
                                            highLight={searchString}
                                        />
                                        <br />
                                        <span style={{ color: "#999" }}>
                                            <Highlighted
                                                text={e.location}
                                                highLight={searchString}
                                            />
                                        </span>
                                    </td>
                                )}
                                <td>{g.name}</td>
                                <td>
                                    <Highlighted
                                        text={`${g.homeLeague?.name}: ${g.homeTeam}`}
                                        highLight={searchString}
                                    />

                                    <br />

                                    <Highlighted
                                        text={`${g.visitingLeague?.name}: ${g.visitingTeam}`}
                                        highLight={searchString}
                                    />
                                </td>
                                <td>
                                    <Highlighted
                                        text={g.type}
                                        highLight={searchString}
                                    />
                                </td>
                                <td>
                                    <Highlighted
                                        text={g.position}
                                        highLight={searchString}
                                    />
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            <style jsx>{`
                main {
                    padding: 24px;
                    display: grid;
                    grid-gap: 16px;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 14px;
                }

                td {
                    padding: 16px;
                    border: 1px solid var(--table-header-border-color);
                    line-height: 1.6em;
                    vertical-align: top;
                    color: var(--table-header-color);
                }

                th {
                    text-align: left;
                    padding: 16px;
                    background: var(--table-header-bgcolor);
                    border: 1px solid var(--table-header-border-color);
                    line-height: 1.6em;
                    font-weight: var(--table-header-font-weight);
                }

                img {
                    width: 60px;
                }
            `}</style>
        </>
    )
}
