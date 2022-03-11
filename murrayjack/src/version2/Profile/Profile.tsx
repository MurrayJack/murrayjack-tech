import * as React from 'react';
import { useData } from '../_DataContext/DataContext';

export const Profile = () => {
    const data = useData();

    return (
        <section>
            <h2>Profile</h2>
            <hr />
            <p>useData</p>
            {/* {data.sanityPersonalDetails.blurb.map((e) => (
                <p>{e}</p>
            ))} */}
        </section>
    );
};
