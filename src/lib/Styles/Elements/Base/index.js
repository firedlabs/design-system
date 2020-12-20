import { createGlobalStyle } from 'styled-components'

const Base = createGlobalStyle`
  html, body {
    font-family: 'Fira Code', sans-serif;
    font-size: 10px;
    min-width: 290px;

    @media(max-width: 834px) {
      font-size: 7px
    }

    @media(max-width: 510px) {
      font-size: 6px;
    }

    @media(max-width: 430px) {
      font-size: 5px;
    }

    @media(max-width: 360px) {
      font-size: 4px;
    }
  }
`

export default Base
