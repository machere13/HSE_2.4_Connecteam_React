import { useRouter } from 'next/router'

import { getCases } from '@/api/getCases'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_StickersContainer from '@/components/wrappers/W_StickersContainer/W_StickersContainer'
import { MaterialBlockRenderer } from '@/lib/materialBlockRenderer'

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

  return (
    <div>
      <SO_Header />
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
      <W_StickersContainer />
    </div>
  )
}
