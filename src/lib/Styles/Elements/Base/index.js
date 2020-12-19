import { createGlobalStyle } from 'styled-components'

const Base = createGlobalStyle`
  html, body {
    font-family: 'Fira Code', sans-serif;
    font-size: 10px;
  }

  @media(max-width: 834px) {
    html, body {
      font-size: 7px;
    }
  }
`

export default Base
