const fetch = require('node-fetch')

const mockedArticles = [
  {
    slug: 'yandex-rebranding',
    updatedAt: '2024-03-20',
  },
  {
    slug: 'spotify-race',
    updatedAt: '2024-03-19',
  },
]

const mockedCases = [
  {
    slug: 'testing-filter-management',
    updatedAt: '2024-03-18',
  },
  {
    slug: 'testing-filter-history',
    updatedAt: '2024-03-17',
  },
]

const staticPages = [
  '/',
  '/about',
  '/cases',
  '/articles',
  '/interactives',
  '/interactives/generator',
  '/interactives/itbunker',
  '/interactives/itmafia',
  '/styleguide',
]

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://connecteam.space',
  generateRobotsTxt: true,
  exclude: ['/api*'],

  transform: async (config, path) => {
    if (staticPages.includes(path)) {
      return {
        loc: path,
        changefreq: 'daily',
        priority: path === '/' ? 1.0 : 0.9,
        lastmod: new Date().toISOString(),
      }
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },

  additionalPaths: async () => {
    return [
      ...staticPages.map(page => ({
        loc: page,
        lastmod: new Date().toISOString(),
        priority: page === '/' ? 1.0 : 0.9,
        changefreq: 'daily',
      })),
      ...mockedArticles.map(article => ({
        loc: `/articles/${article.slug}`,
        lastmod: new Date(article.updatedAt || Date.now()).toISOString(),
        priority: 0.7,
        changefreq: 'weekly',
      })),
      ...mockedCases.map(caseArticle => ({
        loc: `/cases/${caseArticle.slug}`,
        lastmod: new Date(caseArticle.updatedAt || Date.now()).toISOString(),
        priority: 0.7,
        changefreq: 'weekly',
      })),
    ]
  },

  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: ['/api'] }],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://connecteam.space'}/sitemap.xml`,
    ],
  },
}
