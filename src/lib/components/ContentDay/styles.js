import styled, { css } from 'styled-components'
import { palette } from '../../Styles/Settings/Colors/palette'
import {
  Body1,
  Subtitle,
  Title as toolsTitle,
  BoxShadow,
  Link
} from '../../Styles/Tools'
import { BoxStyles } from '../Box/styles'

export const WrapperOptions = styled.div`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  width: 100%;
  flex-wrap: wrap;
`

export const LabelGoal = styled.strong`
  ${Subtitle};
  font-weight: bold;
  display: block;
  margin-bottom: var(--gap-small);
`

export const Goal = styled.dd`
  ${Body1};
  padding: var(--gap-medium);
  border-top: 0.5rem solid var(--color-third);
  z-index: 1;
  align-items: stretch;

  & > strong {
    font-weight: bold;
  }

  & > a {
    ${Link};
  }
`

export const Title = styled.dt`
  display: flex;
  align-items: center;
  background-color: var(--color-third);
  ${toolsTitle};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateY(-100%) translateX(-50%);
  padding: 0 var(--gap-small);
  height: var(--height-title);
  color: var(--color-black-first);
  ${BoxShadow.medium};
`

const changeColor = ({ color, fontColor }) =>
  color &&
  css`
    border-color: ${palette[color]};

    & > ${Title} {
      color: ${palette[fontColor]};
      background-color: ${palette[color]};
    }

    & > ${Goal} {
      border-color: ${palette[color]};
    }
  `

export const ContentDayStyle = styled(BoxStyles)`
  --height-title: 6rem;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  color: var(--color-third);
  border-top: 0;
  padding: 0;
  margin-top: var(--height-title);

  ${changeColor};
`
