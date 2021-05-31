import styled from 'styled-components'

export const DetailCard = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 100%;
`
export const Figure = styled.figure`
  width: 300px;
  height: 300px;
  overflow: hidden;
`

export const Img = styled.img`
  width: 100%;
  object-fit: contain;
  height: 100%;
`
export const TitleContent = styled.div`
  background-color: #fcdf2c;
  + h1 {
    color: #fff;
  }
`
export const ButtonContent = styled.div`
  margin: 20px 0 20px 20px;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1em;
`

export const LoaderContent = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
