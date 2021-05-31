import styled from 'styled-components'

export const WrapperCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 35rem));
  justify-content: center;
  justify-items: center;
  grid-gap: 40px 40px;
`

export const LoaderContent = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
