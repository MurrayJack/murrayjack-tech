import * as React from 'react';

export const Contact = () => (
    <>
        <div className="wrapper">
            <div>Melbourne Australia</div>

            <div>
                <a href="mailto:cv@murrayjack.me">cv@murrayjack.me</a>
            </div>

            <div>
                <a href="https://www.linkedin.com/in/murray-jack-a249b72b/">LinkedIn</a>
            </div>

            <div>@muraryjack</div>
        </div>
        <style jsx>{`
            .wrapper {
                display: grid;
                grid-auto-flow: column;
                border-top: 2px solid var(--border-color);
                border-bottom: 2px solid var(--border-color);
                height: 50px;
                align-items: center;
            }
        `}</style>
    </>
);
