import { createGlobalStyle } from 'styled-components'
import { palette } from './palette'

const Colors = createGlobalStyle`
  :root {
    --color-first: ${palette.colorFirst};
    --color-second: ${palette.colorSecond};
    --color-third: ${palette.colorThird};

    --color-black-first: ${palette.colorBlackFirst};
    --color-black-second: ${palette.colorBlackSecond};
    --color-black-third: ${palette.colorBlackThird};
    --color-black-fourth: ${palette.colorBlackFourth};

    --color-error: ${palette.colorError};
    --color-warning: ${palette.colorWarning};
    --color-success: ${palette.colorSuccess};
  }
`

export default Colors
