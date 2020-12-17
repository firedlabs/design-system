import { createGlobalStyle } from 'styled-components'
import FiraCode from './FiraCode'
import PressStart2P from './PressStart2P'

const Fonts = createGlobalStyle`
    ${FiraCode.light};
    ${FiraCode.medium};
    ${PressStart2P.regular};
`

export default Fonts
