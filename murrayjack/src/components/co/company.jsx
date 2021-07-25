import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Company = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allSanityJobposition(sort: { fields: startDate, order: DESC }) {
                nodes {
                    url
                    title
                    companyName
                    location
                    startDate(formatString: "yyyy")
                    endDate(formatString: "yyyy")
                    tagLine
                    jobPoints
                }
            }
        }
    `);

    return (
        <>
            {data.allSanityJobposition.nodes.map((e) => (
                <Detail {...e} />
            ))}
        </>
    );
};

const Detail = ({ companyName, title, location, tagLine, startDate, endDate, jobPoints }) => (
    <article>
        <h3>
            <span>{companyName}:</span> {title}
        </h3>
        <h4>
            {location}. {startDate} - {endDate || 'Present'}.
        </h4>

        <blockquote>{tagLine}</blockquote>

        {jobPoints.map((e) => (
            <p>{e}</p>
        ))}
    </article>
);

export default Company;
