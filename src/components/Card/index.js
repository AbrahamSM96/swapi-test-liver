import React from 'react'
import {
  ContainerCard,
  ContentLeft,
  ContentRight,
  ContentText,
  Figure,
  Img,
  LinkText,
  Name
} from './styles'
import { setFavorite, deleteFavorite, setData } from '../../actions'
import { connect } from 'react-redux'

import FavButton from '../FavButton'
function Card(props) {
  const { name, urlImg, id } = props

  return (
    <>
      <ContainerCard>
        <ContentLeft>
          <Figure>
            <Img src={urlImg} alt={name} />
          </Figure>
        </ContentLeft>
        <ContentRight>
          <ContentText>
            <div style={{ marginRight: '.5rem' }}>
              <FavButton {...props} />
            </div>
            <Name>
              <LinkText to={`/detail/${id}`}>
                <h1>{name}</h1>
              </LinkText>
            </Name>
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
