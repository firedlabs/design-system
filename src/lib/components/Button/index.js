import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from '../../Styles/Settings/Colors/palette'
import { Title, Subtitle, Body2, BoxShadow } from '../../Styles/Tools/index'

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

  ${changeColor};
  ${hasMedium};
  ${hasSmall};
`

Button.defaultProps = {
  children: 'Enviar'
}

Button.propTypes = {
  children: PropTypes.string
}

export default Button
