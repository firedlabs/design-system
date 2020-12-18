import styled from 'styled-components'
import { BoxShadow } from '../../Styles/Tools'

const ActionImage = styled.img.attrs(({ image, alt }) => ({
  src: image,
  alt
}))`
  ${BoxShadow.medium};
`

export default ActionImage
