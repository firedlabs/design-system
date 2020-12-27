import React from 'react'
import PropTypes from 'prop-types'
import Heading from '../Heading'
import Action from '../Action'
import { ModalStyle, Box } from './styles'

function Modal({ title, children, active, actionClose }) {
  const handleClick = (event) => {
    if (event.target.tagName === 'SECTION') {
      actionClose()
    }
  }

  return (
    <ModalStyle active={active} onClick={handleClick}>
      <Heading>{title}</Heading>

      <Box>{children}</Box>

      <Action onClick={actionClose}>Fechar</Action>
    </ModalStyle>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  active: PropTypes.bool.isRequired,
  actionClose: PropTypes.func.isRequired
}

export default Modal
