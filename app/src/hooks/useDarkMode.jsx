import React, { useEffect } from "react"

export const useDarkMode = () => {
    useEffect(() => {
        const toggleDarkMode = e => {
            const newColorScheme = e.matches ? "dark" : "light"
            document.documentElement.setAttribute("data-theme", newColorScheme)
        }

        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            document.documentElement.setAttribute("data-theme", "dark")
        } else {
            document.documentElement.setAttribute("data-theme", "light")
        }

        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addListener(toggleDarkMode)

        return () => {
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .removeListener(toggleDarkMode)
        }
    }, [])
}
