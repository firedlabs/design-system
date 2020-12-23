import React from 'react'
import PropTypes from 'prop-types'
import Heading from '../Heading'
import Action from '../Action'
import { ModalStyle, Box } from './styles'

function Modal({ title, children, active }) {
  return (
    <ModalStyle active={active}>
      <Heading>{title}</Heading>

      <Box>{children}</Box>

      <Action>Fechar</Action>
    </ModalStyle>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  active: PropTypes.bool.isRequired
}

export default Modal
