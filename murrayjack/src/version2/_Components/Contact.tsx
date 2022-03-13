import * as React from 'react';
import { IoLocationSharp, IoMailSharp, IoLogoLinkedin, IoCallSharp } from 'react-icons/io5';
import { Section } from './Section';

export const Contact = () => (
    <>
        <Section caption="Contact">
            <div className="wrapper">
                <ItemWrapper icon={<IoLocationSharp />}>Melbourne Australia</ItemWrapper>

                <ItemWrapper icon={<IoMailSharp />}>
                    <a href="mailto:cv@murrayjack.me">cv@murrayjack.me</a>
                </ItemWrapper>

                <ItemWrapper icon={<IoLogoLinkedin />}>
                    <a href="https://www.linkedin.com/in/murray-jack-a249b72b/">LinkedIn</a>
                </ItemWrapper>

                <ItemWrapper icon={<IoCallSharp />}>
                    <a href="phone:+61 (0)420 795 708">+61 (0)420 795 708</a>
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
                    height: 24px;
                    width: 24px;
                    background: var(--accent-color);
                    color: white;
                    border-radius: 50%;
                    display: grid;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </>
    );
};
