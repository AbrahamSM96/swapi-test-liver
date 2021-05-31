import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  background-color: #fff;
  box-shadow: 0px 30px 139px 0px rgb(10 22 31 / 26%);
  border-radius: 30px;
  width: auto;
  justify-content: space-around;
  position: relative;
  box-shadow: inset 0 0 50px #000, inset 20px 0 80px #fcdf2c,
    inset -20px 0 80px #fcdf2c, inset 20px 0 200px #fcdf2c,
    inset -20px 0 80px #fcdf2c, 0 0 20px #fcdf2c, -10px 0 30px #fcdf2c,
    10px 0 15px #fcdf2c;
  @media (max-width: 720px) {
    flex-direction: column;
    padding: 1.3rem 1rem;
  }
`
export const ContentLeft = styled.div`
  /* position: relative; */
`
export const ContentRight = styled.div`
  background-color: #0a0a0a;
  border: 1px solid #fff;
  padding: 10px;
  width: 230px;
  height: auto;
  border-radius: 30px;
  box-shadow: 0 28px 79px 0 rgb(10 22 31 / 35%);
  margin: 0 1rem;
  @media (max-width: 720px) {
    margin: 0;
  }
`
export const ContentText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Figure = styled.figure`
  display: flex;
  width: 150px;
  align-items: center;
  pointer-events: none;
  user-select: none;
  transition: all 0.3s;
  z-index: 2;
`

export const Name = styled.div`
  width: 150px;
`

export const Img = styled.img`
  object-fit: contain;
  object-position: center right;
  max-width: 100%;
  border-radius: 1rem;
`

export const LinkText = styled(Link)`
  display: flex;
  text-align: center;
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
