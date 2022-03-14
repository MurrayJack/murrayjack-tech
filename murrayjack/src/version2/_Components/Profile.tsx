import React from 'react';
import { Section } from './Section';
import { useData } from '../_DataContext/DataContext';

export const Profile = () => {
    const data = useData();

    return (
        <Section caption="Profile">
            <p>{data.allSanityPersonalDetails.nodes[0].blurb[0]}</p>
        </Section>
    );
};
