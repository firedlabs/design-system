import fontFace from '../fontFace'
import Assets from './FiraCodeAssets'

const FiraCode = {
  light: fontFace('Fira Code', Assets.light, 300),
  regular: fontFace('Fira Code', Assets.regular, 400),
  medium: fontFace('Fira Code', Assets.medium, 500),
  semiBold: fontFace('Fira Code', Assets.semiBold, 600),
  bold: fontFace('Fira Code', Assets.bold, 700)
}

export default FiraCode
