import * as React from 'react';

export const Section = ({ children, caption }: any) => {
    return (
        <>
            <section>
                <h2>{caption}</h2>
                <hr />
                {children}
            </section>
            <style jsx>{`
                hr {
                    border: 1px solid var(--accent-color);
                    margin-bottom: 20px;
                }

                h2 {
                    font-size: 22px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    padding-bottom: 8px;
                }
            `}</style>
        </>
    );
};
