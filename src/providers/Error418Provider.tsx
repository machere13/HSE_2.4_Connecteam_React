import { useEffect, useState } from 'react'

import { T_ErrorPage } from '@/components/templates/T_ErrorPage/T_ErrorPage'

export const Error418Provider = ({ children }: { children: React.ReactNode }) => {
  const [showError418, setShowError418] = useState(false)

  useEffect(() => {
    let buffer: string[] = []

    const handleKeyDown = (e: KeyboardEvent) => {
      const isNumber = /^[0-9]$/.test(e.key)
      if (!isNumber) return

      buffer = [...buffer, e.key].slice(-3)
      if (buffer.join('') === '418') {
        setShowError418(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (showError418) {
    return <T_ErrorPage errorType='418' onClose={() => setShowError418(false)} />
  }

  return <>{children}</>
}
