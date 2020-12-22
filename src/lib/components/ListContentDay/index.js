import React from 'react'
import PropTypes from 'prop-types'
import ContentDay from '../ContentDay'
import ListContentDayStyle from './styles'

function ListContentDay({ days }) {
  return (
    <ListContentDayStyle length={days.length}>
      {days.map((day) => (
        <ContentDay key={day.title} {...day} />
      ))}
    </ListContentDayStyle>
  )
}

const contentDay = {
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

ListContentDay.propTypes = {
  days: PropTypes.arrayOf(PropTypes.shape(contentDay))
}

export default ListContentDay
