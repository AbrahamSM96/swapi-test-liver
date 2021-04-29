import React from 'react'
import { NavBarContent, Figure, Img } from './styles.js'
import imgUrl from '../../images/starwars-logo.png'

export default function NavBar() {
  return (
    <>
      <NavBarContent>
        <Figure>
          <Img src={imgUrl} alt="starwars-logo" />
        </Figure>
      </NavBarContent>
    </>
  )
}
