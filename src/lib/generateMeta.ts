interface GenerateMetaProps {
  title?: string
  description?: string
  image?: string
  url?: string
  keywords?: string
  type?: string
}

export function generateMeta({
  title = 'Connecteam',
  description = 'Connecteam — медиа-сервис про деловую коммуникацию в IT-команде',
  image = '/default-og.png',
  url = 'https://connecteam.space',
  keywords = '',
  type = 'website',
}: GenerateMetaProps) {
  return {
    title,
    description,
    keywords,
    image,
    url,
    type,
    twitterCard: 'summary_large_image',
  }
}
