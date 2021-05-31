import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Avatar from '../Avatar'
import { signOut } from '../../firebase/client'
import {
  NavBarContent,
  Figure,
  Img,
  ButtonOut,
  UserContent,
  PathContent,
  LinkRouter,
  Hamburguer,
  FigureMobile
} from './styles.js'

import imgUrl from '../../images/starwars-logo.png'
export default function NavBar() {
  const [active, setActive] = useState()
  const location = useLocation()
  const { pathname } = location
  const refHamburguer = useRef(null)
  const refContainerLinks = useRef(null)

  const handleClickSignOut = () => {
    signOut()
  }
  const toggleHamburguer = () => {
    setActive(true)
  }
  const toggleCloseMenu = () => {
    refContainerLinks.current.getElementsByTagName('a')
    console.log(refContainerLinks.current.getElementsByTagName('a'))
    console.log(false)
    setActive(false)
  }

  return (
    <>
      <NavBarContent>
        <PathContent ref={refContainerLinks} active={active}>
          <Figure>
            <Img src={imgUrl} alt="starwars-logo" />
          </Figure>
          <LinkRouter
            to={'/'}
            style={{
              color: pathname === '/' && '#fcdf2c',
              fontWeight: pathname === '/' && '600'
            }}
          >
            Home
          </LinkRouter>
          <LinkRouter
            to={'/favorites'}
            style={{
              color: pathname === '/favorites' && '#fcdf2c',
              fontWeight: pathname === '/favorites' && '600'
            }}
          >
            Favorites
          </LinkRouter>
          <UserContent>
            <Avatar />
            <ButtonOut onClick={handleClickSignOut}>Log Out</ButtonOut>
          </UserContent>
        </PathContent>
        <Hamburguer
          onClick={() => (active ? toggleCloseMenu() : toggleHamburguer())}
          ref={refHamburguer}
          active={active}
        >
          <span></span>
          <span></span>
          <span></span>
        </Hamburguer>
        <FigureMobile>
          <Img src={imgUrl} alt="starwars-logo" />
        </FigureMobile>
      </NavBarContent>
    </>
  )
}
