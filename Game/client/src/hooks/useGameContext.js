import {GameContext} from "../context/GameContext"
import { useContext } from "react"

export const useGameContext =() => {
    const context = useContext(GameContext)

    if (!context)
    {
        throw Error("GameContextError")
    }

    return context
}