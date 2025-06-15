import React from 'react'

import A_BackButton from '@/components/atoms/A_BackButton/A_BackButton'
import A_Sticker from '@/components/atoms/A_Sticker/A_Sticker'
import Q_ErrorCode from '@/components/quarks/Q_ErrorCode/Q_ErrorCode'
import Q_ErrorSignature from '@/components/quarks/Q_ErrorSignature/Q_ErrorSignature'
import { ROUTES } from '@/routes'

import styles from './W_ErrorBlock.module.css'

import type { ErrorType } from '@/types/error'

interface W_ErrorBlockProps {
  errorType?: ErrorType
}

export default function W_ErrorBlock({ errorType = '404' }: W_ErrorBlockProps) {
  const getErrorContent = (type: ErrorType): 'article' | 'case' | 'test' | undefined => {
    switch (type) {
      case '404-article':
        return 'article'
      case '404-case':
        return 'case'
      case '404-test':
        return 'test'
      default:
        return undefined
    }
  }

  const getBackButtonProps = (type: ErrorType): { text: string; href: string } => {
    switch (type) {
      case '404-article':
        return { text: 'Вернуться к статьям', href: ROUTES.ARTICLES.INDEX }
      case '404-case':
        return { text: 'Вернуться к кейсам', href: ROUTES.CASES.INDEX }
      case '404-test':
        return { text: 'Вернуться к тестам', href: ROUTES.INTERACTIVES.INDEX }
      default:
        return { text: 'Вернуться на главную', href: ROUTES.MAIN }
    }
  }

  const isSpecial404 = errorType.startsWith('404-')
  const errorContent = getErrorContent(errorType)
  const { text: backButtonText, href: backButtonHref } = getBackButtonProps(errorType)

  return (
    <div className={styles.wrapper}>
      {isSpecial404 ? (
        <>
          <A_Sticker
            id='error-sticker'
            type='error'
            errorType='404'
            errorContent={errorContent}
            initialPosition={{ x: 50, y: 50 }}
          />
          <Q_ErrorSignature errorType={errorType} />
        </>
      ) : (
        <>
          <Q_ErrorCode errorType={errorType} />
          <Q_ErrorSignature errorType={errorType} />
        </>
      )}

      <A_BackButton href={backButtonHref} variant='pink'>
        {backButtonText}
      </A_BackButton>
    </div>
  )
}
