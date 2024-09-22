import {ScoreContext} from "../context/ScoreContext"
import { useContext } from "react"

export const useScoreContext =() => {
    const context = useContext(ScoreContext)

    if (!context)
    {
        throw Error("ScoreContextError")
    }

    return context
}