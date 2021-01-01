import styled, { css } from 'styled-components'

const center = ({ center }) =>
  center &&
  css`
    width: 100vw;
    height: 100vh;
    display: flex;
    place-items: center center;
    position: relative;
  `

const bottom = ({ bottom }) =>
  bottom &&
  css`
    box-sizing: border-box;
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
  `

const Wrapper = styled.div`
  width: 60%;

  ${center};
  ${bottom}
`

export default Wrapper
