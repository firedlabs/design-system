import { createGlobalStyle } from 'styled-components'
import { Cursor } from '../../Tools'

const Base = createGlobalStyle`
  html, body {
    ${Cursor.standard};
    font-family: 'Fira Code', sans-serif;
    font-size: 10px;
    min-width: 290px;
    background-color: var(--color-black-second);

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
