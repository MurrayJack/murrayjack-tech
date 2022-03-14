import React from 'react';
import { Section } from './Section';
import { useData } from '../_DataContext/DataContext';

export const WorkExperience = () => {
    const data = useData().allSanityJobposition.nodes;

    return (
        <>
            <Section caption="Work Experience">
                <article>
                    {data.map((e) =>
                        e.positions.map((x) => (
                            <div>
                                <h3>{x.jobTitle}</h3>
                                <div>
                                    {e.companyName} | {x.startDate} to {x.endDate || 'Current'}
                                </div>
                                <ul>
                                    {x.jobPoints.map((o) => (
                                        <li>{o}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    )}
                </article>
            </Section>
            <style jsx>{`
                ul {
                    padding-left: 16px;
                }
                article {
                    display: grid;
                    gap: 24px;
                }
                h3 {
                    font-size: 16px;
                    letter-spacing: 1px;
                }
            `}</style>
        </>
    );
};
