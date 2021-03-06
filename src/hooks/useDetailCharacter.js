import { useState, useEffect } from 'react'

export function useSingleCharacter(id) {
  const [singleCharacter, setSingleCharacter] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const API = `https://swapi.dev/api/people/${id}`
  const fetchCharacter = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(API)
      const data = await response.json()
      setSingleCharacter(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }
  /* eslint-disable */
  useEffect(() => {
    fetchCharacter()
  }, [])

  return { singleCharacter, loading, error }
}
