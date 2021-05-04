import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'
export default function FavButton({
  favorite,
  handleSetFavorite,
  handleDeleteFavorite,
  name
}) {
  const Icon = favorite ? MdFavorite : MdFavoriteBorder

  return (
    <>
      {favorite ? (
        <Button onClick={handleDeleteFavorite}>
          <Icon size="32px" />
        </Button>
      ) : (
        <Button
          onClick={() => {
            handleSetFavorite(name)
          }}
        >
          <Icon size="32px" />
        </Button>
      )}
    </>
  )
}
