import React from 'react'

import ContentDetail from 'src/components/ContentDetail'
import NavBar from 'src/components/NavBar'
export default function Detail(props) {
  const idParams = props.match.params.id
  const parseParams = parseInt(idParams, 10)
  return (
    <>
      <NavBar />
      <ContentDetail parseParams={parseParams} />
    </>
  )
}
