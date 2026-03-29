import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://sauditaxi.cab'

    // Fetch dynamic blog routes
    const { data: posts, error } = await supabase
        .from('posts')
        .select('slug, created_at')
        .eq('published', true); // Ensure only published posts appear in sitemap

    const blogRoutes: MetadataRoute.Sitemap = (posts || []).map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.created_at ? new Date(post.created_at) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
    }))

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
        '/jeddah',
        '/jeddah/airport-taxi',
        '/madinah',
        '/madinah/airport-taxi',
        '/makkah',
        '/taif',
        '/makkah-to-madinah-taxi',
        '/jeddah-to-makkah-taxi',
        '/fleet/toyota-camry-4-seater-taxi',
        '/fleet/hyundai-staria-7-seater-taxi',
        '/fleet/gmc-yukon-xl-7-seater-taxi',
        '/fleet/toyota-hiace-11-seater-taxi',
        '/fleet/hyundai-h1-starex-7-seater-taxi',
        '/fleet/toyota-coaster-17-seater-taxi',
    ]

    const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
        url: `${baseUrl}${route}/`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))

    return [...staticRoutes, ...blogRoutes]
}
