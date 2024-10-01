import { useState } from 'react'

export const useWordAdd = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
  
    const insert = async () => {
      setIsLoading(true)
      setError(null)
  
      const response = await fetch('/api/gameover', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
      })
      const json = await response.json()

      if (!response.ok) {
        setIsLoading(false)
        setError(json.error)
      }
      if (response.ok) {
        // update loading state
        setIsLoading(false)
      }
    }
    return { insert, isLoading, error }
}