import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import { Subtitle } from '../../../Styles/Tools'
import { palette } from '../../../Styles/Settings/Colors/palette'

export const Description = styled.span`
  color: var(--color-warning);
`

export const Label = styled.strong`
  margin-bottom: var(--gap-big);
`

const hasMoreThanOne = ({ length }) =>
  length > 1 &&
  css`
    display: inline-flex;
    width: 50%;
  `

const changeColor = ({ color }) =>
  color &&
  css`
    border-color: ${transparentize(0.6, palette[color])};
  `

const isOdd = ({ length }) =>
  length % 2 === 1 &&
  css`
    &:first-child {
      width: 100%;
    }

    &:nth-child(odd):not(:first-child) {
      border-left: var(--border);
      ${changeColor};
    }

    &:nth-child(even):not(:first-child) {
      border-left: none;
    }
  `

export const OptionStyle = styled.dd`
  --border: 0.5rem solid ${transparentize(0.6, palette.colorThird)};

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${Subtitle};
  border-top: var(--border);
  width: 100%;
  flex-shrink: 0;
  padding: var(--gap-medium);
  text-align: center;

  &:nth-child(even):not(:first-child) {
    border-left: var(--border);
    ${changeColor};
  }

  ${hasMoreThanOne};
  ${isOdd};
  ${changeColor};
`
