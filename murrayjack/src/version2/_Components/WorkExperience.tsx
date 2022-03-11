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
                            <h3>{e.companyName}</h3>
                            <p>{e.tagLine}</p>
                            <div>{e.startDate}</div>
                            {/* <pre>{JSON.stringify(e, undefined, 2)}</pre> */}
                            <ul>
                                {/* {e.jobPoints.map((e) => (
                            <li>{e}</li>
                        ))} */}
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
