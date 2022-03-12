import * as React from 'react';
import { IoLocationSharp, IoMailSharp, IoLogoLinkedin, IoCallSharp } from 'react-icons/io5';

export const Contact = () => (
    <>
        <div className="wrapper">
            <ItemWrapper icon={<IoLocationSharp />}>Melbourne Australia</ItemWrapper>

            <ItemWrapper icon={<IoMailSharp />}>
                <a href="mailto:cv@murrayjack.me">cv@murrayjack.me</a>
            </ItemWrapper>

            <ItemWrapper icon={<IoLogoLinkedin />}>
                <a href="https://www.linkedin.com/in/murray-jack-a249b72b/">LinkedIn</a>
            </ItemWrapper>

            <ItemWrapper icon={<IoCallSharp />}>
                <a href="mailto:cv@murrayjack.me">cv@murrayjack.me</a>
            </ItemWrapper>
        </div>
        <style jsx>{`
            .wrapper {
                display: grid;
                grid-auto-flow: column;
                border-top: 2px solid var(--border-color);
                border-bottom: 2px solid var(--border-color);
                height: 50px;
                align-items: center;
            }
        `}</style>
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
                    justify-content: center;
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
