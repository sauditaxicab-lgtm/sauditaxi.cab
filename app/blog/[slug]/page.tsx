import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Share2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const revalidate = 60;

interface BlogPostProps {
    params: {
        slug: string;
    }
}

export default async function BlogPostPage({ params }: BlogPostProps) {
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
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
                            {post.title}
                        </h1>
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

            {/* Content Body */}
            <article className="py-20 px-6 md:px-12">
                <div className="max-w-3xl mx-auto">
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

                </div>
            </article>

        </div>
    );
}
