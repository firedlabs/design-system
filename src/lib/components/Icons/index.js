import styled from 'styled-components'
import html from '../../assets/icons/html.png'
import css from '../../assets/icons/css.png'
import twitter from '../../assets/icons/twitter.png'
import twitch from '../../assets/icons/twitch.png'
import youtube from '../../assets/icons/youtube.png'

const icons = { html, css, twitter, twitch, youtube }

const Icons = styled.img.attrs(({ name }) => ({ src: icons[name] }))`
  image-rendering: crisp-edges;
`

export default Icons
