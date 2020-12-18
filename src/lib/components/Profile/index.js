import React from 'react'
import PropTypes from 'prop-types'
import { Image, Title, Icons } from '../../index'
import { Action, Nav, ProfileStyle } from './styles'

function Profile({ name, avatar, socialMedias }) {
  return (
    <ProfileStyle>
      <Title>{name}</Title>
      <Image src={avatar} alt={name} />
      <Nav>
        {socialMedias.map(({ name, url }) => (
          <Action key={url} href={url}>
            <Icons name={name} />
          </Action>
        ))}
      </Nav>
    </ProfileStyle>
  )
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  socialMedias: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  )
}

export default Profile
