import styled, { css } from 'styled-components'
import { palette } from '../../Styles/Settings/Colors/palette'
import {
  Body1,
  Subtitle,
  Title as toolsTitle,
  BoxShadow
} from '../../Styles/Tools'
import { BoxStyles } from '../Box/styles'

export const WrapperOptions = styled.div`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  width: 100%;
  flex-wrap: wrap;
`

export const Goal = styled.dd`
  ${Body1};
  padding: var(--gap-medium);

  & > strong {
    ${Subtitle};
    font-weight: bold;
    display: block;
    margin-bottom: var(--gap-small);
  }
`

export const Title = styled.dt`
  display: flex;
  align-items: center;
  background-color: var(--color-third);
  ${toolsTitle};
  position: absolute;
  z-index: -1;
  top: 0;
  transform: translateY(-100%);
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
  `

export const ContentDayStyle = styled(BoxStyles)`
  --height-title: 60px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-third);
  padding: 0;
  margin-top: var(--height-title);

  ${changeColor};
`
