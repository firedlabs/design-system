import styled from 'styled-components';
import Box from 'components/Box';
import size from 'styles/settings/size';
import gap from 'styles/settings/gap';
import color from 'styles/settings/color';
import cursor from 'styles/tools/cursor';
import { IconPlayerWrapper, IconPlayer } from '../IconPlayer';

export const Action = styled.span`
  display: block;
  font-size: ${size.small};
  padding: ${gap.small} 0;
  color: ${color.third};
  color: ${({ active }) => active && color.first};
  transition: transform 100ms linear;

  &:hover {
    color: ${color.first};
    transform: scale(1.08);
    ${cursor.hover};
  }
`;

export const Velocity = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  opacity: ${({ showVelocity }) => (showVelocity ? '1' : '0')};
  transform: translateY(calc((100% + ${gap.big}) * -1))
    translateX(${({ showVelocity }) => (showVelocity ? '0' : '120%')});
  padding: 0 ${gap.small};

  &:hover {
    transform: translateY(calc((100% + ${gap.big}) * -1)) translateX(0);
  }
`;

export const Menu = styled(Box).attrs({ as: 'menu' })`
  position: absolute;
  opacity: ${({ showMenu }) => (showMenu ? '1' : '0')};
  top: 0;
  right: 0;
  padding: 0 ${gap.small};
  transition: transform 200ms ease-in-out, opacity 150ms ease-in-out;
  transform: translateY(calc((100% + ${gap.big}) * -1))
    translateX(${({ showMenu }) => (showMenu ? '0' : '120%')});

  &:hover {
    transform: translateY(calc((100% + ${gap.big}) * -1)) translateX(0);
  }
`;

export const Icon = styled(IconPlayer).attrs({ icon: 'settings' })`
  opacity: 1;
`;

export const WrapperIcon = styled(IconPlayerWrapper)``;

export const SettingsStyle = styled.div``;
