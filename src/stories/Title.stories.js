import React from 'react'
import { Title } from '../lib'

export default {
  title: 'Components/Title',
  component: Title
}

const Template = (args) => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Matrícula acaba em...',
  dark: false,
  small: true,
  medium: false,
  big: false,
  biggest: false
}

export const Dark = Template.bind({})
Dark.args = {
  children: 'Matrícula acaba em...',
  dark: true,
  small: true,
  medium: false,
  big: false,
  biggest: false
}

export const Small = Template.bind({})
Small.args = {
  children: 'Matrícula acaba em...',
  dark: false,
  small: true,
  medium: false,
  big: false,
  biggest: false
}

export const Medium = Template.bind({})
Medium.args = {
  children: 'Matrícula acaba em...',
  dark: false,
  small: false,
  medium: true,
  big: false,
  biggest: false
}

export const Big = Template.bind({})
Big.args = {
  children: 'Matrícula acaba em...',
  dark: false,
  small: false,
  medium: false,
  big: true,
  biggest: false
}

export const Biggest = Template.bind({})
Biggest.args = {
  children: 'Matrícula acaba em...',
  dark: false,
  small: false,
  medium: false,
  big: false,
  biggest: true
}
