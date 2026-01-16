import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const revalidate = 60; // Revalidate every minute

export default async function BlogIndexPage() {
    const { data: posts } = await supabase
        .from('posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-24 px-6 md:px-12 bg-zinc-900 border-b border-white/10">
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <span className="text-luxury-gold uppercase tracking-widest text-sm font-bold">Latest Updates</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white">
                        News & <span className="text-luxury-gold">Articles</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
                        Discover travel tips, vehicle guides, and news from Saudi Taxi.
                    </p>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                            Recent Articles
                        </h2>
                        <div className="h-1 w-24 bg-luxury-gold mx-auto" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts?.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                                <article className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-luxury-gold/50 transition-all duration-300 hover:transform hover:-translate-y-1 h-full flex flex-col">
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        {post.cover_image ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                src={post.cover_image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-white/20">
                                                No Image
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/20 uppercase tracking-wider">
                                                News
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-4 text-xs text-luxury-gold font-medium uppercase tracking-wider mb-4">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(post.created_at).toLocaleDateString()}
                                            </span>
                                        </div>

                                        <h2 className="text-2xl font-serif font-bold text-white mb-4 leading-tight group-hover:text-luxury-gold transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="text-white/60 line-clamp-3 mb-6 flex-1">
                                            {post.excerpt || "Click to read more about this topic..."}
                                        </p>

                                        <div className="flex items-center text-luxury-gold font-bold text-sm group-hover:translate-x-2 transition-transform">
                                            Read Article <ArrowRight className="w-4 h-4 ml-2" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {(!posts || posts.length === 0) && (
                        <div className="text-center py-20 text-white/40">
                            <p className="text-xl">No articles published yet.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Static Content / SEO Text */}
            <section className="py-20 bg-zinc-900 border-t border-white/10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-serif text-white mb-6">Your Guide to <span className="text-luxury-gold">Hajj & Umrah Travel</span></h2>
                    <p className="text-white/70 leading-relaxed mb-8">
                        Welcome to the Saudi Taxi blog, your definitive resource for travel information in the Kingdom. Here, we share essential guides for pilgrims performing Umrah and Hajj, including tips on navigating Jeddah Airport, choosing the right transport between Makkah and Madinah, and understanding the Ziyarat sites.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black/40 p-6 rounded-lg border border-white/5">
                            <h3 className="text-luxury-gold font-bold mb-2">Travel Tips</h3>
                            <p className="text-white/60 text-sm">Expert advice on packing, best times to travel, and how to prepare for your spiritual journey.</p>
                        </div>
                        <div className="bg-black/40 p-6 rounded-lg border border-white/5">
                            <h3 className="text-luxury-gold font-bold mb-2">Vehicle Guides</h3>
                            <p className="text-white/60 text-sm">Detailed reviews of our fleet, helping you choose between a Camry, Staria, or GMC for your family.</p>
                        </div>
                        <div className="bg-black/40 p-6 rounded-lg border border-white/5">
                            <h3 className="text-luxury-gold font-bold mb-2">Local Insights</h3>
                            <p className="text-white/60 text-sm">Discover hidden gems, best places to eat, and historical context for the holy sites in Makkah and Madinah.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
