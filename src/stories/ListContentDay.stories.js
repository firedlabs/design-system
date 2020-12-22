import React from 'react'
import { ListContentDay } from '../lib'

export default {
  title: 'Components/ListContentDay',
  component: ListContentDay
}

const Template = (args) => <ListContentDay {...args} />

export const OneDay = Template.bind({})
OneDay.args = {
  days: [
    {
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
  ]
}

export const TwoDays = Template.bind({})
TwoDays.args = {
  days: [
    {
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
    },
    {
      title: 'Aula 01',
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
  ]
}

export const ThreeDays = Template.bind({})
ThreeDays.args = {
  days: [
    {
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
    },
    {
      title: 'Aula 01',
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
    },
    {
      title: 'Aula 02',
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
  ]
}

export const FourDay = Template.bind({})
FourDay.args = {
  days: [
    {
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
    },
    {
      title: 'Aula 01',
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
    },
    {
      title: 'Aula 02',
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
    },
    {
      title: 'Aula 02',
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
  ]
}
