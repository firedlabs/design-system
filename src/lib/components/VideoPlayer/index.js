import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Loading from '../Loading'
import Controls from './Controls'
import { BigPlay, Video, Wrapper } from './styles'

function VideoPlayer({
  poster,
  sources,
  lessons,
  lessonActive,
  changeLessonActive,
  box
}) {
  const [sourcesState, setSourcesState] = useState(sources)
  const [showControls, setShowControls] = useState(false)
  const [outControls, setOutControls] = useState(true)
  const [play, setPlay] = useState(false)
  const [mute, setMute] = useState(false)
  const [volume, setVolume] = useState(100)
  const [duration, setDuration] = useState(100)
  const [progress, setProgress] = useState(0)
  const [buffer, setBuffer] = useState(0)
  const [bigPlay, setBigPlay] = useState(false)
  const [loading, setLoading] = useState(false)
  const [activeFullscreen, setActiveFullscreen] = useState(false)
  const wrapper = useRef()
  const video = useRef()

  const velocities = ['0.25', '0.5', '0.75', '1', '1.25', '1.5', '1.75', '2']
  const [showVelocity, setShowVelocity] = useState(false)
  const [velocityActive, setVelocityActive] = useState('1')

  const [menuLessonOpen, setMenuLessonOpen] = useState(false)
  const [playlistOpen, setPlaylistOpen] = useState(false)

  useEffect(() => {
    const { buffered } = video.current

    if (buffered.length) {
      setBuffer(buffered.end(buffered.length - 1))
    }
  })

  useEffect(() => {
    const volumeStorage = localStorage.getItem('volume') ?? 100
    const playbackRate = localStorage.getItem('playbackRate') ?? '1'
    setVolume(volumeStorage)
    video.current.volume = volumeStorage / 100
    video.current.focus()
    setVelocityActive(playbackRate)
    video.current.playbackRate = playbackRate
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (outControls) {
        setShowControls(false)
        setShowVelocity(false)
        setPlaylistOpen(false)
        setMenuLessonOpen(false)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [showControls, outControls])

  const changeMute = (muteParam) => {
    video.current.muted = muteParam
    setMute(muteParam)
  }

  const playAndPause = () => {
    if (play) {
      video.current.pause()
      setPlay(false)
    } else {
      video.current.play()
      setBigPlay(false)
      setPlay(true)
    }
    setShowVelocity(false)
    setPlaylistOpen(false)
    setMenuLessonOpen(false)
  }

  const clickInVideo = () => {
    if (playlistOpen) {
      setPlaylistOpen(false)
      setMenuLessonOpen(false)
    } else {
      playAndPause()
    }
  }

  const handleChangeProgressBar = ({ target }) => {
    const { value } = target

    setProgress(value)
    video.current.currentTime = value
  }

  const handleMouseUp = () => video.current.focus()

  const handleMouseMove = () => setShowControls(true)

  const handleTimeUpdate = () => {
    const { duration: videoDuration, currentTime } = video.current

    setDuration(videoDuration)
    setProgress(currentTime)
  }

  const handleMute = () => {
    const volumeStorage = localStorage.getItem('volume')

    if (mute) {
      changeMute(false)
      setVolume(volumeStorage)
      video.current.volume = volumeStorage / 100
    } else {
      changeMute(true)
      setVolume(0)
      video.current.volume = volumeStorage / 100
    }
  }

  const changeVolume = (value) => {
    localStorage.setItem('volume', value)

    setVolume(value)
    changeMute(false)
    video.current.volume = value / 100
  }

  const handleVolume = ({ target }) => {
    const { value } = target
    changeVolume(value)
  }

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
      setActiveFullscreen(false)
    } else {
      wrapper.current.requestFullscreen()
      setActiveFullscreen(true)
    }
  }

  const changeActiveVelocity = ({ target }) => {
    const playbackRate = target.textContent
    localStorage.setItem('playbackRate', playbackRate)
    setShowVelocity(false)
    setVelocityActive(playbackRate)
    video.current.playbackRate = playbackRate
  }

  const toggleVelocity = () => {
    setShowVelocity((old) => !old)
  }

  const handleMouseLeave = () => setOutControls(true)

  const handleMouseEnter = () => setOutControls(false)

  const togglePlaylist = () => setPlaylistOpen((old) => !old)
  const toogleMenuLesson = () => setMenuLessonOpen((old) => !old)

  const changeVideo = (event) => {
    const src = event.currentTarget.getAttribute('id')
    const type = event.currentTarget.getAttribute('data-type')

    setSourcesState({
      src,
      type
    })
  }

  const handleClickLesson = (event) => {
    if (menuLessonOpen) {
      changeLessonActive(event)
    }
  }

  const keys = {
    ' ': playAndPause,
    ArrowRight: () => {
      video.current.currentTime += 5
    },
    ArrowLeft: () => {
      video.current.currentTime -= 5
    },
    ArrowUp: () => {
      if (video.current.volume <= 0.9) {
        const newVolume = video.current.volume + 0.1
        changeVolume(newVolume * 100)
      } else {
        changeVolume(100)
      }
    },
    ArrowDown: () => {
      if (video.current.volume >= 0.1) {
        const newVolume = video.current.volume - 0.1
        changeVolume(newVolume * 100)
      } else {
        changeVolume(0)
      }
    },
    m: handleMute,
    l: () => {
      setVelocityActive((oldVelocity) => {
        if (oldVelocity <= 1.75) {
          const newVelocity = +oldVelocity + 0.25
          video.current.playbackRate = newVelocity
          return newVelocity.toString()
        }
        return oldVelocity
      })
    },
    k: () => {
      setVelocityActive((oldVelocity) => {
        if (oldVelocity >= 0.5) {
          const newVelocity = +oldVelocity - 0.25
          video.current.playbackRate = newVelocity
          return newVelocity.toString()
        }
        return oldVelocity
      })
    },
    f: toggleFullscreen
  }

  const handleKeyUp = ({ key }) => keys[key] && keys[key]()

  const handleLoadStart = () => setBigPlay(true)

  const handleWaiting = () => setLoading(true)

  const handleCanPlay = () => setLoading(false)

  return (
    <Wrapper
      showCursor={showControls}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onKeyUp={handleKeyUp}
      ref={wrapper}
      box={box}
    >
      <Video
        onClick={clickInVideo}
        ref={video}
        onTimeUpdate={handleTimeUpdate}
        onLoadStart={handleLoadStart}
        onWaiting={handleWaiting}
        onCanPlay={handleCanPlay}
        key={sourcesState.src}
        src={sourcesState.src}
        type={sourcesState.type}
        poster={poster}
      />

      <Loading active={loading} />
      <BigPlay active={bigPlay} onClick={playAndPause} />

      <Controls
        showControls={showControls}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        duration={duration}
        progress={progress}
        buffer={buffer}
        handleChangeProgressBar={handleChangeProgressBar}
        play={play}
        playAndPause={playAndPause}
        mute={mute}
        handleMute={handleMute}
        volume={volume}
        handleVolume={handleVolume}
        fullscreen={toggleFullscreen}
        activeFullscreen={activeFullscreen}
        showVelocity={showVelocity}
        changeActiveVelocity={changeActiveVelocity}
        velocityActive={velocityActive}
        toggleVelocity={toggleVelocity}
        velocities={velocities}
        lessons={lessons}
        lessonActive={lessonActive}
        clickLesson={handleClickLesson}
        playlistOpen={playlistOpen}
        clickIconPlaylist={togglePlaylist}
        menuOpen={menuLessonOpen}
        clickMenuLesson={toogleMenuLesson}
        clickVideo={changeVideo}
      />
    </Wrapper>
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
})

VideoPlayer.defaultProps = {
  poster: '',
  box: false
}

VideoPlayer.propTypes = {
  sources: PropTypes.shape({
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  changeLessonActive: PropTypes.func.isRequired,
  lessons: PropTypes.arrayOf(lesson).isRequired,
  lessonActive: PropTypes.string.isRequired,
  poster: PropTypes.string,
  box: PropTypes.bool
}

export default VideoPlayer
