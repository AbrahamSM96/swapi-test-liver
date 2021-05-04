import React, { useEffect } from 'react'
import {
  ContainerParallax,
  Figure,
  Img,
  LinkButton,
  TitleContainer
} from './styles'
import './styles.css'
import imgUrl from '../../images/starwars-logo.png'
import Gmail from '../Icons/Gmail'
import useUser from '../../hooks/useUser'
import { loginWithGmail } from '../../firebase/client'
import { useHistory } from 'react-router-dom'
import Loader from '../Loader'

export default function ParallaxStars() {
  const history = useHistory()
  const user = useUser()

  useEffect(() => {
    user && history.replace('/cards')
  }, [user])

  const handleClick = () => {
    loginWithGmail().catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <ContainerParallax>
        <TitleContainer>
          <Figure>
            <Img src={imgUrl} alt="StarWars" />
          </Figure>
          <div>
            {user === null && (
              <LinkButton to="/cards" onClick={handleClick}>
                <Gmail width={32} height={32} /> Login with Gmail
              </LinkButton>
            )}
            {user === undefined && <Loader />}
          </div>
        </TitleContainer>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title"></div>
      </ContainerParallax>
    </>
  )
}
