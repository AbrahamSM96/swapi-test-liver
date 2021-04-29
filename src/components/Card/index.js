import React from 'react'
import {
  ContainerCard,
  ContentLeft,
  ContentRight,
  ContentText,
  Figure,
  Img
} from './styles'
export default function Card(props, { id }) {
  console.log(id)
  console.log(props, 'proooos')
  return (
    <>
      <ContainerCard>
        <ContentLeft>
          <Figure>
            <Img
              src="https://res.cloudinary.com/muhammederdem/image/upload/v1536405215/starwars/item-4.png"
              alt="name"
            />
          </Figure>
        </ContentLeft>
        <ContentRight>
          <ContentText>
            <h1>Title</h1>
            <p>name</p>
            <p>homeworld</p>
          </ContentText>
        </ContentRight>
      </ContainerCard>
    </>
  )
}
