import { createGlobalStyle } from 'styled-components'

const Colors = createGlobalStyle`
  :root {
    --color-first: #F25A70;
    --color-second: #7C5E99;
    --color-third: #FFF;

    --color-black-first: #000;
    --color-black-second: #3A4042;
    --color-black-third: #828282;

    --color-error: #BA1F33;
    --color-warning: #CEB02A;
    --color-success: #62C370;
  }
`

export default Colors
