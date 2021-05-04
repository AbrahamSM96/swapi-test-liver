import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBarContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #000;
`
export const Figure = styled.figure`
  height: 50px;
  width: 100px;
`

export const Img = styled.img`
  width: 100%;
  height: auto;
`
export const ButtonOut = styled.button`
  background-color: transparent;
  color: #fff;
  border: 0;
  font-size: 1em;
  cursor: pointer;
  font-family: inherit;
`
export const UserContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`
export const PathContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`
export const Span = styled.span`
  color: #fff;
  font-size: 1em;
`
export const LinkRouter = styled(Link)`
  color: #fff;
  font-size: 1em;
  &:hover {
    color: #fcdf2c;
  }
`
