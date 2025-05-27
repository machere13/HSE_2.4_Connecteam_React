// pages/cases/[slug].tsx
import { useRouter } from 'next/router'

import { getCases } from '@/api/getCases'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'

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

  if (router.isFallback) return <div>Загрузка...</div>

  return (
    <div>
      <SO_Header />
      {caseItem.article.content.map((block, index) => {
        switch (block.type) {
          case 'heading-1':
            return <h1 key={index}>{block.text}</h1>
          case 'heading-3':
            return <h3 key={index}>{block.text}</h3>
          case 'paragraph':
            return <p key={index}>{block.text}</p>
          case 'image':
            return <img key={index} src={block.image} alt={block.description || ''} />
          case 'previewParagraph':
            return <p key={index}>{block.text}</p>
          case 'tags':
            return (
              <div key={index}>
                {block.items.map((tag, i) => (
                  <span key={i}>#{tag}</span>
                ))}
              </div>
            )
          case 'titleParagraph':
            return (
              <div key={index}>
                <h4>{block.title}</h4>
                <p>{block.text}</p>
              </div>
            )
          case 'cardList':
            return (
              <div key={index}>
                {block.title && <h4>{block.title}</h4>}
                <ul>
                  {block.items.map((item, i) => (
                    <li key={i}>
                      <strong>{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            )
          case 'telegram':
            return (
              <p key={index}>
                <a href={block.link} target="_blank" rel="noopener noreferrer">Telegram</a>
              </p>
            )
          case 'video':
            return (
              <div key={index}>
                <h4>{block.title}</h4>
                <video src={block.video} controls>
                  <track
                    kind="captions"
                    srcLang="ru"
                    label="Русские субтитры"
                    default
                  />
                </video>
              </div>
            )
          case 'highlightedSection':
            return (
              <div key={index}>
                <h4>{block.title}</h4>
                <ul>
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          default:
            return null
        }
      })}

      {/* Комментарии */}
      {caseItem.article.comments.length > 0 && (
        <div>
          <h3>Комментарии</h3>
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
