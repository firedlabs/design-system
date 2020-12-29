import React from 'react'
import { Cover } from '../lib'
import curso from './assets/curso-html-css.png'

const tags = [
  {
    children: 'video',
    backgroundColor: 'colorThird',
    color: 'colorBlackFirst'
  },
  {
    children: 'pdf',
    backgroundColor: 'colorThird',
    color: 'colorBlackFirst'
  }
]

const progress = {
  valueNow: 40,
  valueMax: 164
}

export default {
  title: 'Components/Cover',
  component: Cover
}

const Template = (args) => <Cover {...args} />

export const Default = Template.bind({})
Default.args = {
  src: curso,
  alt: 'Curso feliz de HTML e CSS',
  title: 'Curso feliz de HTML e CSS',
  tags
}

export const WithProgressBar = Template.bind({})
WithProgressBar.args = {
  src: curso,
  alt: 'Curso feliz de HTML e CSS',
  title: 'Curso feliz de HTML e CSS',
  tags,
  progress
}
