interface CardConfig {
  bgColor: 'white' | 'pink'
  rotate: 'left' | 'right' | 'none'
}

export function getCardListVariant({
  type,
  articleType,
  itemIndex,
  cardListIndex,
}: {
  type: 'article' | 'case'
  articleType?: 'big' | 'short' | 'superShort'
  positionIndex: number
  itemIndex: number
  cardListIndex?: number
}): CardConfig {
  if (type === 'article') {
    if (articleType === 'big') {
      return {
        bgColor: itemIndex === 0 ? 'pink' : 'white',
        rotate: 'none',
      }
    }
    if (articleType === 'short') {
      if (cardListIndex === 0) {
        return {
          bgColor: itemIndex === 1 ? 'pink' : 'white',
          rotate: itemIndex === 1 ? 'left' : 'none',
        }
      }
      if (cardListIndex === 1) {
        return {
          bgColor: itemIndex === 2 ? 'pink' : 'white',
          rotate: itemIndex === 0 ? 'right' : 'none',
        }
      }
    }
    if (articleType === 'superShort') {
      return {
        bgColor: itemIndex === 1 || itemIndex === 4 ? 'pink' : 'white',
        rotate: itemIndex === 1 ? 'left' : itemIndex === 4 ? 'right' : 'none',
      }
    }
  }

  if (type === 'case') {
    if (cardListIndex === 0) {
      return {
        bgColor: itemIndex === 0 ? 'pink' : 'white',
        rotate: 'none',
      }
    }
    if (cardListIndex === 1) {
      return {
        bgColor: itemIndex === 0 ? 'pink' : 'white',
        rotate: itemIndex === 1 ? 'left' : 'none',
      }
    }
  }

  return { bgColor: 'white', rotate: 'none' }
}
