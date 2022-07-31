import { useState } from "react"

export const useToggle = (initial : any) => {
    const [state, setState] = useState(initial)

    return [
        state,
        () => {
            setState(state => !state)
        }
    ]
}