import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBarContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #000;
  height: 100px;
  width: 100%;
  @media (max-width: 720px) {
    justify-content: flex-start;
    padding-left: 50px;
    z-index: 2;
  }
`
export const Figure = styled.figure`
  height: 50px;
  width: 100px;
  @media (max-width: 720px) {
    display: none;
  }
`
export const FigureMobile = styled.figure`
  display: none;
  @media (max-width: 720px) {
    display: block;
    height: 25px;
    width: 80px;
  }
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
  margin-left: 4rem;
  @media (max-width: 720px) {
    flex-direction: column;
    margin-left: 0;
  }
`
export const PathContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  z-index: 2;
  ${(props) =>
    props.active &&
    css`
      left: 0 !important;
    `}
  ${(props) =>
    props.active === false &&
    css`
      left: none !important;
    `}

  @media (max-width: 720px) {
    position: fixed;
    left: -100%;
    top: 5rem;
    flex-direction: column-reverse;
    padding: 1rem 0;
    background-color: #000;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    & a {
      margin: 0.5rem 0;
    }
  }
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
export const Hamburguer = styled.div`
  display: none;
  & span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #fff;
    color: #fff;
  }
  @media (max-width: 720px) {
    display: block;
    cursor: pointer;
  }
  ${(props) =>
    props.active &&
    css`
      span:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    `}
  ${(props) =>
    props.active === false &&
    css`
      span:nth-child(1) {
      }
      span:nth-child(2) {
      }
      span:nth-child(3) {
      }
    `}
`
