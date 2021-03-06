import React from 'react'
import { setFavorite } from '../../actions'
import { connect } from 'react-redux'
import Card from '../Card'
import { useHistory } from 'react-router-dom'
import { MdChevronLeft } from 'react-icons/md'
import { ButtonContent, Button } from '../ContentDetail/styles'
import { WrapperCard } from '../ContentCard/styles'
import { ContentEmpty, EmptyText } from './styles.js'
function ContentFavorites(props) {
  const history = useHistory()
  const { favoriteCharacters } = props
  const handleClickReturn = () => {
    history.replace('/')
  }
  const manyFavorites = favoriteCharacters.length
  console.log(manyFavorites, 'many')
  return (
    <>
      <ButtonContent>
        <Button onClick={handleClickReturn}>
          <MdChevronLeft size={32} />
          Return
        </Button>
      </ButtonContent>
      <WrapperCard>
        {manyFavorites === 0 ? (
          <ContentEmpty>
            <EmptyText>No Favorites 🤪</EmptyText>
          </ContentEmpty>
        ) : (
          favoriteCharacters.map(({ name, urlImg }) => (
            <Card key={name} name={name} urlImg={urlImg} />
          ))
        )}
      </WrapperCard>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    favoriteCharacters: state.favoriteCharacters
  }
}

const mapDispatchToProps = {
  setFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentFavorites)
