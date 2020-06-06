import React from "react"
import { useSearcher } from "../hooks/useSearcher"

export const SearchInput = ({ onSearch }) => {
    const { inputProps } = useSearcher(onSearch)

    return (
        <>
            <input placeholder="filter games" {...inputProps} />
            <style jsx>{`
                input {
                    box-sizing: border-box;
                    padding: 16px;
                    width: 100%;
                    border-radius: 4px;
                    border: 1px solid #ccc;
                }
            `}</style>
        </>
    )
}
