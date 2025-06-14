import React, { useState, useRef, useEffect } from 'react'

import C_DropdownItems from '@/components/collections/C_DropdownItems/C_DropdownItems'
import M_DropdownBar from '@/components/molecules/M_DropdownBar/M_DropdownBar'

import styles from './W_Dropdown.module.css'

interface W_DropdownProps {
  title: string
  items: string[]
  activeItem?: string
  onItemSelect?: (item: string) => void
}

export default function W_Dropdown({ title, items, activeItem, onItemSelect }: W_DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleItemClick = (item: string) => {
    onItemSelect?.(item)
    setIsOpen(false)
  }

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <M_DropdownBar title={title} isActive={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <C_DropdownItems items={items} activeItem={activeItem} onItemClick={handleItemClick} />
      )}
    </div>
  )
}
