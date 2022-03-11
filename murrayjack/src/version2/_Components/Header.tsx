import * as React from 'react';

export const Header = () => (
    <>
        <div>
            <h1>
                <div>Murray</div>
                <div>Jack</div>
            </h1>
            <div>Principle Front End Developer</div>
        </div>
        <style jsx>{`
            div {
                width: 100%;
                height: 100%;
                display: grid;
                align-items: center;
            }
        `}</style>
    </>
);
