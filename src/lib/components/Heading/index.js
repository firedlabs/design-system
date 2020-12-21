import styled, { css } from 'styled-components'
import { Heading as toolsHeading, TextShadow } from '../../Styles/Tools'

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

const Heading = styled.h1`
  ${toolsHeading};
  color: var(--color-third);
  ${TextShadow.small};
  text-align: center;
  margin-bottom: var(--gap-smallest);

  ${hasSmall};
  ${hasMedium};
  ${hasBig};
  ${hasBiggest};
`

export default Heading
