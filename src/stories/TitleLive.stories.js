import React from 'react'
import { TitleLive } from '../lib'
import marco from './assets/marcobruno.png'

export default {
  title: 'Components/TitleLive',
  component: TitleLive
}

const Template = (args) => <TitleLive {...args} />

export const Default = Template.bind({})
Default.args = {
  src: marco,
  alt: 'Foto do Marco Bruno',
  title: 'marcobrunodev',
  isLive: false
}

export const LiveOn = Template.bind({})
LiveOn.args = {
  src: marco,
  alt: 'Foto do Marco Bruno',
  title: 'marcobrunodev',
  isLive: true
}
