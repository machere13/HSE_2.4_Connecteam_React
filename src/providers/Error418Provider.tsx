import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import T_ErrorPage from '@/components/templates/T_ErrorPage/T_ErrorPage'

export const Error418Provider = ({ children }: { children: React.ReactNode }) => {
  const [showError418, setShowError418] = useState(false)
  const router = useRouter()

  useEffect(() => {
    let buffer: string[] = []

    const handleKeyDown = (e: KeyboardEvent) => {
      if (showError418 && e.key === 'Escape') {
        setShowError418(false)
        return
      }

      const isNumber = /^[0-9]$/.test(e.key)
      if (!isNumber) return

      buffer = [...buffer, e.key].slice(-3)
      if (buffer.join('') === '418') {
        setShowError418(true)
      }
    }

    const handleRouteChange = () => {
      if (showError418) {
        setShowError418(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [showError418, router])

  if (showError418) {
    return <T_ErrorPage errorType='418' onClose={() => setShowError418(false)} />
  }

  return <>{children}</>
}
