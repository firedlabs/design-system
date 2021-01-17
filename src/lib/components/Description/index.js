import styled, { css } from 'styled-components'
import { Body1, Link } from '../../Styles/Tools'

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

const Description = styled.p`
  ${Body1};
  color: var(--color-third);
  ${hasDark};

  & > strong {
    font-weight: bold;
  }

  & > a {
    ${Link}
  }

  ${hasSmall};
  ${hasMedium};
  ${hasBig};
  ${hasBiggest};
`

export default Description
