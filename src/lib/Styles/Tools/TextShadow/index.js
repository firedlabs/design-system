import { css } from 'styled-components'
import { palette } from '../../Settings/Colors/palette'

const sizes = {
  small: '0.5rem 0.5rem 0px',
  medium: '1rem 1rem 0px'
}

const small = css`
  text-shadow: ${sizes.small} var(--color-black-first);
`

const medium = css`
  text-shadow: ${sizes.medium} var(--color-black-first);
`

const colorSize = (color, size) => css`
  text-shadow: ${sizes[size]} ${palette[color]};
`

export const TextShadow = {
  small,
  medium,
  colorSize
}
