import * as React from "react"
import { SiteSection } from "./siteSection"

export const SiteMain = ({ children, title }) => {
    return (
        <main>
            {title && (
                <SiteSection>
                    <h1>{title}</h1>
                </SiteSection>
            )}
            {children}
        </main>
    )
}
