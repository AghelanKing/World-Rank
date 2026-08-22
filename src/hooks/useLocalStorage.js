import { useEffect, useState } from "react";

export function useLocalStorage(initialState, key) {
    const [value, setValue] = useState(function () {
        const StoredValue = localStorage.getItem(key)

        return StoredValue ? JSON.parse(localStorage.getItem(key)) : initialState
    })

    useEffect(function () {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}