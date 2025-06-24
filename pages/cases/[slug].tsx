import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

import { getCases } from '@/api/getCases'
import A_DirectionButton from '@/components/atoms/A_DirectionButton/A_DirectionButton'
import C_CaseComments from '@/components/collections/C_CaseComments/C_CaseComments'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import Q_PageLoader, { usePageLoader } from '@/components/quarks/Q_PageLoader/Q_PageLoader'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_ArticleAboutInfo from '@/components/wrappers/W_ArticleAboutInfo/W_ArticleAboutInfo'
import W_RecommendationsMaterials from '@/components/wrappers/W_RecommendationsMaterials/W_RecommendationsMaterials'
import W_StickersContainer from '@/components/wrappers/W_StickersContainer/W_StickersContainer'
import { MaterialBlockRenderer } from '@/lib/materialBlockRenderer'
import { Meta } from '@/lib/Meta'
import { ROUTES } from '@/routes'

import type { M_PersonProps } from '@/components/molecules/M_Person/M_Person'
import type { CaseData } from '@/types/case'
import type { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  const cases = await getCases()
  const paths = cases.map(c => ({ params: { slug: c.slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ case: CaseData }> = async ({ params }) => {
  const cases = await getCases()
  const caseArticle = cases.find(c => c.slug === params?.slug)

  if (!caseArticle) return { notFound: true }

  return { props: { case: caseArticle }, revalidate: 10 }
}

export default function CasePage({ case: caseArticle }: { case: CaseData }) {
  const router = useRouter()
  const { isLoading, stopLoading } = usePageLoader()
  let cardListIndex = 0

  useEffect(() => {
    const timer = setTimeout(() => {
      stopLoading()
    }, 1000)

    return () => clearTimeout(timer)
  }, [stopLoading])

  if (router.isFallback) {
    return <Q_PageLoader isLoading={true} />
  }

  const authorProps: M_PersonProps = {
    name: caseArticle.case.author.name,
    role: caseArticle.case.author.description,
    photoSrc: caseArticle.case.author.image,
  }

  return (
    <>
      <Q_PageLoader isLoading={isLoading} />
      <div className='page'>
        <Meta
          title={`${caseArticle.title} | Connecteam`}
          description={caseArticle.description}
          url={`https://connecteam.space/cases/${caseArticle.slug}`}
          type='article'
        />
        <SO_Header />
        <div className='materials_columns'>
          <C_CaseComments comments={caseArticle.case.comments} />
          <div className='cases_content_wrapper'>
            <div className='position_right'>
              <A_DirectionButton variant='orange_s' href={ROUTES.CASES.INDEX}>
                Вернуться назад
              </A_DirectionButton>
            </div>
            <W_ArticleAboutInfo author={authorProps} />
            {caseArticle.case.content.map((block, index) => {
              if (block.type === 'cardList') {
                const currentIndex = cardListIndex
                cardListIndex++
                return (
                  <MaterialBlockRenderer
                    key={index}
                    block={block}
                    variant={{
                      type: 'case',
                      positionIndex: index,
                    }}
                    cardListIndex={currentIndex}
                  />
                )
              }
              return (
                <MaterialBlockRenderer
                  key={index}
                  block={block}
                  variant={{
                    type: 'case',
                    positionIndex: index,
                  }}
                />
              )
            })}
          </div>
        </div>
        <W_RecommendationsMaterials />
        <W_StickersContainer />
        <Q_Grid variant='gray' />
        <O_Footer />
      </div>
    </>
  )
}
