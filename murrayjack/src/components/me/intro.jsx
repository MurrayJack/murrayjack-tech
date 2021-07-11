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
    <div>
      {data.sanityPersonalDetails.blurb.map((e) => (
        <p>{e}</p>
      ))}
    </div>
  );
};

export default Intro;
