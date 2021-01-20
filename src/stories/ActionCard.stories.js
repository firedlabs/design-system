import React from 'react'
import { ActionCard } from '../lib'

export default {
  title: 'Components/ActionCard',
  component: ActionCard
}

const Template = (args) => <ActionCard {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Usuários'
}
