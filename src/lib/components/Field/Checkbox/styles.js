import styled, { css } from 'styled-components'
import { Body1, Body2, Cursor } from '../../../Styles/Tools'

export const Check = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`

export const Icon = styled.span`
  position: absolute;
  width: 40px;
  height: 20px;
  border-left: 5px solid var(--color-third);
  border-bottom: 5px solid var(--color-third);
  background-color: var(--color-fourth);
  transform-origin: center;
  transform: rotate(-45deg) scale(0.5);
  transition: transform 200ms ease-in-out, opacity 100ms ease-in-out,
    border-color 100ms 150ms ease-in-out;
  z-index: -1;
  opacity: 0;
`

const hasSmall = ({ small }) =>
  small &&
  css`
    ${Body2}
  `

export const Content = styled.span`
  ${Body1};
  position: relative;
  color: var(--color-third);
  text-align: center;
  transition: transform 100ms ease-in-out;

  ${hasSmall}
`

export const CheckboxStyle = styled.label`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  padding: var(--gap-medium);
  background-color: var(--color-fourth);
  border: 5px solid var(--color-third);
  ${Cursor.hover};
  transition: transform 100ms linear;
  transform: ${({ active }) => active && 'scale(0.95)'};

  &:hover {
    transform-origin: center;
    transform: scale(1.07);
  }

  & > ${Icon} {
    ${({ active }) =>
      active &&
      css`
        transform: rotate(-45deg) translate(34px, -30px);
        opacity: 1;
        border-color: var(--color-success);
      `}
  }

  & > ${Content} {
    ${({ active }) =>
      active &&
      css`
        transform: translateY(20px);
      `}
  }
`
