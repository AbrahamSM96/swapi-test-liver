import { useState, useEffect } from 'react'
import { onAuthStateChanged } from '../firebase/client'
import { useHistory } from 'react-router-dom'

export default function useUser() {
  const [user, setUser] = useState(undefined)
  const history = useHistory()
  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  useEffect(() => {
    user === null && history.push('/')
  }, [user, history])

  return user
}
