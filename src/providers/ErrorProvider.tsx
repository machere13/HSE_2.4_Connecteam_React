import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import T_ErrorPage from '@/components/templates/T_ErrorPage/T_ErrorPage'

import type { ErrorType } from '@/types/error'

interface ErrorProviderProps {
  children: React.ReactNode
}

export const ErrorProvider = ({ children }: ErrorProviderProps) => {
  const [error, setError] = useState<ErrorType | null>(null)
  const [keySequence, setKeySequence] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      setError(null)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key >= '0' && event.key <= '9') {
        const newSequence = keySequence + event.key
        setKeySequence(newSequence)
        if (newSequence === '418') {
          setError('418')
          setKeySequence('')
        }
        setTimeout(() => {
          setKeySequence('')
        }, 2000)
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [keySequence])

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
