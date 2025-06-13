import React, { useCallback, useEffect, useRef, useState } from 'react'

import cn from 'classnames'

import stickerTexts from '@/assets/data/stickerTexts.json'
import A_StickerBlue from '@/assets/images/A_Sticker/A_StickerBlue.svg'
import A_StickerOrange from '@/assets/images/A_Sticker/A_StickerOrange.svg'
import A_StickerPink from '@/assets/images/A_Sticker/A_StickerPink.svg'
import A_StickerPurple from '@/assets/images/A_Sticker/A_StickerPurple.svg'

import styles from './A_Sticker.module.css'

interface A_StickerProps {
  id: string
  initialPosition?: { x: number; y: number }
  initialText?: string
  type?: 'default' | 'error'
  errorType?: '404'
  errorContent?: 'article' | 'case' | 'test'
  onPositionChange?: (id: string, position: { x: number; y: number }) => void
  onTextChange?: (id: string, text: string) => void
}

const STICKER_BACKGROUNDS = [A_StickerBlue, A_StickerOrange, A_StickerPink, A_StickerPurple]

const getRandomText = () => {
  const randomIndex = Math.floor(Math.random() * stickerTexts.defaultTexts.length)
  return stickerTexts.defaultTexts[randomIndex]
}

const getErrorText = (errorType: string, errorContent?: string) => {
  if (errorType === '404' && errorContent) {
    return stickerTexts.errorTexts['404'][
      errorContent as keyof (typeof stickerTexts.errorTexts)['404']
    ]
  }
  return stickerTexts.errorTexts.default
}

const isLocalStorageAvailable = () => {
  try {
    localStorage.setItem('test', 'test')
    localStorage.removeItem('test')
    return true
  } catch {
    return false
  }
}

export default function A_Sticker({
  id,
  initialPosition,
  initialText,
  type = 'default',
  errorType,
  errorContent,
  onPositionChange,
  onTextChange,
}: A_StickerProps) {
  const [position, setPosition] = useState(initialPosition || { x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [stickerText, setStickerText] = useState(() => {
    if (typeof window !== 'undefined' && isLocalStorageAvailable()) {
      const savedText = localStorage.getItem(`sticker-text-${id}`)
      if (savedText) {
        return savedText
      }
    }
    if (initialText) {
      return initialText
    }
    if (type === 'error' && errorType) {
      return getErrorText(errorType, errorContent)
    }
    return getRandomText()
  })
  const [background] = useState(() => {
    const randomIndex = Math.floor(Math.random() * STICKER_BACKGROUNDS.length)
    return STICKER_BACKGROUNDS[randomIndex]
  })
  const dragStartPos = useRef({ x: 0, y: 0 })
  const stickerRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && isLocalStorageAvailable()) {
      const savedPosition = localStorage.getItem(`sticker-position-${id}`)
      if (savedPosition) {
        setPosition(JSON.parse(savedPosition))
      }
    }
  }, [id])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (type === 'error') return
      e.preventDefault()
      setIsDragging(true)
      dragStartPos.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      }
      if (stickerRef.current) {
        stickerRef.current.style.zIndex = '9997'
      }
    },
    [type, position],
  )

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return

      const x = e.clientX - dragStartPos.current.x
      const y = e.clientY - dragStartPos.current.y

      const newPosition = {
        x: Math.max(0, Math.min(window.innerWidth - 240, x)),
        y: Math.max(0, Math.min(window.innerHeight - 240, y)),
      }

      setPosition(newPosition)
      onPositionChange?.(id, newPosition)
      if (typeof window !== 'undefined' && isLocalStorageAvailable()) {
        localStorage.setItem(`sticker-position-${id}`, JSON.stringify(newPosition))
      }
    },
    [isDragging, id, onPositionChange],
  )

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false)
      if (stickerRef.current) {
        stickerRef.current.style.zIndex = ''
      }
    }
  }, [isDragging])

  const adjustTextareaHeight = useCallback(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [])

  useEffect(() => {
    adjustTextareaHeight()
  }, [stickerText, adjustTextareaHeight])

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    if (text.length <= 60) {
      setStickerText(text)
      onTextChange?.(id, text)
      if (typeof window !== 'undefined' && isLocalStorageAvailable()) {
        localStorage.setItem(`sticker-text-${id}`, text)
      }
    }
  }

  const handleTextAreaKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      const text = e.currentTarget.value
      if (text.length >= 5) {
        e.preventDefault()
      }
    }
  }

  const handleTextAreaMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (type === 'error') return

      const STEP = 10
      const newPosition = { ...position }

      switch (e.key) {
        case 'ArrowUp':
          newPosition.y = Math.max(0, position.y - STEP)
          break
        case 'ArrowDown':
          newPosition.y = Math.min(window.innerHeight - 240, position.y + STEP)
          break
        case 'ArrowLeft':
          newPosition.x = Math.max(0, position.x - STEP)
          break
        case 'ArrowRight':
          newPosition.x = Math.min(window.innerWidth - 240, position.x + STEP)
          break
        default:
          return
      }

      setPosition(newPosition)
      onPositionChange?.(id, newPosition)
      if (typeof window !== 'undefined' && isLocalStorageAvailable()) {
        localStorage.setItem(`sticker-position-${id}`, JSON.stringify(newPosition))
      }
    },
    [type, position, id, onPositionChange],
  )

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (type === 'error') return
      const touch = e.touches[0]
      setIsDragging(true)
      dragStartPos.current = {
        x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      }
    },
    [type, position],
  )

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return
      const touch = e.touches[0]

      const newPosition = {
        x: touch.clientX - dragStartPos.current.x,
        y: touch.clientY - dragStartPos.current.y,
      }

      setPosition(newPosition)
      onPositionChange?.(id, newPosition)
      if (typeof window !== 'undefined' && isLocalStorageAvailable()) {
        localStorage.setItem(`sticker-position-${id}`, JSON.stringify(newPosition))
      }
    },
    [isDragging, id, onPositionChange],
  )

  const handleTouchEnd = useCallback(() => {
    if (isDragging) {
      setIsDragging(false)
    }
  }, [isDragging])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    const pastedText = e.clipboardData.getData('text')
    const newText = stickerText + pastedText

    if (newText.length <= 60) {
      setStickerText(newText)
      onTextChange?.(id, newText)
      if (typeof window !== 'undefined' && isLocalStorageAvailable()) {
        localStorage.setItem(`sticker-text-${id}`, newText)
      }
    }
  }

  return (
    <div
      ref={stickerRef}
      className={cn(styles.wrapper, type === 'error' ? styles.error : '')}
      style={
        type === 'error'
          ? undefined
          : {
              left: `${position.x}px`,
              top: `${position.y}px`,
            }
      }
    >
      <div
        className={styles.sticker}
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        role='button'
        tabIndex={0}
      >
        {React.createElement(background)}
        <textarea
          ref={textareaRef}
          className={cn(styles.input, 'text_captions_m')}
          value={stickerText}
          onChange={handleTextChange}
          onMouseDown={handleTextAreaMouseDown}
          onPaste={handlePaste}
          onKeyDown={handleTextAreaKeyDown}
          maxLength={60}
        />
      </div>
    </div>
  )
}
