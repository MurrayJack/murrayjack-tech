import * as React from "react"

export const VStack = ({ children }) => {
  return (
    <>
      <div className="vstack">{children}</div>
      <style>{`
        .vstack {
          display: grid;
          gap: 20px;
          grid-auto-flow: row;
          width: 100%;
        }
      `}</style>
    </>
  )
}
