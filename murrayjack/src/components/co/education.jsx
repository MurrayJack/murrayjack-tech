import { useStaticQuery, graphql } from 'gatsby';
import * as React from 'react';

export default () => {
    const data = useStaticQuery(graphql`
        query Education {
            allSanityEducation(filter: { visible: { eq: true } }) {
                nodes {
                    name
                    awards {
                        name
                    }
                }
            }
        }
    `);

    const { name, awards } = data.allSanityEducation.nodes[0];

    return (
        <>
            <article>
                <h3>
                    <span>{name}:</span>
                </h3>
                <h4>Ongoing.</h4>

                {/* <blockquote>{tagLine}</blockquote> */}

                <ul>
                    {awards.map((e) => (
                        <li>{e.name}</li>
                    ))}
                </ul>
            </article>
        </>
    );
};
