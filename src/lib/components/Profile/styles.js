import styled from 'styled-components'
import Icons from '../Icons'
import Image from '../Image'
import Title from '../Title'

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
  width: 100%;

  & > ${Title} {
    color: var(--color-first);
  }

  & > ${Title}, & > ${Image} {
    margin-bottom: var(--gap-smallest);
  }

  & ${Icons} {
    width: 6rem;
  }
`
