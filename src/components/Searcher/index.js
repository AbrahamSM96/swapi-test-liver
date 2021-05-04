import React from 'react'
import useFetchApi from '../../hooks/useFetchApi'
import { InputContent } from './styles'
export default function Searcher() {
  const fetchApi = useFetchApi()
  const { setSearch, search, fetchApi: fetchApiData } = fetchApi

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchApiData()
  }
  return (
    <>
      <InputContent>
        <input
          type="text"
          name="search"
          placeholder="Search a character"
          onClick={(event) => setSearch(event.target.value)}
          value={search}
        />
        <button onSubmit={(event) => handleSubmit(event)}>Search</button>
      </InputContent>
    </>
  )
}
