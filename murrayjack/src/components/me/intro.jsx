import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Intro = () => {
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
      {data.sanityPersonalDetails.blurb.map((e) => (
        <p>{e}</p>
      ))}
    </article>
  );
};

export default Intro;
