import styled from 'styled-components'
import { Cursor } from '../../../Styles/Tools'
import Box from '../../Box'
import { IconPlayerWrapper, IconPlayer } from '../IconPlayer'

export const Action = styled.span`
  display: block;

  padding: var(--gap-smallest) 0;
  color: var(--color-third);
  color: ${({ active }) => active && 'var(--color-warning)'};
  transition: transform 100ms linear;

  &:hover {
    color: var(--color-warning);
    transform: scale(1.08);
    ${Cursor.hover};
  }
`

export const Velocity = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  opacity: ${({ showVelocity }) => (showVelocity ? '1' : '0')};
  transform: translateY(calc((100% + var(--gap-big)) * -1))
    translateX(${({ showVelocity }) => (showVelocity ? '0' : '120%')});
  padding: 0 var(--gap-smallest);

  &:hover {
    transform: translateY(calc((100% + var(--gap-big)) * -1)) translateX(0);
  }
`

export const Menu = styled(Box).attrs({ as: 'menu' })`
  position: absolute;
  opacity: ${({ showMenu }) => (showMenu ? '1' : '0')};
  top: 0;
  right: 0;
  padding: 0 var(--gap-smallest);
  transition: transform 200ms ease-in-out, opacity 150ms ease-in-out;
  transform: translateY(calc((100% + var(--gap-big)) * -1))
    translateX(${({ showMenu }) => (showMenu ? '0' : '120%')});

  &:hover {
    transform: translateY(calc((100% + var(--gap-big)) * -1)) translateX(0);
  }
`

export const Icon = styled(IconPlayer).attrs({ icon: 'settings' })`
  opacity: 1;
`

export const WrapperIcon = styled(IconPlayerWrapper)``

export const SettingsStyle = styled.div``
