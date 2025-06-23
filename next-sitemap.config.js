const fetch = require('node-fetch')

const staticPages = [
  '/',
  '/about',
  '/cases',
  '/articles',
  '/interactives',
  '/interactives/generator',
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
    const paths = []

    paths.push(
      ...staticPages.map(page => ({
        loc: page,
        lastmod: new Date().toISOString(),
        priority: page === '/' ? 1.0 : 0.9,
        changefreq: 'daily',
      }))
    )

    try {
      const articlesResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://connecteam.space'}/api/articles`)
      if (articlesResponse.ok) {
        const articles = await articlesResponse.json()
        paths.push(
          ...articles.map(article => ({
            loc: `/articles/${article.slug}`,
            lastmod: new Date(article.updatedAt || article.createdAt || Date.now()).toISOString(),
            priority: 0.7,
            changefreq: 'weekly',
          }))
        )
      }

      const casesResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://connecteam.space'}/api/cases`)
      if (casesResponse.ok) {
        const cases = await casesResponse.json()
        paths.push(
          ...cases.map(caseArticle => ({
            loc: `/cases/${caseArticle.slug}`,
            lastmod: new Date(caseArticle.updatedAt || caseArticle.createdAt || Date.now()).toISOString(),
            priority: 0.7,
            changefreq: 'weekly',
          }))
        )
      }

      const testsResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://connecteam.space'}/api/tests`)
      if (testsResponse.ok) {
        const tests = await testsResponse.json()
        paths.push(
          ...tests.map(test => ({
            loc: `/interactives/tests/${test.slug}`,
            lastmod: new Date(test.updatedAt || test.createdAt || Date.now()).toISOString(),
            priority: 0.6,
            changefreq: 'monthly',
          }))
        )
      }
    } catch (error) {
      console.error('Error fetching data for sitemap:', error)
    }

    return paths
  },

  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: ['/api'] }],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://connecteam.space'}/sitemap.xml`,
    ],
  },
}
