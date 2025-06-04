import { useRouter } from 'next/router'

import { getCases } from '@/api/getCases'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import { BlockRenderer } from '@/lib/BlockRenderer'

import type { CaseData } from '@/types/case'
import type { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  const cases = await getCases()
  const paths = cases.map(c => ({ params: { slug: c.slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ case: CaseData }> = async ({ params }) => {
  const cases = await getCases()
  const caseItem = cases.find(c => c.slug === params?.slug)

  if (!caseItem) return { notFound: true }

  return { props: { case: caseItem }, revalidate: 10 }
}

export default function CasePage({ case: caseItem }: { case: CaseData }) {
  const router = useRouter()
  let cardListIndex = 0

  if (router.isFallback) return <div>Загрузка...</div>

  return (
    <div>
      <SO_Header />
      {caseItem.article.content.map((block, index) => {
        if (block.type === 'cardList') {
          const currentIndex = cardListIndex
          cardListIndex++
          return (
            <BlockRenderer
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
          <BlockRenderer
            key={index}
            block={block}
            variant={{
              type: 'case',
              positionIndex: index,
            }}
          />
        )
      })}

      {caseItem.article.comments.length > 0 && (
        <div>
          {caseItem.article.comments.map((comment, index) => (
            <div key={index}>
              <p>{comment.comment}</p>
              <p>{comment.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
