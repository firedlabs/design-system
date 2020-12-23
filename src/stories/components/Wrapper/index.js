import styled, { css } from 'styled-components'

const center = ({ center }) =>
  center &&
  css`
    width: 100vw;
    height: 100vh;
    display: flex;
    place-items: center center;
  `

const Wrapper = styled.div`
  width: 60%;

  ${center};
`

export default Wrapper
