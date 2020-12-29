import { Styles } from '../src/lib'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered'
}

export const decorators = [
  (Story) => (
    <>
      <Styles />
      <Story />
    </>
  )
]
