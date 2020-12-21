import React from 'react'
import { Heading } from '../lib'

export default {
  title: 'Components/Heading',
  component: Heading
}

const Template = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Curso Feliz de HTML e CSS',
  medium: false,
  big: false,
  biggest: false
}

export const Small = Template.bind({})
Small.args = {
  children: 'Curso Feliz de HTML e CSS',
  small: true,
  medium: false,
  big: false,
  biggest: false
}

export const Medium = Template.bind({})
Medium.args = {
  children: 'Curso Feliz de HTML e CSS',
  small: false,
  medium: true,
  big: false,
  biggest: false
}

export const Big = Template.bind({})
Big.args = {
  children: 'Curso Feliz de HTML e CSS',
  small: false,
  medium: false,
  big: true,
  biggest: false
}

export const Biggest = Template.bind({})
Biggest.args = {
  children: 'Curso Feliz de HTML e CSS',
  small: false,
  medium: false,
  big: false,
  biggest: true
}
