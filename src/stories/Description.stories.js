import React from 'react'
import { Description } from '../lib'

export default {
  title: 'Components/Description',
  component: Description
}

const Template = (args) => <Description {...args} />

export const Default = Template.bind({})
Default.args = {
  children:
    'Hoje, instrutor e desenvolvedor FrontEnd/UX pela CollabCode, Marco já trabalhou nas mais diversas áreas. Foi palhaço, entrou na área de TI como desenvolvedor HMI/PLC e gosta de ir descobrindo seu caminho conforme o percorre. Marco também tem uma crescente presença em comunidades de UX e Front-end, trabalhando para uní-las, palestra em empresas e eventos como o WebBR, escreve em diversos blogs como o da Caelum, o Pinceladas da Web e seu Medium, quando não está jogando Airsoft ou trocando ideias com amigos.'
}
