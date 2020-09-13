import * as React from "react"
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';

export const Card = ({ image, description, title }) => {
    return (
        <>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <figure>
                    <CloudinaryContext cloudName="murrayjack">
                        <Image secure="true" publicId={image}>
                            <Transformation width="200" crop="scale" />
                        </Image>
                    </CloudinaryContext>
                </figure>
            </div>
            <style jsx>{`
                div {
                    border: 1px solid var(--main-color2);
                    border-radius: 4px;
                    grid-template-areas: "header image" "description image";
                    grid-template-columns: 1fr auto;
                    grid-template-rows: 20px 1fr;
                    display: grid;
                    padding: 16px;
                    grid-gap: 8px;
                }

                h3 {
                    grid-area: header;
                    padding: 0;
                    margin: 0;
                }

                p {
                    grid-area: description
                }

                figure {
                    grid-area: image;
                    height: 200px;
                    width: 200px;
                    padding: 0;
                    margin: 0;
                    border-radius: 4px;
                    overflow: hidden;
                }
            `}</style>
        </>
    )
}
