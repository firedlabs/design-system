import { css } from 'styled-components'

const fontFace = (family, src, weight) => css`
  @font-face {
    font-family: ${family};
    src: url(${src});
    font-weight: ${weight};
    font-style: normal;
  }
`
export default fontFace
