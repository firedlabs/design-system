import React from 'react'
import { Box, palette } from '../lib'
import thumb from './assets/thumb.png'

const colors = {
  control: {
    type: 'select',
    options: Object.keys(palette)
  }
}

export default {
  title: 'Components/Box',
  component: Box,
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    borderColor: colors,
    backgroundColor: colors,
    color: colors
  }
}

const Template = (args) => <Box {...args} />

export const Default = Template.bind({})
Default.args = {
  light: false
}

export const Light = Template.bind({})
Light.args = {
  light: true
}

export const Image = Template.bind({})
Image.args = {
  light: false,
  src: thumb,
  alt: 'Inscrição abertas para o curso de HTML e CSS'
}
Image.parameters = {
  layout: 'centered'
}

const children = (
  <>
    Será uma semana de conteúdo com uma aula nova todos os dias, começando no
    dia <strong>08/02/2021</strong>. As aula serão liberadas às{' '}
    <strong>06:32</strong> da madrugada na FiredLabs e terá plantão de dúvidas
    ao vivo às <strong>17:33</strong> na{' '}
    <a href="https://twitch.tv/marcobrunodev">twitch.tv/marcobrunodev</a> todos
    os dias durante a semana do curso.
  </>
)

export const Content = Template.bind({})
Content.args = {
  light: false,
  children
}

export const ChangeColors = Template.bind({})
ChangeColors.args = {
  light: false,
  children,
  borderColor: 'colorSecond',
  backgroundColor: 'colorThird',
  color: 'colorFirst'
}
