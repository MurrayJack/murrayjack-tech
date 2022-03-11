import * as React from 'react';
import { Section } from './Section';
import { useData } from '../_DataContext/DataContext';

export const Profile = () => {
    const data = useData();

    return (
        <Section caption="Profile">
            <p>useData</p>
            {/* {data.sanityPersonalDetails.blurb.map((e) => (
                <p>{e}</p>
            ))} */}
        </Section>
    );
};
