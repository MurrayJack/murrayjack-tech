import * as React from 'react';
import { H4 } from '../h4';
import { useStaticQuery, graphql } from 'gatsby';

const Skills = () => {
    const data = useStaticQuery(graphql`
        {
            sanityPersonalDetails {
                keySkills {
                    name
                    detail
                }
            }
        }
    `);

    const { keySkills } = data.sanityPersonalDetails;

    return (
        <>
            <article>
                <H4 caption="Key Skills" type="kskills" />

                {keySkills.map((skill) => (
                    <ul>
                        <li>{skill.name}</li>
                        <li>
                            <ul className="list">
                                {skill.detail.map((detail) => (
                                    <li>{detail}</li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                ))}
            </article>
        </>
    );
};

export default Skills;
