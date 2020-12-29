import styled from 'styled-components'
import { Body2 } from '../../Styles/Tools'

const Live = styled.p`
  display: flex;
  align-items: center;
  ${Body2};
  color: var(--color-error);

  &:before {
    content: '';
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    background-color: var(--color-error);
    margin-right: var(--gap-small);
  }
`

export default Live
