import React, { useEffect, useState } from 'react'

import styles from './M_StyleguideNavigation.module.css'

const sections = [
  { id: 'section-one', title: 'О нас' },
  { id: 'section-two', title: 'Логотип' },
  { id: 'section-three', title: 'Цвета' },
  { id: 'section-four', title: 'Типографика' },
  { id: 'section-five', title: 'Сетка' },
  { id: 'section-six', title: 'Изображения' },
  { id: 'section-seven', title: 'Мерч' },
]

const M_StyleguideNavigation = () => {
  const [activeSection, setActiveSection] = useState('section-one')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-50% 0px -50% 0px',
      },
    )

    sections.forEach(section => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={styles.navigation}>
      {sections.map((section, index) => (
        <button
          key={section.id}
          className={`${styles.nav_item} ${activeSection === section.id ? styles.active : ''}`}
          onClick={() => scrollToSection(section.id)}
        >
          <div className={styles.nav_item_circle}>
            <p>{index + 1}</p>
          </div>
          <h6>{section.title}</h6>
        </button>
      ))}
    </nav>
  )
}

export default M_StyleguideNavigation
