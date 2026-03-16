import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Share2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CTASection } from "@/components/home/CTASection";
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Metadata } from 'next';
import Script from 'next/script';

export const revalidate = 60;

interface BlogPostProps {
    params: {
        slug: string;
    }
}

export async function generateMetadata(props: BlogPostProps): Promise<Metadata> {
    const params = await props.params;
    const { data: post } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', params.slug)
        .single();

    if (!post) return {};

    return {
        title: `${post.title} | Saudi Taxi Blog`,
        description: post.excerpt || `Read our latest article about ${post.title} on the Saudi Taxi blog. Travel guides and tips for Hajj, Umrah, and more.`,
        alternates: {
            canonical: `/blog/${params.slug}`,
        },
    };
}

export default async function BlogPostPage(props: BlogPostProps) {
    const params = await props.params;
    const { data: post } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', params.slug)
        .single();

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white">

            {/* Sticky Header Nav acting as 'Back' */}
            <div className="fixed top-24 left-6 z-50 hidden xl:block">
                <Link href="/blog" className="flex items-center gap-2 text-white/50 hover:text-luxury-gold transition-colors bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <ArrowLeft className="w-4 h-4" /> Back to News
                </Link>
            </div>

            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] w-full">
                {post.cover_image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="flex gap-4">
                            <span className="bg-luxury-gold text-black px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full">
                                Article
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">{post.title}</h1>
                        <div className="flex items-center gap-6 text-white/70 text-sm">
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-luxury-gold" />
                                {new Date(post.created_at).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-luxury-gold" />
                                5 min read
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-zinc-900 border-b border-white/5">
                <Breadcrumbs />
            </div>

            {/* Content Body */}
            <div className="container mx-auto py-20 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <article className="lg:col-span-8">
                        {/* Excerpt */}
                        {post.excerpt && (
                            <p className="text-xl md:text-2xl text-white/80 font-serif leading-relaxed mb-12 border-l-4 border-luxury-gold pl-6">
                                {post.excerpt}
                            </p>
                        )}

                        {/* Main Content */}
                        <div
                            className="prose prose-invert prose-lg max-w-none 
                            prose-headings:font-serif prose-headings:text-white 
                            prose-p:text-white/70 prose-p:leading-relaxed
                            prose-a:text-luxury-gold prose-a:no-underline hover:prose-a:underline
                            prose-img:rounded-xl prose-img:border prose-img:border-white/10
                            prose-strong:text-white prose-blockquote:border-luxury-gold prose-blockquote:bg-white/5 prose-blockquote:p-6 prose-blockquote:rounded-r-lg"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Footer Share */}
                        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
                            <span className="text-white/50 text-sm">Share this article</span>
                            <div className="flex gap-4">
                                <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-luxury-gold hover:text-black hover:border-luxury-gold transition-colors">
                                    <Share2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Booking CTA Card */}
                        <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl sticky top-28">
                            <h3 className="text-2xl font-serif text-white mb-4">Book Your Journey</h3>
                            <p className="text-white/60 mb-8 leading-relaxed">
                                Professional chauffeurs and premium vehicles available 24/7 across the Kingdom.
                            </p>
                            <div className="space-y-4">
                                <Button asChild className="w-full bg-luxury-gold text-black hover:bg-white transition-colors font-bold py-6 rounded-xl">
                                    <Link href="/services/intercity-taxi">Book Now</Link>
                                </Button>
                                <Button variant="outline" asChild className="w-full border-white/20 text-white hover:bg-white/5 py-6 rounded-xl">
                                    <Link href="/services/airport-transfers">Airport Transfer</Link>
                                </Button>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/5">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-luxury-gold mb-4">Our Services</h4>
                                <ul className="space-y-3">
                                    {[
                                        { name: "Umrah Transfers", href: "/services/umrah-transfers" },
                                        { name: "Family Travel", href: "/services/family-travel" },
                                        { name: "Ziyarat Tours", href: "/services/ziyarat-tours" },
                                        { name: "VIP Transport", href: "/services/vip-transport" }
                                    ].map((service) => (
                                        <li key={service.href}>
                                            <Link href={service.href} className="text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                                                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold/50 group-hover:bg-luxury-gold" />
                                                {service.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/5">
                                <p className="text-xs text-white/40 mb-2 uppercase tracking-wide">Direct Support</p>
                                <p className="text-lg font-serif text-white">+966 50 000 0000</p>
                                <p className="text-sm text-white/50">available 24/7</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Related Services Links - SEO Highway */}
            <div className="container mx-auto px-6 pb-20 border-t border-white/10 pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-serif text-white mb-8">Continue Planning Your Journey</h3>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        <Link href="/services/airport-transfers" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-luxury-gold hover:text-black hover:border-luxury-gold transition-all text-sm font-bold uppercase tracking-widest">
                            Airport Taxi
                        </Link>
                        <Link href="/services/umrah-transfers" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-luxury-gold hover:text-black hover:border-luxury-gold transition-all text-sm font-bold uppercase tracking-widest">
                            Umrah Transport
                        </Link>
                        <Link href="/services/intercity-taxi" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-luxury-gold hover:text-black hover:border-luxury-gold transition-all text-sm font-bold uppercase tracking-widest">
                            Intercity Rides
                        </Link>
                        <Link href="/fleet" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-luxury-gold hover:text-black hover:border-luxury-gold transition-all text-sm font-bold uppercase tracking-widest">
                            View Fleet
                        </Link>
                    </div>
                </div>
            </div>

            <CTASection
                title={<strong>Ready to Experience <span className="text-luxury-black">Quality Travel?</span></strong>}
                description="Book your reliable Saudi Taxi today. Whether for Umrah, business, or leisure, we ensure a comfortable journey."
            />

            {/* Article Schema */}
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": post.title,
                    "image": post.cover_image,
                    "datePublished": post.created_at,
                    "dateModified": post.updated_at || post.created_at,
                    "author": [{
                        "@type": "Organization",
                        "name": "Saudi Taxi",
                        "url": "https://sauditaxi.cab"
                    }],
                    "publisher": {
                        "@type": "Organization",
                        "name": "Saudi Taxi",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://sauditaxi.cab/logo.png"
                        }
                    },
                    "description": post.excerpt
                })
            }} />

        </div>
    );
}
