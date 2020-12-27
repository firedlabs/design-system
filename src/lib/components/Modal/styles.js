import styled, { css } from 'styled-components'
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

const isOpen = ({ active }) =>
  active &&
  css`
    transform: scale(1);
  `

export const ModalStyle = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
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
  transform-origin: center center;
  transform: scale(0);
  transition: transform 400ms ease-in-out;

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

  ${isOpen}
`
