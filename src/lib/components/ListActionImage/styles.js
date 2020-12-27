import styled from 'styled-components'
import { ActionImageStyle } from '../ActionImage/styles'

const ListActionImageStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > ${ActionImageStyle} {
    margin: 0 var(--gap-small) calc(var(--gap-small) * 2);
  }
`

export default ListActionImageStyle
