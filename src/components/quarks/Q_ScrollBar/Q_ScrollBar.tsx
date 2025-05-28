import { useEffect, useState } from 'react'

import styles from './Q_ScrollBar.module.css'

export const Q_ScrollBar = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      const newProgress = (scrollPosition / (documentHeight - windowHeight)) * 100
      setProgress(newProgress)
    }

    window.addEventListener('scroll', updateProgress)
    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.progress_bar} style={{ height: `${progress}%` }} />
    </div>
  )
}
