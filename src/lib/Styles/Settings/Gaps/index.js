import { createGlobalStyle } from 'styled-components'

const Gaps = createGlobalStyle`
  :root {
    --gap-smallest: 1rem;
    --gap-small: 1.5rem;
    --gap-medium: 2rem;
    --gap-big: 4rem;
    --gap-biggest: 8rem;  
  }
`

export default Gaps
