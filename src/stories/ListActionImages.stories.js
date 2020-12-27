import React from 'react'
import { ListActionImage, Container } from '../lib'
import alura from './assets/alura.png'
import negros from './assets/negros.png'

export default {
  title: 'Components/ListActionImage',
  component: ListActionImage,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'big']
      }
    }
  }
}

const Template = (args) => <ListActionImage {...args} />

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      src: alura,
      alt: 'Logo da Alura',
      href: 'https://www.alura.com.br/promocao/marcobrunodev',
      isPadding: false
    },
    {
      src: negros,
      alt: 'Logo da NegrosDev',
      href: 'https://negros.dev'
    }
  ],
  size: 'small'
}

export const WithContainer = (args) => (
  <Container>{Template.bind({})(args)}</Container>
)
WithContainer.args = {
  items: [
    {
      src: alura,
      alt: 'Logo da Alura',
      href: 'https://www.alura.com.br/promocao/marcobrunodev',
      isPadding: false
    },
    {
      src: negros,
      alt: 'Logo da NegrosDev',
      href: 'https://negros.dev'
    },
    {
      src: alura,
      alt: 'Logo da Alura',
      href: 'https://www.alura.com.br/promocao/marcobrunodev',
      isPadding: false
    },
    {
      src: negros,
      alt: 'Logo da NegrosDev',
      href: 'https://negros.dev'
    },
    {
      src: alura,
      alt: 'Logo da Alura',
      href: 'https://www.alura.com.br/promocao/marcobrunodev',
      isPadding: false
    },
    {
      src: negros,
      alt: 'Logo da NegrosDev',
      href: 'https://negros.dev'
    },
    {
      src: alura,
      alt: 'Logo da Alura',
      href: 'https://www.alura.com.br/promocao/marcobrunodev',
      isPadding: false
    },
    {
      src: negros,
      alt: 'Logo da NegrosDev',
      href: 'https://negros.dev'
    }
  ],
  size: 'small'
}
