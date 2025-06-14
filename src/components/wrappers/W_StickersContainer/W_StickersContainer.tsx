import React, { useState, useEffect } from 'react'

import A_Sticker from '@/components/atoms/A_Sticker/A_Sticker'

interface W_StickersContainerProps {
  initialCount?: number
}

export default function W_StickersContainer({ initialCount = 2 }: W_StickersContainerProps) {
  const [stickers, setStickers] = useState<
    Array<{ id: string; position: { x: number; y: number }; text: string }>
  >([])

  useEffect(() => {
    const initialStickers = Array.from({ length: initialCount }, (_, index) => ({
      id: `sticker-${index}`,
      position: {
        x: Math.random() * (window.innerWidth - 200),
        y: Math.random() * (window.innerHeight - 200),
      },
      text: '',
    }))
    setStickers(initialStickers)
  }, [initialCount])

  const handlePositionChange = (id: string, position: { x: number; y: number }) => {
    setStickers(prev =>
      prev.map(sticker => (sticker.id === id ? { ...sticker, position } : sticker)),
    )
  }

  const handleTextChange = (id: string, text: string) => {
    setStickers(prev => prev.map(sticker => (sticker.id === id ? { ...sticker, text } : sticker)))
  }

  return (
    <div>
      {stickers.map(sticker => (
        <A_Sticker
          key={sticker.id}
          id={sticker.id}
          initialPosition={sticker.position}
          onPositionChange={handlePositionChange}
          onTextChange={handleTextChange}
          initialText={sticker.text}
        />
      ))}
    </div>
  )
}
