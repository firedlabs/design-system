import styled, { css } from 'styled-components'
import { BoxShadow, Body1 } from '../../Styles/Tools'

const hasImage = ({ image }) =>
  image &&
  css`
    display: inline-flex;
    padding: 0;
  `
export const Content = styled.p`
  ${Body1};
  color: var(--color-third);
`

const hasLight = ({ light }) =>
  light &&
  css`
    background-color: var(--color-black-fourth);

    & > ${Content} {
      color: var(--color-black-first);
    }
  `

export const Image = styled.img`
  width: 100%;
`

export const BoxStyles = styled.article`
  box-sizing: border-box;
  width: 100%;
  ${BoxShadow.medium};
  border: 5px solid var(--color-third);
  padding: var(--gap-medium);
  background-color: var(--color-black-second);

  ${hasLight};
  ${hasImage};
`
