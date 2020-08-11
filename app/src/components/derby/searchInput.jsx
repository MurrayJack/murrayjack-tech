import React from "react"
import { useSearcher } from "../..//hooks/useSearcher"

export const SearchInput = ({ onSearch }) => {
    const { inputProps } = useSearcher(onSearch, onSearch)

    return (
        <>
            <input placeholder="filter games" {...inputProps} />
            <style jsx>{`
                input {
                    padding: 16px;
                }
            `}</style>
        </>
    )
}