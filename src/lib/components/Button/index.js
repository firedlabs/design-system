import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from '../../Styles/Settings/Colors/palette'
import { Title, BoxShadow } from '../../Styles/Tools/index'

const changeColor = ({ color, backgroundColor }) => css`
  color: ${palette[color]};
  background-color: ${palette[backgroundColor]};
`

const Button = styled.button`
  background-color: var(--color-first);
  ${Title};
  padding: var(--gap-medium);
  color: var(--color-third);
  ${BoxShadow.small};
  cursor: pointer;

  &:hover {
    transform: translateY(calc(var(--gap-smallest) * -1)) scale(1.05);
  }

  ${changeColor}
`

Button.defaultProps = {
  children: 'Enviar'
}

Button.propTypes = {
  children: PropTypes.string
}

export default Button
