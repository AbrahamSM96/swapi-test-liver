import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const ContainerCard = styled.div`
  height: 15rem;
  background-color: #fff;
  box-shadow: 0px 30px 139px 0px rgb(10 22 31 / 26%);
  border-radius: 30px;
  padding: 20px 20px;
  width: 33rem;
  display: flex;
  justify-content: space-around;
  position: relative;
  box-shadow: inset 0 0 50px #000, inset 20px 0 80px #fcdf2c,
    inset -20px 0 80px #fcdf2c, inset 20px 0 200px #fcdf2c,
    inset -20px 0 80px #fcdf2c, 0 0 20px #fcdf2c, -10px 0 30px #fcdf2c,
    10px 0 15px #fcdf2c;
`
export const ContentLeft = styled.div`
  position: relative;
`
export const ContentRight = styled.div`
  background-color: rgba(203, 43, 64, 0.8);
  border: 1px solid #fff;
  position: absolute;
  padding: 10px;
  transform: translateY(-50%);
  width: 45%;
  height: 35%;
  border-radius: 30px;
  box-shadow: 0 28px 79px 0 rgb(10 22 31 / 35%);
  top: 50%;
  right: 4%;
`
export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Figure = styled.figure`
  display: flex;
  width: 150px;
  align-items: center;
  position: absolute;
  pointer-events: none;
  user-select: none;
  top: 43%;
  right: 0;
  transform: translateY(-50%) translateX(-40px);
  transition: all 0.3s;
  z-index: 2;
`

export const Img = styled.img`
  object-fit: contain;
  object-position: center right;
  max-width: 100%;
  border-radius: 1rem;
`

export const LinkText = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff,
    0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;
  & h1 {
    font-size: 1.5em;
  }
  & h1:hover {
    text-shadow: 0 0 5px #fcdf2c, 0 0 10px #fcdf2c, 0 0 20px #fcdf2c,
      0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff,
      0 0 150px #0ff;
  }
`
