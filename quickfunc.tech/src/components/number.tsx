import * as React from "react"

type NumberProps = {}

export const Number = ({}: NumberProps) => (
  <input
    type="number"
    readOnly
    placeholder="EM Value"
    style={{ resize: "none" }}
    // ref={result}
  ></input>
)
