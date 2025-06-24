import type { ErrorType, HttpError, ApiError } from '@/types/error'

export const handleHttpError = (status: number, _message?: string): boolean => {
  const errorTypes: Record<number, ErrorType> = {
    403: '403',
    500: '500',
    502: '502',
    505: '505',
  }

  const errorType = errorTypes[status]

  if (errorType && typeof window !== 'undefined' && window.showError) {
    window.showError(errorType)
    return true
  }

  return false
}

export const createHttpErrorHandler = () => {
  return (error: HttpError | ApiError | Error): boolean => {
    if ('status' in error && typeof error.status === 'number') {
      return handleHttpError(error.status, error.message)
    }

    if ('response' in error && error.response && typeof error.response.status === 'number') {
      return handleHttpError(error.response.status, error.response.data?.message)
    }

    return false
  }
}
