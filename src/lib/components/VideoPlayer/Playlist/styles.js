import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import { IconPlayer, IconPlayerWrapper } from '../IconPlayer'
import { palette } from '../../../Styles/Settings/Colors/palette'
import { Caption, Cursor, Subtitle } from '../../../Styles/Tools'
import { VideoDescriptionStyle } from '../VideoDescription/styles'

export const Tag = styled.div`
  ${Caption};
  margin-left: var(--gap-small);
  background-color: var(--color-second);
  padding: calc(var(--gap-smallest) / 2);
`

export const PlaylistIcon = styled(IconPlayer).attrs({
  icon: 'playlist'
})`
  opacity: 1;
`

export const IconWrapper = styled(IconPlayerWrapper)``

const hasActive = ({ active }) =>
  active &&
  css`
    opacity: 1;
    position: relative;
    z-index: 1;
  `

export const Lesson = styled.a`
  ${Cursor.hover};
  display: flex;
  align-items: center;
  padding: 0 var(--gap-medium);
  height: 7rem;
  opacity: 0;
  position: absolute;

  &:hover {
    background-color: var(--color-black-third);
  }

  ${hasActive};
`

const hasOpen = ({ open }) =>
  open &&
  css`
    & > ${Lesson} {
      opacity: 1;
      position: static;
    }
  `

export const MenuLesson = styled.menu`
  ${Subtitle};
  ${Cursor.hover}
  background-color: var(--color-black-first);
  color: var(--color-third);
  border-bottom: 0.5rem solid var(--color-second);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &::after {
    content: '>';

    position: absolute;
    z-index: 2;
    top: var(--gap-medium);
    right: var(--gap-medium);
    transform: rotate(90deg) scaleY(1.2);
    color: var(--color-first);
  }

  ${hasOpen}
`

export const Videos = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};

  & > ${VideoDescriptionStyle}:not(:last-child) {
    margin-bottom: var(--gap-medium);
  }
  & > ${VideoDescriptionStyle}:last-child {
    margin-bottom: var(--gap-big);
  }
`

export const VideosLesson = styled.section`
  padding: var(--gap-big) var(--gap-medium);
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100% - 8.5rem);
`

const hasPlaylistOpen = ({ playlistOpen }) =>
  playlistOpen &&
  css`
    transform: translate(0) translateY(-100%);
    opacity: 1;
  `

export const WrapperLesson = styled.section`
  box-sizing: border-box;
  width: 30vw;
  min-width: 290px;
  height: 100vh;
  background-color: ${transparentize(0.1, palette.colorSecond)};
  position: fixed;
  top: 0;
  right: 0;
  border-left: 0.5rem var(--color-second) solid;
  padding-top: 7.5rem;
  transition: 200ms transform ease-in-out, 150ms opacity ease-in-out;

  opacity: 0;
  transform: translateX(100%) translateY(-100%);

  ${hasPlaylistOpen}
`

export const PlaylistStyle = styled.div``
