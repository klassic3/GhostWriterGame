import {createContext, useReducer} from 'react'

export const IdContext = createContext()

export const idReducer = (state, action) => {

    switch (action.type){
        case 'SET_ID':
            return{
                id: action.payload
            }

        default:
            return state
    }
}

export const IdContextProvider = ({children}) => {
     const [state, dispatchi] = useReducer(idReducer, {
        id: null
     })

    return (
        <IdContext.Provider value={{...state, dispatchi}}>
            { children }
        </IdContext.Provider>
    )
}