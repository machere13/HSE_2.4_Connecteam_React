import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import T_ErrorPage from '@/components/templates/T_ErrorPage/T_ErrorPage'

import type { ErrorType } from '@/types/error'

interface ErrorProviderProps {
  children: React.ReactNode
}

export const ErrorProvider = ({ children }: ErrorProviderProps) => {
  const [error, setError] = useState<ErrorType | null>(null)
  const router = useRouter()

  useEffect(() => {
    let buffer: string[] = []

    const handleKeyDown = (e: KeyboardEvent) => {
      if (error && e.key === 'Escape') {
        setError(null)
        return
      }

      const isNumber = /^[0-9]$/.test(e.key)
      if (!isNumber) return

      buffer = [...buffer, e.key].slice(-3)
      if (buffer.join('') === '418') {
        setError('418')
      }
    }

    const handleRouteChange = () => {
      setError(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [error, router])

  const showError = (type: ErrorType) => {
    setError(type)
  }

  if (typeof window !== 'undefined') {
    window.showError = showError
  }

  if (error) {
    return <T_ErrorPage errorType={error} onClose={() => setError(null)} />
  }

  return <>{children}</>
}
