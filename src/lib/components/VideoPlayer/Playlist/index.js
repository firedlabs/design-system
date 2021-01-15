import React from 'react'
import PropTypes from 'prop-types'
import VideoDescription from '../VideoDescription'
import {
  PlaylistStyle,
  WrapperLesson,
  Lesson,
  IconWrapper,
  PlaylistIcon,
  MenuLesson,
  Videos,
  VideosLesson
} from './styles'

function Playlist({
  playlistOpen,
  menuOpen,
  lessons,
  lessonActive,
  clickMenuLesson,
  clickLesson,
  clickIconPlaylist,
  clickVideo
}) {
  return (
    <PlaylistStyle>
      <WrapperLesson playlistOpen={playlistOpen}>
        <MenuLesson open={menuOpen} onClick={clickMenuLesson}>
          {lessons.map(({ title, tag }) => (
            <Lesson
              key={title}
              active={title === lessonActive}
              onClick={clickLesson}
            >
              {title} {tag}
            </Lesson>
          ))}
        </MenuLesson>
        <VideosLesson>
          {lessons.map(({ title, videos }) => (
            <Videos key={title + 'video'} active={title === lessonActive}>
              {videos.map(({ poster, title, src, type }, key) => (
                <VideoDescription
                  num={`#${String(key + 1).padStart(2, '0')}`}
                  id={src}
                  data-type={type}
                  onClick={clickVideo}
                  key={src}
                  poster={poster}
                  title={title}
                />
              ))}
            </Videos>
          ))}
        </VideosLesson>
      </WrapperLesson>

      <IconWrapper>
        <PlaylistIcon onClick={clickIconPlaylist} />
      </IconWrapper>
    </PlaylistStyle>
  )
}

const videos = PropTypes.arrayOf(
  PropTypes.shape({
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
).isRequired

const lesson = PropTypes.shape({
  title: PropTypes.string.isRequired,
  videos
}).isRequired

Playlist.defaultProps = {
  playlistOpen: false,
  menuOpen: false
}

Playlist.propTypes = {
  playlistOpen: PropTypes.bool,
  menuOpen: PropTypes.bool,
  lessons: PropTypes.arrayOf(lesson).isRequired,
  lessonActive: PropTypes.string.isRequired,
  clickMenuLesson: PropTypes.func.isRequired,
  clickLesson: PropTypes.func.isRequired,
  clickIconPlaylist: PropTypes.func.isRequired,
  clickVideo: PropTypes.func.isRequired
}

export default Playlist
