import styled from 'styled-components'
import { Cursor } from '../../../Styles/Tools'
import { Input } from '../styles'

export const Option = styled.option``

export const SelectStyle = styled(Input).attrs({ as: 'select' })`
  ${Cursor.hover};

  &:read-only {
    background-color: var(--color-third);
  }
`
