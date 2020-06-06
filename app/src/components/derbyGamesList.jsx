import * as React from "react"

export const DerbyGamesList = ({ data }) => {
    return (
        <>
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
                                        {new Date(e.date).toDateString()}
                                    </td>
                                )}
                                {i === 0 && (
                                    <td valign="top" rowSpan={e.game.length}>
                                        {e.name}
                                    </td>
                                )}
                                {i === 0 && (
                                    <td valign="top" rowSpan={e.game.length}>
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

            <style jsx>{`
                main {
                    padding: 24px;
                    display: grid;
                    grid-gap: 16px;
                }

                table {
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
        </>
    )
}
