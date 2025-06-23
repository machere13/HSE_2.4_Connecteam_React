import React from 'react'

import M_StyleguideValueCard from '@/components/molecules/M_StyleguideValueCard/M_StyleguideValueCard'

import styles from './C_StyleguideValueCardListItems.module.css'

type CardRotation = 'left' | 'right' | 'none'
type CardBackground = 'pink' | 'purple'
type TextColor = 'white' | 'black'

interface StyleguideValue {
  title: string
  description: string
  cardDisplay: {
    background: CardBackground | string
    rotate: CardRotation
    textColor: TextColor
    hasIcon: boolean
  }
}

export default function C_StyleguideValueCardListItems() {
  const values: StyleguideValue[] = [
    {
      title: 'Систематизация',
      description: 'Собираем профессиональную проверенную информацию в одном месте',
      cardDisplay: {
        background: 'pink' as CardBackground,
        rotate: 'none',
        textColor: 'white',
        hasIcon: true,
      },
    },
    {
      title: 'Непредвзятость',
      description: 'Показываем взгляд на работу всех участников команды',
      cardDisplay: {
        background: 'main-white' as CardBackground,
        rotate: 'none',
        textColor: 'black',
        hasIcon: false,
      },
    },
    {
      title: 'Честность',
      description:
        'На реальных кейсах рассказываем про ошибки  и создаем классные игры для сплочения коллектива',
      cardDisplay: {
        background:
          'https://res.cloudinary.com/dkmaxwe8e/image/upload/v1750669207/M_StyleguideValueCard_wz0pww.svg',
        rotate: 'none',
        textColor: 'black',
        hasIcon: false,
      },
    },
    {
      title: 'Решение проблем',
      description:
        'Просто и понятно рассказываем о важных инструментах, которые могут помочь  в рабочем общении',
      cardDisplay: {
        background: 'purple' as CardBackground,
        rotate: 'left',
        textColor: 'white',
        hasIcon: false,
      },
    },
  ]

  return (
    <div className={styles.wrapper}>
      {values.map((value, index) => (
        <M_StyleguideValueCard
          key={index}
          title={value.title}
          description={value.description}
          cardDisplay={value.cardDisplay}
        />
      ))}
    </div>
  )
}
