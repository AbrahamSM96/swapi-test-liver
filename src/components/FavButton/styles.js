import styled, { css, keyframes } from 'styled-components'

const faveheart = keyframes`
  from { background-position: left;  }
  to   { background-position: right; }
`

export const Button = styled.button`
  background-position: left;
  background-repeat: no-repeat;
  background-color: transparent;
  border: transparent;
  height: 50px;
  width: 50px; // 2900px / 29 frames
  background: url('https://cssanimation.rocks/images/posts/steps/heart.png')
    no-repeat;
  background-size: auto 50px; // scale the image for retina

  cursor: pointer;
  ${(props) =>
    props.favorite &&
    css`
      animation: ${faveheart} 0.8s steps(28) 1;
      color: red;
      background-position: right;
      background-size: auto 50px;
    `}
  :hover {
    background-position: right;
  }
`
