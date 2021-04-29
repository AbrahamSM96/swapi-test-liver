import React from 'react'
import Card from '../Card'
import { ContainerCard, WrapperCard } from './styles'
export default function ContentCard() {
  console.log('conten')

  return (
    <>
      <ContainerCard>
        <WrapperCard>
          {[1, 2, 3, 4, 5].map((index) => (
            <Card />
          ))}
        </WrapperCard>
      </ContainerCard>
    </>
  )
}
