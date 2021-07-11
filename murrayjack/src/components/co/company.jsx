import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Company = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allSanityJobposition {
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

const Detail = ({
  companyName,
  title,
  location,
  tagLine,
  startDate,
  endDate,
  jobPoints,
}) => (
  <article>
    <h3>
      <span>{companyName}:</span> {title}
    </h3>
    <h4>
      {location}. {startDate} - {endDate || "Present"}.
    </h4>

    <blockquote>{tagLine}</blockquote>

    <ul>
      {jobPoints.map((e) => (
        <li>{e}</li>
      ))}
    </ul>
  </article>
);

export default Company;
