import {createContext, useReducer} from 'react'

export const GameContext = createContext()

export const gameReducer = (state, action) => {

    switch (action.type){
        case 'SET_LIVES':
            return{
                lives: action.payload
            }
        case 'EDIT_LIVES':
            return{
                lives: action.payload 
            }
        default:
            return state
    }
}

export const GameContextProvider = ({children}) => {
     const [state, dispatch] = useReducer(gameReducer, {
        lives: 3
     })

    return (
        <GameContext.Provider value={{...state, dispatch}}>
            { children }
        </GameContext.Provider>
    )
}