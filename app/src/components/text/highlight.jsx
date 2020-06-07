import * as _ from "lodash"
import * as React from "react"

export const Highlighted = ({ text, highLight = "" }) => {
    if (!highLight.trim()) {
        return <span>{text}</span>
    }
    const regex = new RegExp(`(${_.escapeRegExp(highLight)})`, "gi")
    const parts = text.split(regex)
    return (
        <span>
            {parts
                .filter(part => part)
                .map((part, i) =>
                    regex.test(part) ? (
                        <mark key={i}>{part}</mark>
                    ) : (
                        <span key={i}>{part}</span>
                    )
                )}
        </span>
    )
}
