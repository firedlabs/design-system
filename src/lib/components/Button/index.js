import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { palette } from '../../Styles/Settings/Colors/palette'
import { Title, Subtitle, Body2, BoxShadow } from '../../Styles/Tools/index'

const loadingAnimation = keyframes`
  0 {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const changeColor = ({ color, backgroundColor }) => css`
  color: ${palette[color]};
  background-color: ${palette[backgroundColor]};
`

const hasMedium = ({ medium }) =>
  medium &&
  css`
    ${Subtitle}
  `

const hasSmall = ({ small }) =>
  small &&
  css`
    ${Body2}
    padding: var(--gap-small);
  `

const hasLoading = ({ loading }) =>
  loading &&
  css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: none;
    }

    &:after {
      z-index: 0;
      opacity: 1;
    }

    &:before {
      z-index: 0;
      opacity: 1;
    }
  `

const Button = styled.button`
  display: inline-block;
  background-color: var(--color-first);
  ${Title};
  padding: var(--gap-medium);
  color: var(--color-third);
  ${BoxShadow.small};
  text-decoration: none;
  text-align: center;

  &:hover {
    transform: translateY(calc(var(--gap-smallest) / -2)) scale(1.03);
  }

  &:after {
    content: '';
    position: absolute;
    width: 2rem;
    height: 2rem;
    background-color: var(--color-third);
    border: 2px solid var(--color-black-first);
    animation: 1.2s ${loadingAnimation} infinite;
    opacity: 0;
    z-index: -1;
    transition: opacity 100ms 100ms ease-in-out;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: var(--color-warning);
    z-index: -1;
    transition: opacity 100ms ease-in-out;
  }

  ${changeColor};
  ${hasMedium};
  ${hasSmall};
  ${hasLoading};
`

Button.defaultProps = {
  children: 'Enviar'
}

Button.propTypes = {
  children: PropTypes.string
}

export default Button
