import * as React from 'react';

export const Contact = () => (
    <>
        <div className="wrapper">
            <div>phone</div>

            <div>email</div>

            <div>asdasasd</div>
        </div>
        <style jsx>{`
            .wrapper {
                display: grid;
                grid-auto-flow: column;
                border-top: 1px solid #d8d8d8;
                border-bottom: 1px solid #d8d8d8;
                height: 50px;
                align-items: center;
            }
        `}</style>
    </>
);
