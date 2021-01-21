import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'
import {
  TableStyle,
  TableHead,
  TableRow,
  Th,
  TableBody,
  TableData,
  TableLink
} from './styles'

function Table({ columns, data }) {
  const isProfile = (dataParam) =>
    /\.png|\.jpg$/.test(dataParam) && (
      <Image src={dataParam} alt="Avatar do usuário" />
    )

  const isLink = (dataParam) =>
    typeof dataParam === 'object' &&
    (dataParam.href || dataParam.to) && (
      <TableLink {...dataParam}>{dataParam.content}</TableLink>
    )

  const isCallback = (dataParam) =>
    typeof dataParam === 'object' &&
    typeof dataParam.callback === 'function' && (
      <TableLink as="span" onClick={dataParam.callback}>
        {dataParam.content}
      </TableLink>
    )

  return (
    <TableStyle>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <Th key={column}>{column}</Th>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((row) => (
          <TableRow key={row}>
            {row.map((dataParam) => (
              <TableData key={dataParam}>
                {isProfile(dataParam) ||
                  isLink(dataParam) ||
                  isCallback(dataParam) ||
                  dataParam}
              </TableData>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableStyle>
  )
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf([
    PropTypes.string,
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      link: PropTypes.string,
      to: PropTypes.string,
      as: PropTypes.string
    }),
    PropTypes.shape({
      callback: PropTypes.func.isRequired,
      content: PropTypes.string.isRequired
    })
  ]).isRequired
}

export default Table
