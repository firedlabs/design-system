import styled from 'styled-components'
import { Body1 } from '../../../Styles/Tools'
import { CheckboxStyle } from '../Checkbox/styles'

export const Legend = styled.legend`
  ${Body1};
  font-weight: bold;
  color: var(--color-third);
  margin-left: 1rem;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > ${CheckboxStyle} {
    margin: 0 var(--gap-small) var(--gap-medium);
  }
`

export const FieldsetStyle = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: 0.5rem dashed var(--color-third);
  padding-top: var(--gap-medium);
`
