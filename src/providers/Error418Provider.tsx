import { createContext, useEffect, useState } from 'react'

import { T_ErrorPage } from '@/components/templates/T_ErrorPage/T_ErrorPage'

const Error418Context = createContext({})

export const Error418Provider = ({ children }: { children: React.ReactNode }) => {
  const [showError418, setShowError418] = useState(false)
  const [inputBuffer, setInputBuffer] = useState<string[]>([])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isNumber = /^[0-9]$/.test(e.key)
      if (!isNumber) return

      setInputBuffer(prev => {
        const updated = [...prev, e.key].slice(-3)
        if (updated.join('') === '418') {
          setShowError418(true)
        }
        return updated
      })
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (showError418) {
    return <T_ErrorPage errorType='418' onClose={() => setShowError418(false)} />
  }

  return <>{children}</>
}
