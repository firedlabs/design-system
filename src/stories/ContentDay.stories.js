import React from 'react'
import { ContentDay, palette } from '../lib'

export default {
  title: 'Components/ContentDay',
  component: ContentDay,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Object.keys(palette)
      }
    },
    fontColor: {
      control: {
        type: 'select',
        options: Object.keys(palette)
      }
    }
  }
}

const Template = (args) => <ContentDay {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Aula 00',
  goal:
    'Entender como funcionarão as aulas, onde tirar as dúvidas e o que você precisa instalar na sua máquina.'
}

export const ChangeColor = Template.bind({})
ChangeColor.args = {
  title: 'Aula 00',
  goal:
    'Entender como funcionarão as aulas, onde tirar as dúvidas e o que você precisa instalar na sua máquina.',
  color: 'colorSecond',
  fontColor: 'colorThird'
}

export const OneOption = Template.bind({})
OneOption.args = {
  title: 'Aula 00',
  goal:
    'Entender como funcionarão as aulas, onde tirar as dúvidas e o que você precisa instalar na sua máquina.',
  options: [
    {
      label: 'Qtd. Videos',
      description: '7'
    }
  ]
}

export const TwoOption = Template.bind({})
TwoOption.args = {
  title: 'Aula 00',
  goal:
    'Entender como funcionarão as aulas, onde tirar as dúvidas e o que você precisa instalar na sua máquina.',
  options: [
    {
      label: 'Qtd. Videos',
      description: '7'
    },
    {
      label: 'Liberar Acesso',
      description: 'Matrícula'
    }
  ]
}

export const ThreeOption = Template.bind({})
ThreeOption.args = {
  title: 'Aula 00',
  goal:
    'Entender como funcionarão as aulas, onde tirar as dúvidas e o que você precisa instalar na sua máquina.',
  options: [
    {
      label: 'Qtd. Videos',
      description: '7'
    },
    {
      label: 'Liberar Acesso',
      description: 'Matrícula'
    },
    {
      label: 'Minutos de vídeo',
      description: '100min'
    }
  ]
}

export const FourOption = Template.bind({})
FourOption.args = {
  title: 'Aula 00',
  goal:
    'Entender como funcionarão as aulas, onde tirar as dúvidas e o que você precisa instalar na sua máquina.',
  options: [
    {
      label: 'Qtd. Videos',
      description: '7'
    },
    {
      label: 'Liberar Acesso',
      description: 'Matrícula'
    },
    {
      label: 'Minutos de vídeo',
      description: '100min'
    },
    {
      label: 'Versão',
      description: 'HTML5 e CSS3'
    }
  ]
}
