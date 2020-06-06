import * as React from "react"
import * as keycode from "keycode"

export const useSearcher = (OnSearch, OnCancel, options = {}) => {
    const [value, setValue] = React.useState("")
    const [isSearching, setIsSearching] = React.useState(false)
    const ref = React.useRef(null)
    const searchTimeout = React.useRef(0)

    React.useEffect(() => {
        return () => window.clearTimeout(searchTimeout.current)
    }, [])

    const onKeyUp = e => {
        window.clearTimeout(searchTimeout.current)

        if (e.nativeEvent.keyCode === keycode.codes.esc) {
            triggerCancel()
        } else if (e.nativeEvent.keyCode === keycode.codes.enter) {
            triggerSearch()
        } else {
            if (value.length >= 3) {
                searchTimeout.current = window.setTimeout(() => {
                    triggerSearch()
                }, 500)
            }

            if (options.TriggerCancelOnEmptyString && value.length === 0) {
                triggerCancel()
            }
        }
    }

    const onChange = e => {
        setValue(e.target.value)
    }

    const triggerSearch = () => {
        window.clearTimeout(searchTimeout.current)
        if (value.length > 0) {
            setIsSearching(true)

            OnSearch(value).then(() => {
                setIsSearching(false)
            })
        }
    }

    const triggerCancel = () => {
        window.clearTimeout(searchTimeout.current)
        setValue("")
        setIsSearching(true)

        OnCancel().then(() => {
            setIsSearching(false)
            ref.current.focus()
        })
    }

    const type = "search"
    const hasSearchValue = value.length > 0

    return {
        hasSearchValue,
        inputProps: {
            onChange,
            onKeyUp,
            ref,
            type,
            value,
        },
        isSearching,
        triggerCancel,
        triggerSearch,
    }
}
