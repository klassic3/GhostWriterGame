import {IdContext} from "../context/IdContext"
import { useContext } from "react"

export const useIdContext =() => {
    const context = useContext(IdContext)

    if (!context)
    {
        throw Error("IdContextError")
    }

    return context
}