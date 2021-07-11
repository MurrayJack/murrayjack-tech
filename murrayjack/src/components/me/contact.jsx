import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      sanityPersonalDetails {
        email
        visa
        location
        mobileNo
      }
    }
  `);

  const { email, visa, location, mobileNo } = data.sanityPersonalDetails;

  return (
    <article>
      <h4>Personal Info</h4>
      <ul>
        <li><a href={`mailto:${email}`}>{email}</a></li>
        <li>{mobileNo}</li>
        <li>{visa}</li>
        <li>{location}</li>
      </ul>
    </article>
  );
};

export default Contact;
