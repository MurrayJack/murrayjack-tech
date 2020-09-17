import React from "react"
import { useState } from "react"

export const SkillList = ({ data, useNewTechStack }) => {
    return (
        <>
            <h3>Key Skills</h3>

            <ul>
                {useNewTechStack &&
                    data.techStack2.map((e, i) => (
                        <SkillItem key={e.name} {...e} />
                    ))}
                {!useNewTechStack &&
                    data.techStack.map((e, i) => (
                        <SkillItem key={e} name={e} percent={0} />
                    ))}
            </ul>
            <style jsx>{`
                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: grid;
                }
            `}</style>
        </>
    )
}

export const SkillItem = ({ name, percent }) => {
    const [hovered, setHover] = useState(false)

    return (
        <>
            <li
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(true)}
            >
                <div>{name}</div>
                <div
                    className="line"
                    style={{ width: `${percent}%` }}
                />
            </li>

            <style jsx>{`
                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: grid;
                }

                li {
                    padding: 8px 10px;
                    margin: 4px;
                    color: var(--main-color-inv);
                    background-color: var(--main-color2);
                    border-radius: 3px;
                    font-size: var(--font-small);
                }

                .line {
                    height: 1px;
                    background: var(--main-accent-color);
                    transition: width ease-in-out 0.2s;
                }
            `}</style>
        </>
    )
}
