import { createGlobalStyle } from 'styled-components'
import { Cursor } from '../../Tools'

const Form = createGlobalStyle`
  button {
    border: none;

    &:hover {
      ${Cursor.hover};
    }
  }
`

export default Form
