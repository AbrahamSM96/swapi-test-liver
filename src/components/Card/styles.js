import styled from 'styled-components'

export const ContainerCard = styled.div`
  height: 15rem;
  background-color: #fff;
  box-shadow: 0px 30px 139px 0px rgb(10 22 31 / 26%);
  border-radius: 30px;
  padding: 20px 20px;
  width: 33rem;
  position: relative;

  box-shadow: inset 0 0 50px #000, inset 20px 0 80px #fcdf2c,
    inset -20px 0 80px #fcdf2c, inset 20px 0 300px #fcdf2c,
    inset -20px 0 300px #fcdf2c, 0 0 20px #000, -10px 0 30px #fcdf2c,
    10px 0 15px #fcdf2c;
`
export const ContentLeft = styled.div`
  border: 1px solid #8f3f;
  border-radius: 0.5em;
  position: absolute;
  width: 300px;
  max-height: 500px;
  height: 240px;
  pointer-events: none;
  background-color: rgba(15, 33, 48, 0.3);
`
export const ContentRight = styled.div`
  background-color: rgba(203, 43, 64, 0.8);
  border: 1px solid #fff;
  position: absolute;
  padding: 10px;
  transform: translateY(-50%);
  width: 75%;
  height: 65%;
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
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff,
    0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;
`

export const Figure = styled.figure`
  display: flex;
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
  border: 1px solid blue;
`
