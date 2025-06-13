import Head from 'next/head'

import { generateMeta } from '@/lib/generateMeta'

interface MetaProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

export const Meta = (props: MetaProps) => {
  const meta = generateMeta(props)

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='description' content={meta.description} />
      <meta property='og:type' content={meta.type} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:image' content={meta.image} />
      <meta property='og:url' content={meta.url} />
      <meta name='twitter:card' content={meta.twitterCard} />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
    </Head>
  )
}
