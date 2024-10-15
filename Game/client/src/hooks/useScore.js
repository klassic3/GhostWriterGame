import { useState } from 'react'
import { useScoreContext } from './useScoreContext.js'
import { useIdContext } from './useIdContext.js'
import { useScoreContext2 } from './useScoreContext2.js'

export const useScore = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { scores } = useScoreContext()
    const { dispatchs } = useScoreContext2()
    const { id } = useIdContext()
    const update = async () => {
      setIsLoading(true)
      setError(null)
      console.log(scores)
      const response = await fetch('/api/gameover/'+ id , {
        method: 'PATCH',
        headers: {Accept: "application/json",'Content-Type': 'application/json'},
        body: JSON.stringify({ score: scores}) 
      })
      if (!response.ok) {
        setIsLoading(false)
        setError("Update failed")
      }
      if (response.ok) {

        dispatchs({type: 'SET_SCORE', payload: scores})
        // update loading state
        setIsLoading(false)


      }
    }
    return { update, isLoading, error, scores }
}