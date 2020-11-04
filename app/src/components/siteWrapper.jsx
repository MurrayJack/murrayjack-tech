import React from "react"
import { Header } from "./Header"

export default ({ name, children }) => {
    return (
        <>
            <Header name={name} />

            <main>{children}</main>
        </>
    )
}
