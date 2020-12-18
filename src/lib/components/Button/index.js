import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Title, BoxShadow } from '../../Styles/Tools/index'

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
`

Button.defaultProps = {
  children: 'Enviar'
}

Button.propTypes = {
  children: PropTypes.string
}

export default Button
