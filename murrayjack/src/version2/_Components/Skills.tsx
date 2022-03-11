import * as React from 'react';
import { useData } from '../_DataContext/DataContext';
import { Section } from './Section';

export const Skills = () => {
    const { keySkills } = useData().allSanityPersonalDetails.nodes[0];
    return (
        <Section caption="Skills">
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
        </Section>
    );
};
