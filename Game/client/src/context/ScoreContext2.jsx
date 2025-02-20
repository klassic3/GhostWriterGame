import {createContext, useReducer} from 'react'

export const ScoreContext2 = createContext()

export const ScoreReducer2 = (state, action) => {

    switch (action.type){
        case 'SET_SCORE2':
            return{
                scores: action.payload
            }

        default:
            return state
    }
}

export const ScoreContextProvider2 = ({children}) => {
     const [state, dispatchs] = useReducer(ScoreReducer2, {
        scores: 0
     })

    return (
        <ScoreContext2.Provider value={{...state, dispatchs}}>
            { children }
        </ScoreContext2.Provider>
    )
}