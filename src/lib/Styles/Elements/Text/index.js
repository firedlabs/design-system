import { createGlobalStyle } from 'styled-components'
import { Cursor } from '../../Tools'

const Text = createGlobalStyle`
  a {
    text-decoration: none;
  }
  a:hover {
    ${Cursor.hover};
  }
`

export default Text
