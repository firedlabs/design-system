import styled from 'styled-components'
import { transparentize } from 'polished'
import { palette } from '../../Styles/Settings/Colors/palette'
import Action from '../Action'
import { Body2 } from '../../Styles/Tools'
import { BoxStyles } from '../Box/styles'

export const Box = styled(BoxStyles)`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--gap-medium);
  max-width: 900px;
`

export const ModalStyle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: ${transparentize(0.05, palette.colorSecond)};
  border: 1rem solid var(--color-black-first);
  width: 100vw;
  height: 100vh;
  padding: var(--gap-medium);

  & > ${Action} {
    ${Body2};
    cursor: pointer;
    color: var(--color-third);
    background-color: var(--color-black-fourth);
    padding: var(--gap-smallest);

    &:hover {
      transform: translateY(-0.5rem) scale(1.1);
    }
  }
`
