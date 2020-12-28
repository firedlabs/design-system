import styled, { css } from 'styled-components'
import { palette } from '../../Styles/Settings/Colors/palette'
import { BoxShadow } from '../../Styles/Tools'

const optionsSize = {
  small: '15rem',
  medium: '22rem',
  big: '30rem'
}

const changeSize = ({ size }) =>
  size &&
  css`
    width: ${optionsSize[size]};
    height: ${optionsSize[size]};
  `

const changeColor = ({ backgroundColor }) =>
  backgroundColor &&
  css`
    background-color: ${palette[backgroundColor]};
  `

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
`

const clearPadding = ({ isPadding }) =>
  !isPadding &&
  css`
    padding: 0;
  `

const changeBoxShadow = ({ boxShadow }) => {
  console.log(boxShadow)

  return (
    boxShadow === 'small' &&
    css`
      ${BoxShadow.small}
    `
  )
}

export const ActionImageStyle = styled.a`
  box-sizing: border-box;
  display: inline-block;
  width: ${optionsSize.small};
  height: ${optionsSize.small};
  ${BoxShadow.medium};
  background-color: var(--color-first);
  ${changeColor};
  padding: var(--gap-small);

  &:hover {
    transform: scale(1.1);
  }

  ${clearPadding};
  ${changeSize};
  ${changeBoxShadow}
`
