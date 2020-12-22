import styled, { css } from 'styled-components'
import { ContentDayStyle } from '../ContentDay/styles'

const isOdd = ({ length }) =>
  length % 2 === 1 &&
  css`
    &:last-child {
      width: 100%;
      min-width: 100%;
    }
  `

const ListContentDayStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > ${ContentDayStyle} {
    width: calc(50% - var(--gap-biggest) / 2);
    margin-bottom: var(--gap-biggest);
    min-width: 560px;
    flex-shrink: 0;

    &:nth-child(odd) {
      margin-right: var(--gap-biggest);
    }

    ${isOdd};
  }

  @media (max-width: 1225px) {
    flex-direction: column;

    & > ${ContentDayStyle} {
      width: 100%;
      min-width: 100%;

      :nth-child(odd) {
        margin-right: 0;
      }
    }
  }
`

export default ListContentDayStyle
