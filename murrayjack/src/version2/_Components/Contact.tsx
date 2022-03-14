import React from 'react';
import { IoLocationSharp, IoMailSharp, IoLogoLinkedin, IoCallSharp } from 'react-icons/io5';
import { useData } from '../_DataContext/DataContext';
import { Section } from './Section';

export const Contact = () => {
    const { allSanityPersonalDetails } = useData();
    const data = allSanityPersonalDetails.nodes[0];

    return (
        <>
            <Section caption="Contact">
                <div className="wrapper">
                    <ItemWrapper icon={<IoLocationSharp />}>{data.location}</ItemWrapper>

                    <ItemWrapper icon={<IoMailSharp />}>
                        <a href={data.email}>{data.email}</a>
                    </ItemWrapper>

                    <ItemWrapper icon={<IoCallSharp />}>
                        <a href="phone:+61 (0)420 795 708">+61 (0)420 795 708</a>
                    </ItemWrapper>

                    <ItemWrapper icon={<IoLogoLinkedin />}>
                        <a href="https://www.linkedin.com/in/murray-jack-a249b72b/">LinkedIn</a>
                    </ItemWrapper>

                    <ItemWrapper icon={<IoLogoLinkedin />}>
                        <a href="https://www.linkedin.com/in/murray-jack-a249b72b/">GitHub</a>
                    </ItemWrapper>
                </div>
                <style jsx>{`
                    .wrapper {
                        display: grid;
                        grid-auto-flow: row;
                        gap: 8px;
                    }
                `}</style>
            </Section>
        </>
    );
};

const ItemWrapper = ({ children, icon }: any) => {
    return (
        <>
            <div className="wrapper">
                <div className="icon">{icon}</div>
                {children}
            </div>
            <style jsx>{`
                .wrapper {
                    display: grid;
                    grid-auto-flow: column;
                    gap: 8px;
                    text-align: left;
                    grid-auto-columns: max-content;
                }

                .icon {
                    /* height: 24px; */
                    /* width: 24px; */
                    /* color: var(--accent-color); */
                    /* color: white; */
                    /* border-radius: 50%; */
                    display: grid;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </>
    );
};
