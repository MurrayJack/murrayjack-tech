import * as React from "react"

export const SanityImage = ({ image }) => {
    return (
        <div >
            {image && image.asset && image.asset.fluid && (
                <img style={{ width: "400px" }} srcSet={image.asset.fluid.srcSet} />
            )}
        </div>
    )
}
