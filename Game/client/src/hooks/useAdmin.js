import { useState } from 'react'


export const useLoad = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)


    const load = async () => {
      setIsLoading(true)
      setError(null)
  
      const response = await fetch('/api/game/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: null
      })

      if (!response.ok) {
        setIsLoading(false)
        setError("Load Failed")
      }
      if (response.ok) {

        // update loading state
        setIsLoading(false)


      }
    }
    return { load, isLoading, error, }
}
export const useClear = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)


    const clear = async () => {
      setIsLoading(true)
      setError(null)
  
      const response = await fetch('/api/game/', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: null
      })

      if (!response.ok) {
        setIsLoading(false)
        setError("Load Failed")
      }
      if (response.ok) {

        // update loading state
        setIsLoading(false)


      }
    }
    return { clear, isLoading, error, }
}