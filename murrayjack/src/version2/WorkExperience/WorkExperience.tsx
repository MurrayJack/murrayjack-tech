import * as React from 'react';
import { useData } from '../_DataContext/DataContext';
import './WorkExperience.css';

export const WorkExperience = () => {
    const data = useData().allSanityJobposition.nodes;

    return (
        <>
            <section className="work-experience">
                <h2>Work Experience</h2>
                <hr />

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
            </section>
        </>
    );
};
