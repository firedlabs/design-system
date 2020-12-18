import styled from 'styled-components'
import { Title, Image, Icons } from '../../index'

export const Action = styled.a`
  &:not(:last-child) {
    margin-right: var(--gap-big);
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`

export const ProfileStyle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > ${Title} {
    color: var(--color-first);
  }

  & > ${Title}, & > ${Image} {
    margin-bottom: var(--gap-smallest);
  }

  & ${Icons} {
    width: 60px;
  }
`
