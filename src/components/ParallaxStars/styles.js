import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContainerParallax = styled.div`
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #090a0f 0%, #090a0f 100%);
  overflow: hidden;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Figure = styled.figure`
  height: 100px;
  width: 200px;
`
export const Img = styled.img`
  width: 100%;
  height: auto;
`

export const LinkButton = styled(Link)`
  display: inline-block;
  position: relative;
  padding: 0.35em 1.2em;
  border: 0.1em solid #fcdf2c;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.7em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #fff;
  text-align: center;
  transition: all 0.2s;
  background-color: transparent;
  z-index: 2;
  cursor: pointer;
  &:hover {
    border: 0.1em solid #fff;
  }
  &:after {
    position: absolute;
    border-radius: 0.7em;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #fcdf2c;
    transition: all 0.1s;
    z-index: -1;
  }
  &:active:after {
    width: 100%;
    border-radius: 0.7em;
  }
  @media (max-width: 30em) {
    display: block;
    margin: 0.4em auto;
  }
`
