import styled, { keyframes } from 'styled-components'
import { BoxShadow } from '../../Styles/Tools'

const jump = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2rem);
  }
`

export const Square = styled.div`
  position: absolute;
  background-color: inherit;
  width: var(--wh);
  height: var(--wh);
  animation: ${jump} var(--duration) cubic-bezier(0, 0.5, 0.5, 1) infinite;
  animation-delay: calc(var(--duration) * -0.25);
  ${BoxShadow.small};
`

export const LoadingStyle = styled.div`
  --wh: 2rem;
  --duration: 1000ms;

  position: absolute;
  background-color: var(--color-third);
  opacity: ${({ active }) => (active ? '1' : '0')};

  &:before,
  &:after {
    content: '';
    display: block;
    width: var(--wh);
    height: var(--wh);
    background-color: inherit;
    position: absolute;
    top: 0;
    left: 0;
    ${BoxShadow.small};
  }

  &:before {
    animation: ${jump} var(--duration) cubic-bezier(0, 0.5, 0.5, 1) infinite;
    left: calc(var(--wh) * -1.5);
  }

  &:after {
    animation: ${jump} var(--duration) cubic-bezier(0, 0.5, 0.5, 1) infinite;
    animation-delay: calc(var(--duration) * -0.5);
    left: calc(var(--wh) * 1.5);
  }
`
