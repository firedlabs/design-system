import styled from 'styled-components'
import { Body1, Cursor, Subtitle } from '../../Styles/Tools'

import { BoxStyles } from '../Box/styles'
import Image from '../Image'

export const TableLink = styled.a`
  color: var(--color-first);
  text-decoration: underline;

  &:hover {
    ${Cursor.hover};
  }
`

export const TableData = styled.td`
  padding: var(--gap-smallest) 0;
  vertical-align: middle;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 150px;

  & > ${Image} {
    width: 40px;
    height: 40px;
    border-width: 2px;
    vertical-align: middle;

    &:hover {
      border-color: var(--color-warning);
      ${Cursor.hover};
    }
  }
`

export const Th = styled.th`
  padding: var(--gap-small) 0;
  border-bottom: 4px solid var(--color-first);
`

export const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-third);
  }
`

export const TableBody = styled.tbody`
  ${Body1};
  text-align: center;
  color: var(--color-third);
`

export const TableHead = styled.thead`
  ${Subtitle};
  color: var(--color-warning);
  font-weight: bold;
`

export const TableStyle = styled(BoxStyles).attrs({ as: 'table' })`
  width: 90vw;
  margin: 0 auto var(--gap-big);
`
