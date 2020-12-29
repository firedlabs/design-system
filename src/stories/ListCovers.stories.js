import React from 'react'
import { ListCovers } from '../lib'
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
  title: 'Components/ListCover',
  component: ListCovers
}

const Template = (args) => <ListCovers {...args} />

export const Default = Template.bind({})
Default.args = {
  covers: [
    {
      src: curso,
      alt: 'Curso feliz de HTML e CSS',
      title: 'Curso feliz de HTML e CSS',
      tags,
      progress
    },
    {
      src: curso,
      alt: 'Curso feliz de HTML e CSS',
      title: 'Curso feliz de HTML e CSS',
      tags,
      progress
    },
    {
      src: curso,
      alt: 'Curso feliz de HTML e CSS',
      title: 'Curso feliz de HTML e CSS',
      tags,
      progress
    }
  ]
}
