import styled, { css } from 'styled-components'
import { BoxStyles } from '../Box/styles'

const hasSmall = ({ small }) =>
  small &&
  css`
    margin-bottom: var(--gap-small);
  `

const hasMedium = ({ medium }) =>
  medium &&
  css`
    margin-bottom: var(--gap-medium);
  `

const hasBig = ({ big }) =>
  big &&
  css`
    margin-bottom: var(--gap-big);
  `

const hasBiggest = ({ biggest }) =>
  biggest &&
  css`
    margin-bottom: var(--gap-biggest);
  `

const Form = styled(BoxStyles).attrs({ as: 'form' })`
  ${hasSmall};
  ${hasMedium};
  ${hasBig};
  ${hasBiggest};
`

export default Form
