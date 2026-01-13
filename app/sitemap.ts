import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sauditaxi.cab'

    const routes = [
        '',
        '/about',
        '/fleet',
        '/services',
        '/contact',
        '/services/airport-transfers',
        '/services/umrah-transfers',
        '/services/family-travel',
        '/services/ziyarat-tours',
        '/services/intercity-taxi',
        '/services/vip-transport',
        '/privacy-policy',
        '/terms-and-conditions',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly' as any,
        priority: route === '' ? 1 : 0.8,
    }))
}
