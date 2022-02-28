import * as React from "react"

export const Code = ({ children }) => {
  return (
    <pre>
      {`// code`}
      {children}
    </pre>
  )
}
