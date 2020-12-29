import styled, { css } from 'styled-components'
import { palette } from '../../Styles/Settings/Colors/palette'
import { Body2, BoxShadow } from '../../Styles/Tools'

const sizeBar = css`
  transform: scaleX(${({ currentPercentage }) => currentPercentage / 100});
`

const changeBoxShadow = ({ boxShadow }) =>
  boxShadow === 'small' &&
  css`
    ${BoxShadow.small}
  `

const changeBorderColor = ({ borderColor }) =>
  borderColor &&
  css`
    border-color: ${palette[borderColor]};
  `

const changeColor = ({ color }) =>
  color &&
  css`
    color: ${palette[color]};
  `

const changeBackgroundColor = ({ backgroundColor }) =>
  backgroundColor &&
  css`
    background-color: ${palette[backgroundColor]};
  `

const changeBarColor = ({ barColor }) =>
  barColor &&
  css`
    background-color: ${palette[barColor]};
  `

const ProgressBarStyle = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  ${Body2}
  border: 0.5rem solid var(--color-second);
  background-color: var(--color-third);
  width: 100%;
  padding: calc(var(--gap-smallest) / 2) var(--gap-small);
  position: relative;
  overflow: hidden;
  ${BoxShadow.medium};

  ${changeBoxShadow};
  ${changeBorderColor};
  ${changeBackgroundColor};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--color-success);
    width: 100%;
    height: 100%;
    transform-origin: left center;
    ${sizeBar};
    ${changeBarColor};
  }

  &:after {
    content: '${({ currentPercentage }) => currentPercentage + '%'}';
    position: absolute;
    z-index: 1;
    ${changeColor};
  }
`

export default ProgressBarStyle
