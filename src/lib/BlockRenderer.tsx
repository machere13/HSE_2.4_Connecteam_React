import { A_ArticleHeading } from '../components/atoms/A_ArticleHeading/A_ArticleHeading'
import { A_ArticleParagraph } from '../components/atoms/A_ArticleParagraph/A_ArticleParagraph'
import C_ArticleExampleItems from '../components/collections/C_ArticleExampleItems/C_ArticleExampleItems'
import { C_Tags } from '../components/collections/C_Tags/C_Tags'
import M_ArticleMoreInCaseBlock from '../components/molecules/M_ArticleMoreInCaseBlock/M_ArticleMoreInCaseBlock'
import M_ArticleTelegramBlock from '../components/molecules/M_ArticleTelegramBlock/M_ArticleTelegramBlock'
import M_CaseTitleParagraph from '../components/molecules/M_CaseTitleParagraph/M_CaseTitleParagraph'
import M_MatetialImageBlock from '../components/molecules/M_MaterialImageBlock/M_MatetialImageBlock'
import M_MaterialVideoBlock from '../components/molecules/M_MaterialVideoBlock/M_MaterialVideoBlock'
import M_MaterialWhiteBox from '../components/molecules/M_MaterialWhiteBox/M_MaterialWhiteBox'
import W_ArticleElements from '../components/wrappers/W_ArticleElements/W_ArticleElements'
import { W_ArticleHighlightedSection } from '../components/wrappers/W_ArticleHighlightedSection/W_ArticleHighlightedSection'
import W_ArticlePointedSection from '../components/wrappers/W_ArticlePointedSection/W_ArticlePointedSection'
import { W_CardList } from '../components/wrappers/W_CardList/W_CardList'

import type { ContentItem } from '@/types/content'

interface BlockRendererProps {
  block: ContentItem
  variant: {
    type: 'article' | 'case'
    articleType?: 'big' | 'short' | 'superShort'
    positionIndex: number
  }
  cardListIndex?: number
}

export const BlockRenderer = ({ block, variant, cardListIndex }: BlockRendererProps) => {
  switch (block.type) {
    case 'heading-2':
      return <A_ArticleHeading text={block.text} level={2} />
    case 'heading-4':
      return <A_ArticleHeading text={block.text} level={4} />
    case 'paragraph':
      return <A_ArticleParagraph text={block.text} />
    case 'image':
      return (
        <M_MatetialImageBlock url={block.image} alt={block.alt} description={block.description} />
      )
    case 'previewParagraph':
      return <A_ArticleParagraph text={block.text} />
    case 'tags':
      return <C_Tags items={block.items} />
    case 'cardList':
      return (
        <W_CardList
          title={block.title || ''}
          items={block.items}
          titleType={block.titleType || 'small'}
          variant={{
            ...variant,
            cardListIndex,
          }}
        />
      )
    case 'telegram':
      return <M_ArticleTelegramBlock link={block.link} />
    case 'highlightedSection':
      return (
        <W_ArticleHighlightedSection
          title={block.title}
          items={block.items}
          titleType={block.titleType}
        />
      )
    case 'moreInCase':
      return <M_ArticleMoreInCaseBlock link={block.link} />
    case 'titleParagraph':
      return <M_CaseTitleParagraph title={block.title} text={block.text} />
    case 'video':
      return <M_MaterialVideoBlock title={block.title} video={block.video} />
    case 'whiteBox':
      return <M_MaterialWhiteBox title={block.title} text={block.text} />
    case 'elements':
      return <W_ArticleElements title={block.title} items={block.items} />
    case 'examples':
      return <C_ArticleExampleItems examples={block.items} />
    case 'pointedSection':
      return <W_ArticlePointedSection title={block.title} items={block.items} />
    default:
      const _exhaustiveCheck: never = block
      return null
  }
}
