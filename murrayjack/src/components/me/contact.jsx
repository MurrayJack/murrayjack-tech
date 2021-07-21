import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { H4 } from "../h4";

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
      <H4 caption="Personal Info" type="user" />
      <ul>
        <li>
          <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li>
          <a href={`https://murrayjack.me`}>https://murrayjack.me</a>
        </li>
        <li>
          <a href={`tel:${mobileNo}`}>{mobileNo}</a>
        </li>
        <li>{visa}</li>
        <li>{location}</li>
      </ul>
    </article>
  );
};

export default Contact;
