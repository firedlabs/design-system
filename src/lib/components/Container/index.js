import styled from 'styled-components'
import { Container as TooolsContainer } from '../../Styles/Tools'
import { ContentDayStyle } from '../ContentDay/styles'
import ListContentDayStyle from '../ListContentDay/styles'

const Container = styled.div`
  ${TooolsContainer};

  & > ${ListContentDayStyle} {
    @media (max-width: 1290px) {
      flex-direction: column;

      & > ${ContentDayStyle} {
        width: 100%;
      }
    }
  }
`

export default Container
