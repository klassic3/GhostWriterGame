import {ScoreContext2} from "../context/ScoreContext2"
import { useContext } from "react"

export const useScoreContext2 =() => {
    const context = useContext(ScoreContext2)

    if (!context)
    {
        throw Error("ScoreContext2Error")
    }

    return context
}