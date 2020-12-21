import styled from 'styled-components'
import Icons from '../Icons'
import Image from '../Image'
import Title from '../Title'

export const Action = styled.a`
  width: 18.2%;

  &:not(:last-child) {
    margin-right: 40px;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProfileStyle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 330px;

  & > ${Title} {
    color: var(--color-first);
    font-size: 30px;
  }

  & > ${Title}, & > ${Image} {
    margin-bottom: 10px;
  }

  & ${Icons} {
    width: 100%;
  }

  @media (max-width: 375px) {
    & > ${Title} {
      font-size: 26px;
    }
  }

  @media (max-width: 320px) {
    & > ${Title} {
      font-size: 22px;
    }
  }
`
