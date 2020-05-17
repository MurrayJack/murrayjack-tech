import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"

export const Javascript = ({ children }) => (
    <SyntaxHighlighter language="javascript" style={atomDark}>
        {children}
    </SyntaxHighlighter>
)
