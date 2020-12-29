import styled, { css } from 'styled-components'
import { palette } from '../../Styles/Settings/Colors/palette'
import { BoxShadow, Body1 } from '../../Styles/Tools'

const hasImage = ({ image }) =>
  image &&
  css`
    display: inline-flex;
    padding: 0;
  `

const changeColor = ({ color }) =>
  color &&
  css`
    color: ${palette[color]};
  `

export const Content = styled.p`
  ${Body1};
  color: var(--color-third);
  ${changeColor};

  & > strong {
    font-weight: bold;
  }

  & > a {
    color: var(--color-first);
    font-weight: bold;
    text-underline-offset: var(--gap-smallest);
    text-decoration-thickness: 3px;
  }
`

const hasLight = ({ light }) =>
  light &&
  css`
    background-color: var(--color-black-fourth);

    & > ${Content} {
      color: var(--color-black-first);

      & > a {
        color: var(--color-third);
      }
    }
  `

const changeBorderColor = ({ borderColor }) =>
  borderColor &&
  css`
    border-color: ${palette[borderColor]};
  `

const changeBackgroundColor = ({ backgroundColor }) =>
  backgroundColor &&
  css`
    background-color: ${palette[backgroundColor]};
  `

export const Image = styled.img`
  width: 100%;
`

export const BoxStyles = styled.article`
  box-sizing: border-box;
  width: 100%;
  ${BoxShadow.medium};
  border: 0.5rem solid var(--color-third);
  padding: var(--gap-medium);
  background-color: var(--color-black-second);

  ${hasLight};
  ${hasImage};
  ${changeBorderColor};
  ${changeBackgroundColor};
`
