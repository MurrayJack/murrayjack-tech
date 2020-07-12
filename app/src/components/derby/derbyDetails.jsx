import React from "react"
import Me from "../images/MurrayJack";

export const DerbyDetails = () => (
    <>
        <section>
            <table>
                <tr>
                    <th>Official's Legal Name</th>
                    <td>Murray Jack</td>
                    <th>Todays Date</th>
                    <td>{new Date().toDateString()}</td>
                </tr>
                <tr>
                    <th>Official's Derby Name</th>
                    <td>Skatespeare</td>
                    <th>Officiating Since</th>
                    <td>{new Date(2014, 3, 1).toDateString()}</td>
                </tr>
                <tr>
                    <th>Affiliated League</th>
                    <td colSpan={3}>Victorian Roller Derby League</td>
                </tr>
                <tr>
                    <th>Insurance #</th>
                    <td></td>
                    <th>Provider</th>
                    <td>Skate Australia</td>
                </tr>
                <tr>
                    <th>Ref Cert Level</th>
                    <td></td>
                    <th>Endorsement(s)</th>
                    <td></td>
                </tr>
                <tr>
                    <th>NSO Cert Level</th>
                    <td></td>
                    <th>Endorsement(s)</th>
                    <td></td>
                </tr>
            </table>

            <div>
                <Me circular={false}/>
            </div>
        </section>

        <style jsx>{`
            section {
                display: grid;
                grid-template-columns: 1fr 300px;
                font-size: 14px;
                grid-gap: 16px;
            }

            div {
                width: 100%;
                height: 100%;
                background: var(--table-header-bgcolor);
                border-radius: 4px;
            }

            table {
                width: 100%;
                border-collapse: collapse;
            }

            td {
                padding: 16px;
                border: 1px solid var(--table-header-border-color);
                color: var(--table-header-color);
                
            }

            th {
                text-align: left;
                padding: 16px;
                background: var(--table-header-bgcolor);
                border: 1px solid var(--table-header-border-color);
                font-weight: var(--table-header-font-weight);
            }

            img {
                width: 60px;
            }
        `}</style>
    </>
)
