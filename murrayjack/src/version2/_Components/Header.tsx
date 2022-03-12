import * as React from 'react';

export const Header = () => (
    <>
        <div>
            <h1>
                Murray
                <div>Jack</div>
            </h1>
            <div>Principle Engineer: Front End Practice</div>
        </div>
        <style jsx>{`
            div {
                width: 100%;
                height: 100%;
                display: grid;
                align-items: center;
            }

            h1 {
                font-size: 30px;
                text-transform: uppercase;
                letter-spacing: 2px;
            }

            h1 > div {
                color: var(--accent-color);
            }
        `}</style>
    </>
);
