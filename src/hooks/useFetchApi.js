import { useState, useEffect } from 'react'
export default function useFetchApi() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [load, setLoad] = useState(false)
  const [error, setError] = useState(null)

  const API = 'https://swapi.dev/api/people'
  const fetchApi = async () => {
    setLoad(true)
    setError(null)
    console.log(search, 'searchhhhh')
    try {
      const response = await fetch(API, {
        params: { search: search }
      })
      const data = await response.json()
      // const newSearchResults = data.results.map((character) => ({
      //   id: character.url.slice(28, -1),
      //   name: character.name
      // }))
      // setSearchData(newSearchResults)
      // console.log(searchData, 'searchdata')
      setLoad(false)
      setData(data)
    } catch (error) {
      setLoad(false)
      setError(error)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return {
    data,
    load,
    error,
    setSearch,
    search,
    fetchApi
  }
}
