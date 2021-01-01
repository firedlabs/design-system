import React from 'react'
import PropTypes from 'prop-types'
import {
  SettingsStyle,
  WrapperIcon,
  Icon,
  Menu,
  Action,
  Velocity
} from './styles'

function Settings({
  showSettings,
  showVelocity,
  toggleShowSettings,
  toggleVelocity,
  changeActiveVelocity,
  velocityActive,
  velocities
}) {
  return (
    <SettingsStyle>
      <WrapperIcon>
        <Icon onClick={toggleShowSettings} />
      </WrapperIcon>

      <Menu showMenu={showSettings}>
        <Action onClick={toggleVelocity}>Velocidade</Action>
      </Menu>

      <Velocity showVelocity={showVelocity}>
        {velocities.map((velocity) => (
          <Action
            key={velocity}
            onClick={changeActiveVelocity}
            active={velocity === velocityActive}
          >
            {velocity}
          </Action>
        ))}
      </Velocity>
    </SettingsStyle>
  )
}

Settings.propTypes = {
  showSettings: PropTypes.bool.isRequired,
  toggleShowSettings: PropTypes.func.isRequired,
  toggleVelocity: PropTypes.func.isRequired,
  velocityActive: PropTypes.bool.isRequired,
  changeActiveVelocity: PropTypes.func.isRequired,
  showVelocity: PropTypes.bool.isRequired,
  velocities: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Settings
