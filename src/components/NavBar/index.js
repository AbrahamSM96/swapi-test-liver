import React from 'react'
import Avatar from '../Avatar'
import { signOut } from '../../firebase/client'
import {
  NavBarContent,
  Figure,
  Img,
  ButtonOut,
  UserContent,
  PathContent,
  LinkRouter
} from './styles.js'

import imgUrl from '../../images/starwars-logo.png'

export default function NavBar() {
  const handleClickSignOut = () => {
    signOut()
  }

  return (
    <>
      <NavBarContent>
        <PathContent>
          <Figure>
            <Img src={imgUrl} alt="starwars-logo" />
          </Figure>
          <LinkRouter to={'/cards'}>Home</LinkRouter>
          <LinkRouter to={'/favorites'}>Favorites</LinkRouter>
        </PathContent>
        <UserContent>
          <Avatar />
          <ButtonOut onClick={handleClickSignOut}>Exit</ButtonOut>
        </UserContent>
      </NavBarContent>
    </>
  )
}
