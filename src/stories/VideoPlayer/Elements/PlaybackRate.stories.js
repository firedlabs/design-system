import React, { useState } from 'react'
import Wrapper from '../../components/Wrapper'
import { PlaybackRate } from '../../../lib'

export default {
  title: 'Components/VideoPlayer/Elements/PlaybackRate',
  component: PlaybackRate
}

const Template = (args) => {
  const [active, setActive] = useState(false)

  const toggleVelocity = () => {
    setActive((old) => !old)
  }

  return (
    <Wrapper bottom>
      <PlaybackRate
        showVelocity={active}
        toggleVelocity={toggleVelocity}
        {...args}
      />
    </Wrapper>
  )
}
const velocities = ['0.25', '0.5', '0.75', '1', '1.25', '1.5', '1.75', '2']

export const Default = Template.bind({})
Default.args = {
  velocities
}
