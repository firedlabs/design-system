import { createGlobalStyle } from 'styled-components'
import { Cursor } from '../../Tools'

const Text = createGlobalStyle`
  a:hover {
    ${Cursor.hover};
  }
`

export default Text
