import { Title as toolsTitle } from '../../Styles/Tools/index'
import styled, { css } from 'styled-components'

const hasDark = ({ dark }) =>
  dark &&
  css`
    color: var(--color-black-first);
  `

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

const Title = styled.h2`
  ${toolsTitle};
  color: var(--color-third);
  margin-bottom: var(--gap-smallest);

  ${hasDark};
  ${hasSmall};
  ${hasMedium};
  ${hasBig};
  ${hasBiggest};
`

export default Title
