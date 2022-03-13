import * as React from 'react';
import { FC } from 'react';

type SectionProp = {
    caption: string;
};

export const Section: FC<SectionProp> = ({ children, caption }) => {
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
                    font-size: 20px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    padding-bottom: 8px;
                }
            `}</style>
        </>
    );
};
