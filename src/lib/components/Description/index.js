import styled, { css } from 'styled-components'
import { Body1 } from '../../Styles/Tools'

const hasDark = ({ dark }) =>
  dark &&
  css`
    color: var(--color-black-first);
  `

const Description = styled.p`
  ${Body1};
  color: var(--color-third);
  ${hasDark};
`

export default Description
