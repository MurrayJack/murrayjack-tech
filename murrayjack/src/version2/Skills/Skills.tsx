import * as React from 'react';
import { useData } from '../_DataContext/DataContext';

export const Skills = () => {
    const { keySkills } = useData().allSanityPersonalDetails.nodes[0];
    return (
        <article>
            <h2>Skills</h2>

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
    );
};
