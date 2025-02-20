import {createContext, useReducer} from 'react'

export const ScoreContext = createContext()

export const ScoreReducer = (state, action) => {

    switch (action.type){
        case 'SET_SCORE':
            return{
                scores: action.payload
            }
        case 'EDIT_SCORE':
            return{
                scores: action.payload 
            }
        default:
            return state
    }
}

export const ScoreContextProvider = ({children}) => {
     const [state, dispatchs] = useReducer(ScoreReducer, {
        scores: 0
     })

    return (
        <ScoreContext.Provider value={{...state, dispatchs}}>
            { children }
        </ScoreContext.Provider>
    )
}