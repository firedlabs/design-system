import { createGlobalStyle } from 'styled-components'

const Gaps = createGlobalStyle`
  :root {
    --gap-smallest: 10px;
    --gap-small: 15px;
    --gap-medium: 20px;
    --gap-big: 40px;
    --gap-biggest: 80px;  
  }
`

export default Gaps
