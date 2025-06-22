interface GenerateMetaProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

export function generateMeta({
  title = 'Connecteam',
  description = 'Connecteam — медиа-сервис про деловую коммуникацию в IT-команде',
  image = '/metaImage.jpg',
  url = 'https://connecteam.space',
  type = 'website',
}: GenerateMetaProps) {
  return {
    title,
    description,
    image,
    url,
    type,
    twitterCard: 'summary_large_image',
  }
}
