import React from "react"

export const DerbyCounts = ({ counts }) => (
    <>
        <h2>WFTDA ({counts.total} - Games)</h2>

        <section>
            <table>
                <tr>
                    <th rowSpan={2}>Skating Positions</th>
                    <th className="center" rowSpan={2} valign="bottom">
                        Code
                    </th>
                    <th colSpan={5}>Game Designation</th>
                </tr>

                <tr>
                    <th className="center">Champs</th>
                    <th className="center">Playoff</th>
                    <th className="center">Sanc</th>
                    <th className="center">Reg</th>
                    <th className="center">Other</th>
                </tr>

                <tr>
                    <th>Head Referee</th>
                    <td className="center">HR</td>
                    <td></td>
                    <td className="center">{counts.Playoff_HR}</td>
                    <td className="center">{counts.Sanc_HR}</td>
                    <td className="center">{counts.Reg_HR}</td>
                    <td className="center">{counts.Other_HR}</td>
                </tr>
                <tr>
                    <th>Jammer Referee</th>
                    <td className="center">JR</td>
                    <td></td>
                    <td className="center">{counts.Playoff_JR}</td>
                    <td className="center">{counts.Sanc_JR}</td>
                    <td className="center">{counts.Reg_JR}</td>
                    <td className="center">{counts.Other_JR}</td>
                </tr>

                <tr>
                    <th>Inside Pack Referee</th>
                    <td className="center">IPR</td>
                    <td></td>
                    <td className="center">{counts.Playoff_IPR}</td>
                    <td className="center">{counts.Sanc_IPR}</td>
                    <td className="center">{counts.Reg_IPR}</td>
                    <td className="center">{counts.Other_IPR}</td>
                </tr>

                <tr>
                    <th>Outside Pack Referee</th>
                    <td className="center">OPR</td>
                    <td></td>
                    <td className="center">{counts.Playoff_OPR}</td>
                    <td className="center">{counts.Sanc_OPR}</td>
                    <td className="center">{counts.Reg_OPR}</td>
                    <td className="center">{counts.Other_OPR}</td>
                </tr>

                <tr>
                    <th colSpan={2}>total</th>
                    <td></td>
                    <td className="center">{counts.Playoff_total}</td>
                    <td className="center">{counts.Sanc_total}</td>
                    <td className="center">{counts.Reg_total}</td>
                    <td className="center">{counts.Other_total}</td>
                </tr>
            </table>

            <table>
                <tr>
                    <th rowSpan={2}>Skating Positions</th>
                    <th className="center" rowSpan={2} valign="bottom">
                        Code
                    </th>
                    <th colSpan={5}>Game Designation</th>
                </tr>

                <tr>
                    <th className="center">Champs</th>
                    <th className="center">Playoff</th>
                    <th className="center">Sanc</th>
                    <th className="center">Reg</th>
                    <th className="center">Other</th>
                </tr>

                <tr>
                    <th>Tournament Head Referee</th>
                    <td>THR</td>
                    <td></td>
                    <td className="center">{counts.Playoff_THR}</td>
                    <td className="center">{counts.Sanc_THR}</td>
                    <td className="center">{counts.Reg_THR}</td>
                    <td className="center">{counts.Other_THR}</td>
                </tr>

                <tr>
                    <th>Crew Head Referee</th>
                    <td>CHR</td>
                    <td></td>
                    <td className="center">{counts.Playoff_CHR}</td>
                    <td className="center">{counts.Sanc_CHR}</td>
                    <td className="center">{counts.Reg_CHR}</td>
                    <td className="center">{counts.Other_CHR}</td>
                </tr>
            </table>
        </section>

        <style jsx>{`
            section {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 16px;
            }
            Î main {
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

            td.center,
            th.center {
                text-align: center;
            }

            th {
                text-align: left;
                padding: 16px;
                background: var(--table-header-bgcolor);
                border: 1px solid #ccc;
                line-height: 1.6em;
            }

            img {
                width: 60px;
            }
        `}</style>
    </>
)
