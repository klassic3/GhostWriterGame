import { useState } from 'react'
import { useUserContext } from './useUserContext'

export const useRegister = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useUserContext()

    const register = async (name) => {
      setIsLoading(true)
      setError(null)
  
      const response = await fetch('/api/gameover/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name})
      })
      const json = await response.json()

      if (!response.ok) {
        setIsLoading(false)
        setError(json.error)
      }
      if (response.ok) {
        dispatch({type: 'SET_USER', payload: name})
        // update loading state
        setIsLoading(false)

      }
    }
    return { register, isLoading, error }
}