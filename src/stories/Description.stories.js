import React from 'react'
import { Description } from '../lib'

export default {
  title: 'Components/Description',
  component: Description
}

const Template = (args) => <Description {...args} />
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

export const Default = Template.bind({})
Default.args = {
  children
}
