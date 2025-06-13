import React, { useRef, useState, useEffect } from 'react'

import {
  PlayArrow,
  Pause,
  VolumeUp,
  VolumeOff,
  Fullscreen,
  FullscreenExit,
} from '@mui/icons-material'

import styles from './videoPlayer.module.css'

interface VideoPlayerProps {
  video: string
  className?: string
}

export default function VideoPlayer({ video, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [, forceUpdate] = useState({})
  const scrollPositionRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedMetadata = () => {
      setDuration(video.duration)
    }

    const handlePlay = () => {
      setIsPlaying(true)
      const intervalId = setInterval(() => {
        forceUpdate({})
      }, 16)

      return () => {
        clearInterval(intervalId)
      }
    }

    const handlePause = () => {
      setIsPlaying(false)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false)
      }
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isFullscreen])

  useEffect(() => {
    if (isFullscreen) {
      scrollPositionRef.current = {
        x: window.scrollX,
        y: window.scrollY,
      }
    } else {
      window.scrollTo(scrollPositionRef.current.x, scrollPositionRef.current.y)
    }
  }, [isFullscreen])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return
    const time = parseFloat(e.target.value)
    videoRef.current.currentTime = time
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return
    const newVolume = parseFloat(e.target.value)
    videoRef.current.volume = newVolume
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    const newMuted = !isMuted
    videoRef.current.muted = newMuted
    setIsMuted(newMuted)
    if (newMuted) {
      setVolume(0)
    } else {
      setVolume(1)
      videoRef.current.volume = 1
    }
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className={`${styles.wrapper} ${isFullscreen ? styles.fullscreen : ''} ${className}`}>
      <video
        ref={videoRef}
        src={video}
        className={styles.video}
        onClick={togglePlay}
        disablePictureInPicture
        controlsList='nodownload'
      >
        <track kind='captions' />
      </video>
      <div className={styles.controls}>
        <button onClick={togglePlay} className={styles.play_button}>
          {isPlaying ? <Pause /> : <PlayArrow />}
        </button>

        <div className={styles.time_controls}>
          <span className='text_captions_l'>{formatTime(videoRef.current?.currentTime || 0)}</span>
          <input
            type='range'
            min={0}
            max={duration || 100}
            value={videoRef.current?.currentTime || 0}
            onChange={handleTimeChange}
            className={styles.progress_bar}
            style={
              {
                '--progress': `${((videoRef.current?.currentTime || 0) / (duration || 100)) * 100}%`,
              } as React.CSSProperties
            }
          />
          <span className='text_captions_l'>{formatTime(duration)}</span>
        </div>

        <div className={styles.volume_controls}>
          <button onClick={toggleMute} className={styles.volume_button}>
            {isMuted ? <VolumeOff /> : <VolumeUp />}
          </button>
          <input
            type='range'
            min={0}
            max={1}
            step={0.1}
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className={styles.volume_bar}
            style={{ '--volume': `${(isMuted ? 0 : volume) * 100}%` } as React.CSSProperties}
          />
        </div>

        <button onClick={toggleFullscreen} className={styles.fullscreen_button}>
          {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
        </button>
      </div>
    </div>
  )
}
