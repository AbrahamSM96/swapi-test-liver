import React, { useRef, useEffect, useState } from 'react'
import { Button } from './styles'
export default function FavButton(props) {
  const { name, urlImg, id, favoriteCharacters } = props

  const refButton = useRef(null)
  const [favoriteState, setFavoriteState] = useState(false)

  const handleSetFavorite = () => {
    props.setFavorite({ name, urlImg, id })
    setFavoriteState(true)
  }

  const handleDeleteFavorite = (itemId) => {
    console.log(itemId, 'item')
    props.deleteFavorite(itemId)
    setFavoriteState(false)
  }
  const isFavorite = () => {
    const result = favoriteCharacters.filter(
      (favoriteCharacter) => favoriteCharacter.name === name
    )
    if (result.length) {
      setFavoriteState(true)
    }
  }
  /* eslint-disable */
  useEffect(() => {
    isFavorite()
    localStorage.setItem(
      'favoritesStorage',
      JSON.stringify(props.favoriteCharacters)
    )
  }, [])

  // const Icon = favorite ? MdFavorite : MdFavoriteBorder

  return (
    <>
      {favoriteState ? (
        <Button
          favorite={favoriteState}
          onClick={() => handleDeleteFavorite(id)}
          ref={refButton}
        >
          {/* <MdFavorite size={SIZE} /> */}
        </Button>
      ) : (
        <Button onClick={() => handleSetFavorite()} ref={refButton}>
          {/* <MdFavorite size={SIZE} /> */}
        </Button>
      )}
    </>
  )
}
