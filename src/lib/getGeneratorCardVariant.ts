interface GetGeneratorCardVariantProps {
  itemIndex: number
}

interface GeneratorCardVariant {
  bgColor: 'gray' | 'pink' | 'purple'
  rotate: 'right' | 'none'
}

export function getGeneratorCardVariant({
  itemIndex,
}: GetGeneratorCardVariantProps): GeneratorCardVariant {
  if (itemIndex === 0) {
    return {
      bgColor: 'pink',
      rotate: 'right',
    }
  }

  if (itemIndex === 4) {
    return {
      bgColor: 'purple',
      rotate: 'none',
    }
  }

  return {
    bgColor: 'gray',
    rotate: 'none',
  }
}
