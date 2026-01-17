import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sauditaxi.cab'

    const routes = [
        '',
        '/about',
        '/fleet',
        '/services',
        '/blog',
        '/contact',
        '/services/airport-transfers',
        '/services/umrah-transfers',
        '/services/family-travel',
        '/services/ziyarat-tours',
        '/services/sightseeing',
        '/services/intercity-taxi',
        '/services/vip-transport',
        '/privacy-policy',
        '/terms-and-conditions',
        '/fleet/toyota-camry-4-seater-taxi',
        '/fleet/hyundai-staria-7-seater-taxi',
        '/fleet/gmc-yukon-xl-7-seater-taxi',
        '/fleet/toyota-hiace-11-seater-taxi',
        '/fleet/hyundai-h1-starex-7-seater-taxi',
        '/fleet/toyota-coaster-17-seater-taxi',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly' as any,
        priority: route === '' ? 1 : 0.8,
    }))
}
