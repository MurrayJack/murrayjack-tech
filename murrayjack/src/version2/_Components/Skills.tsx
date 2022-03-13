import * as React from 'react';
import { useData } from '../_DataContext/DataContext';
import { Section } from './Section';

export const Skills = () => {
    const { keySkills } = useData().allSanityPersonalDetails.nodes[0];
    return (
        <>
            <Section caption="Key Skills">
                {keySkills.map((skill) => (
                    <ul>
                        <li>
                            <b>{skill.name}</b>
                        </li>
                        <li>
                            <ul className="list">
                                {skill.detail.map((detail) => (
                                    <li>{detail}</li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                ))}
            </Section>
            <style jsx>{`
                ul {
                    list-style: none;
                }

                ul li ul li {
                    padding-left: 16px;
                }

                ul li ul li:last-of-type {
                    padding-bottom: 16px;
                }
            `}</style>
        </>
    );
};
