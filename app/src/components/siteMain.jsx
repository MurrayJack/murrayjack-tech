import * as React from "react"
import { SiteSection } from "./siteSection"

export const SiteMain = ({ children, title, description }) => {
    return (
        <main>
            {title && (
                <SiteSection>
                    <h1>{title}</h1>
                </SiteSection>
            )}
            {description && (
                <SiteSection>
                    <p>{description}</p>
                </SiteSection>
            )}
            {children}
        </main>
    )
}
