import React from 'react';
import { IoLocationSharp, IoMailSharp, IoLogoLinkedin, IoCallSharp, IoGitBranch } from 'react-icons/io5';
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
                        <a href={`mailto:${data.email}`}>{data.email}</a>
                    </ItemWrapper>

                    <ItemWrapper icon={<IoCallSharp />}>
                        <a href="tel:+610420795708">+61 (0)420 795 708</a>
                    </ItemWrapper>

                    <ItemWrapper icon={<IoLogoLinkedin />}>
                        <a target="_blank" href="https://www.linkedin.com/in/murray-jack-a249b72b/">
                            LinkedIn
                        </a>
                    </ItemWrapper>

                    <ItemWrapper icon={<IoGitBranch />}>
                        <a target="_blank" href="http://github.com/MurrayJack/">
                            GitHub
                        </a>
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
                    display: grid;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </>
    );
};
