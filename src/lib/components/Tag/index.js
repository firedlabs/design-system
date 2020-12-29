import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Caption } from '../../Styles/Tools'

const Tag = styled.span`
  ${Caption};
  padding: calc(var(--gap-smallest) / 2);
  background-color: var(--color-third);
  color: var(--color-black-first);
`

Tag.defaultProps = {
  backgroundColor: 'colorThird',
  color: 'colorBlackFirst'
}

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string
}

export default Tag
