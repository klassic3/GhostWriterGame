import {createContext, useReducer} from 'react'

export const WordContext = createContext()

export const wordReducer = (state, action) => {

    switch (action.type){
        case 'SET_WORD':
            return{
                word: action.payload
            }
        default:
            return state
    }
}

export const WordContextProvider = ({children}) => {
     const [state, dispatchw] = useReducer(wordReducer, {
        word: null
     })

    return (
        <WordContext.Provider value={{...state, dispatchw}}>
            { children }
        </WordContext.Provider>
    )
}