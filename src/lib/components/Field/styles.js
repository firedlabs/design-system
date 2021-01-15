import styled from 'styled-components'
import { Body1 } from '../../Styles/Tools'

export const Content = styled.span`
  margin-bottom: var(--gap-smallest);
  color: var(--color-third);
  font-weight: bold;
`

export const Input = styled.input`
  ${Body1};
  box-sizing: border-box;
  background-color: var(--color-third);
  color: var(--color-black-first);
  padding: var(--gap-small);
  border: none;
  width: 100%;

  &:read-only {
    background-color: var(--color-black-fourth);
  }
`

export const Label = styled.label`
  ${Body1};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: var(--gap-small);
  width: 100%;
`
