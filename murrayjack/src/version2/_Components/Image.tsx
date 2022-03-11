import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const Image = () => {
    return (
        <>
            <div>
                <div className="image">
                    <StaticImage width={150} height={150} src="../../images/murrayjack.png" alt="Picture of Murray Jack" />
                </div>
            </div>
            <style jsx>{`
                div {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                }

                .image {
                    height: 150px;
                    width: 150px;
                    border-radius: 50%;
                    border: 1px solid #d8d8d8;
                    background: palegoldenrod;
                    overflow: hidden;
                }
            `}</style>
        </>
    );
};
