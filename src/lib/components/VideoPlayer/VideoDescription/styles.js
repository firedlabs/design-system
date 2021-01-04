import styled from 'styled-components'
import { Body2, Cursor, Subtitle } from '../../../Styles/Tools'

export const Number = styled.strong`
  display: block;
  ${Subtitle};
  margin-bottom: var(--gap-smallest);
`

export const Title = styled.figcaption`
  ${Body2};
  color: var(--color-third);
`

export const MiniThumb = styled.img`
  box-sizing: border-box;
  height: 10rem;
  border: 0.5rem solid var(--color-first);
  margin-right: var(--gap-small);
`

export const VideoDescriptionStyle = styled.figure`
  display: flex;
  align-items: flex-start;
  ${Cursor.hover};
  transform-origin: center left;

  &:hover {
    transform: scale(1.05);
  }
`
