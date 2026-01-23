'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { updatePost } from '@/actions/blog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import RichTextEditor from '@/components/admin/RichTextEditor';
import { toast } from 'sonner';
import { ArrowLeft, Save, Upload } from 'lucide-react';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/client';

interface EditPostPageProps {
    params: {
        id: string;
    };
}

export default function EditPostPage({ params }: EditPostPageProps) {
    const router = useRouter();
    const supabase = createClient();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [content, setContent] = useState('');
    const [published, setPublished] = useState(true);

    useEffect(() => {
        async function fetchPost() {
            const { data, error } = await supabase
                .from('posts')
                .select('*')
                .eq('id', params.id)
                .single();

            if (error || !data) {
                toast.error('Post not found');
                router.push('/admin/blog');
                return;
            }

            setTitle(data.title || '');
            setSlug(data.slug || '');
            setExcerpt(data.excerpt || '');
            setCoverImage(data.cover_image || '');
            setContent(data.content || '');
            setPublished(data.published || false);
            setFetching(false);
        }

        fetchPost();
    }, [params.id, router, supabase]);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setTitle(val);
        // Auto-generate slug
        if (!slug) {
            setSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !content) {
            toast.error("Title and Content are required");
            return;
        }

        setLoading(true);
        try {
            const result = await updatePost(params.id, {
                title,
                slug,
                excerpt,
                content,
                coverImage,
                published
            });

            if (result.success) {
                toast.success("Post updated successfully!");
                router.push('/admin/blog');
            } else {
                toast.error(result.error);
            }
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return (
            <div className="min-h-screen bg-gray-50 p-6 md:p-12 mt-20">
                <div className="max-w-4xl mx-auto">
                    <p className="text-center text-gray-500">Loading post...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-12 mt-20">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/blog" className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <h1 className="text-2xl font-bold font-serif text-luxury-black">Edit Post</h1>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            onClick={() => setPublished(!published)}
                            variant="outline"
                            className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10"
                        >
                            {published ? 'Published' : 'Draft'}
                        </Button>
                        <Button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="bg-luxury-gold hover:bg-luxury-gold/90 text-black font-bold"
                        >
                            {loading ? 'Saving...' : <><Save className="w-4 h-4 mr-2" /> Update Post</>}
                        </Button>
                    </div>
                </div>

                <div className="grid gap-8 bg-white p-8 rounded-xl shadow-sm border text-gray-900">

                    {/* Title & Slug */}
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Post Title</label>
                            <Input
                                placeholder="Enter impactful title..."
                                value={title}
                                onChange={handleTitleChange}
                                className="text-lg font-serif border-gray-300 text-black placeholder:text-gray-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-500">Slug (URL)</label>
                            <Input
                                placeholder="post-url-slug"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                className="font-mono text-sm bg-gray-50 border-gray-300 text-black placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Cover Image */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-2">
                            <Upload className="w-4 h-4" /> Cover Image URL
                        </label>
                        <Input
                            placeholder="https://example.com/image.jpg"
                            value={coverImage}
                            onChange={(e) => setCoverImage(e.target.value)}
                            className="border-gray-300 text-black placeholder:text-gray-400"
                        />
                        {coverImage && (
                            <div className="mt-2 relative h-40 w-full rounded-md overflow-hidden bg-gray-100">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={coverImage} alt="Preview" className="w-full h-full object-cover" />
                            </div>
                        )}
                    </div>

                    {/* Excerpt */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Short Excerpt (SEO)</label>
                        <textarea
                            className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Brief summary for listings..."
                            value={excerpt}
                            onChange={(e) => setExcerpt(e.target.value)}
                        />
                    </div>

                    {/* Editor */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Content</label>
                        <div className="prose-editor">
                            <RichTextEditor value={content} onChange={setContent} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
