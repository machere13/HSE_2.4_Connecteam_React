import A_MaterialHeading from '../components/atoms/A_MaterialHeading/A_MaterialHeading'
import A_MaterialParagraph from '../components/atoms/A_MaterialParagraph/A_MaterialParagraph'
import C_ArticleExampleItems from '../components/collections/C_ArticleExampleItems/C_ArticleExampleItems'
import C_Tags from '../components/collections/C_Tags/C_Tags'
import M_ArticleMoreInCaseBlock from '../components/molecules/M_ArticleMoreInCaseBlock/M_ArticleMoreInCaseBlock'
import M_CaseTitleParagraph from '../components/molecules/M_CaseTitleParagraph/M_TitleParagraph'
import M_MatetialImageBlock from '../components/molecules/M_MaterialImageBlock/M_MaterialImageBlock'
import M_MaterialTelegramBlock from '../components/molecules/M_MaterialTelegramBlock/M_MaterialTelegramBlock'
import M_MaterialVideoBlock from '../components/molecules/M_MaterialVideoBlock/M_MaterialVideoBlock'
import M_MaterialWhiteBox from '../components/molecules/M_MaterialWhiteBox/M_MaterialWhiteBox'
import W_ArticleElementsSection from '../components/wrappers/W_ArticleElementsSection/W_ArticleElementsSection'
import W_ArticlePointedSection from '../components/wrappers/W_ArticlePointedSection/W_ArticlePointedSection'
import W_MaterialCardListSection from '../components/wrappers/W_MaterialCardListSection/W_MaterialCardListSection'
import W_MaterialHighlightedSection from '../components/wrappers/W_MaterialHighlightedSection/W_MaterialHighlightedSection'

import type { ContentItem } from '@/types/content'

interface MaterialBlockRendererProps {
  block: ContentItem
  variant: {
    type: 'article' | 'case'
    articleType?: 'big' | 'short' | 'superShort'
    positionIndex: number
  }
  cardListIndex?: number
}

export const MaterialBlockRenderer = ({
  block,
  variant,
  cardListIndex,
}: MaterialBlockRendererProps) => {
  switch (block.type) {
    case 'heading-2':
      return <A_MaterialHeading text={block.text} level={2} />
    case 'heading-4':
      return <A_MaterialHeading text={block.text} level={4} />
    case 'paragraph':
      return <A_MaterialParagraph text={block.text} />
    case 'image':
      return (
        <M_MatetialImageBlock url={block.image} alt={block.alt} description={block.description} />
      )
    case 'previewParagraph':
      return <A_MaterialParagraph text={block.text} />
    case 'tags':
      return <C_Tags items={block.items} />
    case 'cardList':
      return (
        <W_MaterialCardListSection
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
      return <M_MaterialTelegramBlock link={block.link} />
    case 'highlightedSection':
      return (
        <W_MaterialHighlightedSection
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
      return <W_ArticleElementsSection title={block.title} items={block.items} />
    case 'examples':
      return <C_ArticleExampleItems examples={block.items} />
    case 'pointedSection':
      return <W_ArticlePointedSection title={block.title} items={block.items} />
    default:
      const _exhaustiveCheck: never = block
      return null
  }
}
