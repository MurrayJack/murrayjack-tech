import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const Profile = () => {
    const data = useStaticQuery(graphql`
        {
            sanityPersonalDetails {
                name
                blurb
            }
        }
    `);

    return (
        <article>
            <h2>Profile</h2>
            {data.sanityPersonalDetails.blurb.map((e) => (
                <p>{e}</p>
            ))}
        </article>
    );
};
