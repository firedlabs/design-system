import styled from 'styled-components'
import Image from '../Image'
import { Title as toolsTitle, TextShadow } from '../../Styles/Tools'

export const Title = styled.h2`
  ${toolsTitle};
  color: var(--color-third);
  ${TextShadow.colorSize('colorSecond', 'small')};
`

export const Content = styled.div``

export const TitleLiveStyle = styled.div`
  display: flex;
  align-items: center;

  & > ${Image} {
    width: 6rem;
    border-width: 0.4rem;
    margin-right: var(--gap-medium);
  }
`
