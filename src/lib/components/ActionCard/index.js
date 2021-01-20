import React from 'react'
import PropTypes from 'prop-types'
import { ActionCardStyles } from './styles'

function ActionCard({ as, to, children, href }) {
  return (
    <ActionCardStyles as={as} to={to} href={href}>
      {children}
    </ActionCardStyles>
  )
}

ActionCard.defaultProps = {
  href: '#',
  as: 'a',
  to: ''
}

ActionCard.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string
}

export default ActionCard
