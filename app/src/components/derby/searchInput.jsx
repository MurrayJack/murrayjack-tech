import React from "react"
import { useSearcher } from "../..//hooks/useSearcher"

export const SearchInput = ({ onSearch }) => {
    const { inputProps } = useSearcher(onSearch, onSearch)

    return (
        <>
            <input placeholder="search for games" {...inputProps} />
            <style jsx>{`
                input {
                    padding: var(--gaps-large);
                }
            `}</style>
        </>
    )
}