import React from 'react'
import ContentCard from '../components/ContentCard'
import NavBar from '../components/NavBar'
import { ContainerCard } from '../styles/index'
export default function Home() {
  return (
    <>
      <NavBar />
      <ContainerCard>
        <ContentCard />
      </ContainerCard>
    </>
  )
}
