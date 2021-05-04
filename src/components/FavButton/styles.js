import styled, { css } from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  & svg {
    margin-right: 4px;
    color: #d1d1d1;
    width: 23px;
    ${(props) =>
      props.favorite &&
      css`
        color: red !important;
      `}
  }
`
