import { useEffect } from 'react'

import { useRouter } from 'next/router'

import type { ErrorType } from '@/types/error'
import type { NextPage } from 'next'

const ErrorPage: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      const path = router.asPath

      let errorType: ErrorType = '404'

      if (path.startsWith('/articles/')) {
        errorType = '404-article'
      } else if (path.startsWith('/cases/')) {
        errorType = '404-case'
      } else if (path.startsWith('/tests/')) {
        errorType = '404-test'
      }

      window.showError(errorType)
    }
  }, [router.isReady, router.asPath])

  return null
}

export default ErrorPage
