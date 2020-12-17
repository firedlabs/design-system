import { Styles } from '../src/lib'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  backgrounds: {
    default: 'dark',
    values: [{ name: 'dark', value: '#3A4042' }]
  }
}

export const decorators = [
  (Story) => (
    <>
      <Styles />
      <Story />
    </>
  )
]
