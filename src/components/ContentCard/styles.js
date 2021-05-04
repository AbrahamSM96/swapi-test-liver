import styled from 'styled-components'

export const ContainerCard = styled.div`
  height: 100%;
  background-image: radial-gradient(#f7f7f7 1px, #000 1px),
    radial-gradient(#f7f7f7, #000 1px);
  background-position: 0 0, 25px 25px;
  background-size: 50px 50px;
  padding: 20px 50px;
  margin: 0;
`
export const WrapperCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, auto));
  justify-content: center;
  grid-gap: 40px 40px;
  height: 100%;
`

export const LoaderContent = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
