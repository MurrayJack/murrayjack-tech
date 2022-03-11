import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { Version2 } from '../version2';

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        {
            sanityPersonalDetails {
                blurb
            }
        }
    `);

    return (
        <main>
            <Helmet htmlAttributes={{ lang: 'en' }}>
                <meta charSet="utf-8" />
                <title>Murray Jack: Resumé</title>
                <meta name="description" content={data.sanityPersonalDetails.blurb[0]} />
            </Helmet>

            <Version2 />
        </main>
    );
};

export default IndexPage;
