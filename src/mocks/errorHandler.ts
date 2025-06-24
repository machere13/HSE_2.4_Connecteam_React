const ERROR_SLUGS = {
  'error-403': 403,
  'error-500': 500,
  'error-502': 502,
  'error-505': 505,
}

export const getErrorCode = (slug: string): number | null => {
  if (slug in ERROR_SLUGS) {
    return ERROR_SLUGS[slug as keyof typeof ERROR_SLUGS]
  }
  return null
}
