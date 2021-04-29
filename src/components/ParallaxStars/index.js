import React from 'react'
import {
  ContainerParallax,
  Figure,
  Img,
  LinkButton,
  TitleContainer
} from './styles'
import './styles.css'
import imgUrl from '../../images/starwars-logo.png'

export default function ParallaxStars() {
  return (
    <>
      <ContainerParallax>
        <TitleContainer>
          <Figure>
            <Img src={imgUrl} alt="StarWars" />
          </Figure>
          <LinkButton to="/cards">Continue</LinkButton>
        </TitleContainer>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title"></div>
      </ContainerParallax>
    </>
  )
}
