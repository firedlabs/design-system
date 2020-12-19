import styled, { css } from 'styled-components'
import { BoxShadow } from '../../Styles/Tools'

const hasImage = ({ image }) =>
  image &&
  css`
    display: inline-flex;
    padding: 0;
  `

export const Content = styled.p``

export const Image = styled.img``

export const BoxStyles = styled.article`
  box-sizing: border-box;
  ${BoxShadow.medium};
  background-color: ${({ light }) =>
    light ? 'var(--color-black-fourth)' : 'var(--color-black-second)'};
  border: 5px solid var(--color-third);
  padding: var(--gap-medium);

  ${hasImage}
`
