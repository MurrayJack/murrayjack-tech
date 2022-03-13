import * as React from 'react';

type ColumnsProp = {
    col1: JSX.Element;
    col2: JSX.Element;
};

export const Columns = ({ col1, col2 }: ColumnsProp) => {
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
                    background: var(--border-color);
                    padding: 32px;
                    gap: 32px;
                    display: grid;
                    padding-bottom: 0;
                }

                .columns > div:nth-of-type(2) {
                    padding: 32px;
                    display: grid;
                    gap: 32px;
                    grid-auto-rows: max-content;
                    padding-bottom: 0;
                }
            `}</style>
        </>
    );
};
