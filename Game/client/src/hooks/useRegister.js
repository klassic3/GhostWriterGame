import { useState } from 'react'
import { useUserContext } from './useUserContext.js'
import { useIdContext } from './useIdContext.js'

export const useRegister = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useUserContext()
    const {dispatchi} = useIdContext()

    const register = async (name) => {
      setIsLoading(true)
      setError(null)
  
      const response = await fetch('/api/gameover/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name})
      })
      const _id = await response.json()

      if (!response.ok) {
        setIsLoading(false)
        setError("Enter Username first!!")
      }
      if (response.ok) {
        dispatch({type: 'SET_USER', payload: name})
        dispatchi({type: 'SET_ID', payload: _id.msg})
        console.log(_id.msg)
        // update loading state
        setIsLoading(false)


      }
    }
    return { register, isLoading, error, }
}