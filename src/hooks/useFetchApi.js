import React, { useState, useEffect } from 'react'

function useFetchApi() {
  const [data, setData] = useState([])
  const [load, setLoad] = useState(false)
  const [error, setError] = useState(null)

  const API = 'https://swapi.dev/api/people'
  const fetchApi = async () => {
    const fetchData = await fetch(API)
    const response = fetchData.json()

    try {
    } catch (error) {}
  }

  useEffect(() => {
    fetchApi()
  }, [])
}
