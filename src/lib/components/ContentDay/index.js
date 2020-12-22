import React from 'react'
import PropTypes from 'prop-types'
import { ContentDayStyle, Title, Goal, WrapperOptions } from './styles'
import Option from './Option'

function ContentDay({ title, goal, options, color, fontColor }) {
  const hasOptions = () =>
    options &&
    options.map(
      ({ label, description }) =>
        label &&
        description && (
          <Option
            label={label}
            description={description}
            length={options.length}
            color={color}
          />
        )
    )

  return (
    <ContentDayStyle color={color} fontColor={fontColor}>
      <Title>{title}</Title>
      <Goal>
        <strong>Objetivo:</strong>
        {goal}
      </Goal>
      <WrapperOptions>{hasOptions()}</WrapperOptions>
    </ContentDayStyle>
  )
}

ContentDay.defaultProps = {
  options: [],
  color: 'colorThird',
  fontColor: 'colorBlackFirst'
}

ContentDay.propTypes = {
  title: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      length: PropTypes.number.isRequired
    })
  ),
  color: PropTypes.string,
  fontColor: PropTypes.string
}

export default ContentDay
