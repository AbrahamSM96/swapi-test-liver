import React from 'react'
import ContentFavorites from 'src/components/ContentFavorites'
import { ContainerCard } from '../styles/index'
import NavBar from 'src/components/NavBar'

export default function Favorites() {
  return (
    <>
      <NavBar />
      <ContainerCard style={{ height: '100vh' }}>
        <ContentFavorites />
      </ContainerCard>
    </>
  )
}
