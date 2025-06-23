import { useRouter } from 'next/router'

import { getCases } from '@/api/getCases'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_ArticleAboutInfo from '@/components/wrappers/W_ArticleAboutInfo/W_ArticleAboutInfo'
import W_StickersContainer from '@/components/wrappers/W_StickersContainer/W_StickersContainer'
import { MaterialBlockRenderer } from '@/lib/materialBlockRenderer'
import { Meta } from '@/lib/Meta'

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
  let cardListIndex = 0

  if (router.isFallback) return <div>Загрузка...</div>

  const authorProps: M_PersonProps = {
    name: caseArticle.case.author.name,
    role: caseArticle.case.author.description,
    photoSrc: caseArticle.case.author.image,
  }

  return (
    <div className='page'>
      <Meta
        title={`${caseArticle.title} | Connecteam`}
        description={caseArticle.description}
        url={`https://connecteam.space/cases/${caseArticle.slug}`}
        type='article'
      />
      <SO_Header />
      <div className='materials_content_wrapper'>
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
        {caseArticle.case.comments.length > 0 && (
          <div>
            {caseArticle.case.comments.map((comment, index) => (
              <div key={index}>
                <p>{comment.comment}</p>
                <p>{comment.author}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <W_StickersContainer />
      <Q_Grid variant='gray' />
      <O_Footer />
    </div>
  )
}
