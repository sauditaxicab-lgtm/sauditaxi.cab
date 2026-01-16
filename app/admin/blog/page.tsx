import { createClient } from '@/utils/supabase/server';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus, Edit, Trash2, ArrowLeft, FileText } from 'lucide-react';
import { redirect } from 'next/navigation';
import PostActions from '@/components/admin/PostActions';

/* Admin Blog List Page */
export const revalidate = 0;

export default async function AdminBlogList() {
    const supabase = await createClient();

    // Check Auth
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        redirect('/admin/login');
    }

    const { data: posts, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 p-6 md:p-12 mt-20">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/admin" className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-900">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold font-serif text-gray-900">Blog Posts</h1>
                            <p className="text-gray-500 mt-1">Manage your articles and news.</p>
                        </div>
                    </div>
                    <Link href="/admin/blog/create">
                        <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-black font-bold">
                            <Plus className="w-4 h-4 mr-2" /> Create New Post
                        </Button>
                    </Link>
                </div>

                {/* Posts List */}
                <div className="rounded-md border bg-white shadow-sm overflow-hidden">
                    <table className="w-full caption-bottom text-sm text-left">
                        <thead className="[&_tr]:border-b bg-gray-50">
                            <tr className="border-b transition-colors data-[state=selected]:bg-muted">
                                <th className="h-12 px-4 align-middle font-medium text-gray-600 w-16">Image</th>
                                <th className="h-12 px-4 align-middle font-medium text-gray-600">Title</th>
                                <th className="h-12 px-4 align-middle font-medium text-gray-600">Status</th>
                                <th className="h-12 px-4 align-middle font-medium text-gray-600">Date</th>
                                <th className="h-12 px-4 align-middle font-medium text-gray-600 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                            {posts?.map((post) => (
                                <tr key={post.id} className="border-b transition-colors hover:bg-muted/50">
                                    <td className="p-4 align-middle">
                                        <div className="h-10 w-16 bg-gray-100 rounded overflow-hidden relative">
                                            {post.cover_image ? (
                                                // eslint-disable-next-line @next/next/no-img-element
                                                <img src={post.cover_image} alt="" className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="flex items-center justify-center h-full text-gray-400"><FileText size={16} /></div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="p-4 align-middle font-medium">
                                        {post.title}
                                        <div className="text-xs text-muted-foreground font-normal truncate max-w-[300px]">{post.slug}</div>
                                    </td>
                                    <td className="p-4 align-middle">
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${post.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                            {post.published ? 'Published' : 'Draft'}
                                        </span>
                                    </td>
                                    <td className="p-4 align-middle text-muted-foreground">
                                        {new Date(post.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="p-4 align-middle text-right">
                                        <PostActions id={post.id} title={post.title} />
                                    </td>
                                </tr>
                            ))}
                            {(!posts || posts.length === 0) && (
                                <tr>
                                    <td colSpan={5} className="p-12 text-center text-muted-foreground">
                                        No posts yet. Click "Create New Post" to start.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
