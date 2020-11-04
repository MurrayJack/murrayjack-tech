import * as React from "react"

export const Stack = ({
    children,
    gap,
    flow = "row",
    pad,
    columns = "1fr",
    justify,

    // Height,
    // Align = "center",

    // ContentSizing,
    // JustifyContent,
    // AutoRows,

    ...rest
}) => {
    const buildSize = size => {
        switch (size) {
            case "none":
                return "0"

            case "xxSmall":
                return "var(--gaps-xxsmall)"
            case "xSmall":
                return "var(--gaps-xsmall)"
            case "small":
                return "var(--gaps-small)"
            case "medium":
                return "var(--gaps-medium)"
            case "large":
                return "var(--gaps-large)"
            case "xLarge":
                return "var(--gaps-xlarge)"
            case "xxLarge":
                return "var(--gaps-xxlarge)"
            case "xxxLarge":
                return "var(--gaps-xxxlarge)"

            default:
                return size
        }
    }

    // const buildType = () => {
    //     if (Flow === "column" && ContentSizing) {
    //         return "grid-template-columns: " + ContentSizing
    //     } else if (Flow === "row" && ContentSizing) {
    //         return "grid-template-rows: " + ContentSizing
    //     }
    // }

    return (
        <>
            <div {...rest}>{children}</div>
            <style jsx>{`
                div {
                    display: grid;
                    gap: ${buildSize(gap)};
                    grid-auto-flow: ${flow};
                    padding: ${buildSize(pad)};
                    grid-auto-columns: ${columns};
                    justify-items: ${justify};
                }
            `}</style>
        </>
    )
}

export const VStack = props => <Stack {...props} flow="row" />

export const HStack = props => <Stack {...props} flow="column" />
