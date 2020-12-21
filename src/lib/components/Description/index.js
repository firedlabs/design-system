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

  & > strong {
    font-weight: bold;
  }

  & > a {
    color: var(--color-first);
    font-weight: bold;
    text-underline-offset: var(--gap-smallest);
    text-decoration-thickness: 4px;
  }
`

export default Description
