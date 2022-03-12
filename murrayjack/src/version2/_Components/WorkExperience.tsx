import * as React from 'react';
import { Section } from './Section';
import { useData } from '../_DataContext/DataContext';

export const WorkExperience = () => {
    const data = useData().allSanityJobposition.nodes;

    return (
        <>
            <Section caption="Work Experience">
                <div className="work-experience">
                    {data.map((e) => (
                        <article>
                            {/* <p>{e.tagLine}</p> */}
                            {/* <div>{e.startDate}</div> */}

                            <ul>
                                {e.positions.map((x) => (
                                    <li>
                                        <h3>{x.jobTitle}</h3>
                                        <div>{e.companyName} | ... to ...</div>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </Section>
            <style jsx>{`
                .work-experience {
                    display: grid;
                    gap: 24px;
                }
            `}</style>
        </>
    );
};
