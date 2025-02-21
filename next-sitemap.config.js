/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.gabby-epstein-onlyfans.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.gabby-epstein-onlyfans.com/sitemap.xml',
    ],
  },
  changefreq: 'daily',
  priority: 1.0,
  exclude: ['/404', '/500'],
  generateIndexSitemap: true,
  sitemapSize: 5000,
  autoLastmod: true,
  transform: async (config, path) => {
    // Page d'accueil
    if (path === '/') {
      return {
        loc: config.siteUrl,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }

    // Pages de profils MYM
    if (path.startsWith('/comptes-mym/')) {
      return {
        loc: new URL(path, config.siteUrl).href,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }

    // Articles de blog
    if (path.startsWith('/blog/')) {
      return {
        loc: new URL(path, config.siteUrl).href,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      }
    }

    // Autres pages
    return {
      loc: new URL(path, config.siteUrl).href,
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: new Date().toISOString(),
    }
  },
}

module.exports = config
