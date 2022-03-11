import * as React from 'react';
import { useData } from '../_DataContext/DataContext';

export const WorkExperience = () => {
    const data = useData().allSanityJobposition.nodes;

    return (
        <div>
            {data.map((e) => (
                <>
                    <h3>{e.companyName}</h3>
                    <p>{e.tagLine}</p>
                    <div>{e.startDate}</div>
                    <ul>
                        {/* {e.jobPoints.map((e) => (
                            <li>{e}</li>
                        ))} */}
                    </ul>
                </>
            ))}
        </div>
    );
};
