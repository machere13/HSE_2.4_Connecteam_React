interface GetFAQCardVariantProps {
  itemIndex: number
}

interface FAQCardVariant {
  background: 'pink' | 'purple' | 'white'
  width: '50' | '33'
}

export function getFAQCardListVariant({ itemIndex }: GetFAQCardVariantProps): FAQCardVariant {
  const patternIndex = itemIndex % 4

  if (patternIndex === 0) {
    return {
      background: 'pink',
      width: '50',
    }
  }

  if (patternIndex === 1) {
    return {
      background: 'white',
      width: '33',
    }
  }

  if (patternIndex === 2) {
    return {
      background: 'purple',
      width: '33',
    }
  }

  return {
    background: 'white',
    width: '50',
  }
}
