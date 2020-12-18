import React from 'react'
import { ActionImage } from '../lib'
import alura from './assets/alura.png'

export default {
  title: 'Components/ActionImage',
  component: ActionImage
}

export const Default = () => <ActionImage image={alura} alt="Logo da Alura" />
