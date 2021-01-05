import styled from 'styled-components'
import { Body2 } from '../../Styles/Tools'
import ProgressBarStyle from '../ProgressBar/styles'

export const Title = styled.h3`
  ${Body2};
  color: var(--color-third);
  margin: var(--gap-small) calc(var(--gap-smallest) / 2) 0;
`

export const CoverStyle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & > ${ProgressBarStyle} {
    border-top: none;
    width: 68.5%;
  }
`
