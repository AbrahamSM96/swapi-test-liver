import React, { useState, useEffect } from 'react'
import {
  ContainerCard,
  ContentLeft,
  ContentRight,
  ContentText,
  Figure,
  Img,
  LinkText
} from './styles'
import { setFavorite, deleteFavorite, setData } from '../../actions'
import { connect } from 'react-redux'

import FavButton from '../FavButton'
function Card(props) {
  const { name, urlImg, favoriteCharacters, id } = props
  const [favorite, setFavorite] = useState(false)

  const handleSetFavorite = () => {
    props.setFavorite({ name, urlImg, id })
    setFavorite(true)
  }

  const handleDeleteFavorite = (itemId) => {
    console.log(itemId, 'item')
    props.deleteFavorite(itemId)
    setFavorite(false)
  }
  const isFavorite = () => {
    const result = favoriteCharacters.filter(
      (favoriteCharacter) => favoriteCharacter.name === name
    )
    if (result.length) {
      setFavorite(true)
    }
  }

  useEffect(() => {
    isFavorite()
  }, [])
  return (
    <>
      <ContainerCard>
        <ContentLeft>
          <Figure>
            <Img src={urlImg} alt="name" />
          </Figure>
        </ContentLeft>
        <ContentRight>
          <ContentText>
            <FavButton
              handleDeleteFavorite={() => handleDeleteFavorite(id)}
              handleSetFavorite={handleSetFavorite}
              favorite={favorite}
              name={name}
            />
            <LinkText to={`/detail/${id}`}>
              <h1>{name}</h1>
            </LinkText>
          </ContentText>
        </ContentRight>
      </ContainerCard>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    favoriteCharacters: state.favoriteCharacters,
    data: state.setData
  }
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
  setData
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
