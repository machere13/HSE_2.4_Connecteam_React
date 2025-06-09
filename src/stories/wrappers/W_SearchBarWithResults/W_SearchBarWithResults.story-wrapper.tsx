import React, { useEffect, useState } from 'react'

import W_SearchBarWithResults from '@/components/wrappers/W_SearchBarWithResults/W_SearchBarWithResults'

declare global {
  interface Window {
    __storybookSearchOverride?: (query: string) => Promise<unknown>
  }
}

type ForcedState = 'loading' | 'empty' | null

interface Props {
  forcedState?: ForcedState
}

export default function W_SearchBarWithResults_StoryWrapper({ forcedState }: Props) {
  const [initialValue, setInitialValue] = useState('')

  useEffect(() => {
    setInitialValue('storybook')
    if (forcedState === 'loading') {
      window.__storybookSearchOverride = () => new Promise(resolve => setTimeout(resolve))
    } else if (forcedState === 'empty') {
      window.__storybookSearchOverride = () => Promise.resolve([])
    }

    return () => {
      window.__storybookSearchOverride = undefined
    }
  }, [forcedState])

  return <W_SearchBarWithResults initialValue={initialValue} />
}
