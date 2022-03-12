import * as React from 'react';

export const Columns = ({ col1, col2 }: any) => {
    return (
        <>
            <div className="columns">
                <div>{col1}</div>
                <div>{col2}</div>
            </div>
            <style jsx>{`
                .columns {
                    display: grid;
                    grid-template-columns: 30% 70%;
                }

                .columns > div:first-of-type {
                    background: #f0f0f0;
                    padding: 32px;
                }

                .columns > div:nth-of-type(2) {
                    padding: 32px;
                    display: grid;
                    gap: 24px;
                    grid-auto-rows: max-content;
                }
            `}</style>
        </>
    );
};
