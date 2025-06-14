
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useSupabaseClient } from '@/hooks/useSupabaseClient';
import { Post } from '@/types/blog';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CalendarDays, ArrowLeft, Tag, UserCircle } from 'lucide-react';
import Footer from '@/components/Footer'; 
// Assuming you might want a consistent footer.

const fetchPostBySlug = async (supabase: any, slug: string): Promise<Post | null> => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116 means no rows found, which is not an error for .single()
    console.error('Error fetching post by slug:', error);
    throw new Error(error.message);
  }
  return data;
};

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { supabase } = useSupabaseClient();

  const { data: post, isLoading, error } = useQuery<Post | null, Error>({
    queryKey: ['blogPost', slug],
    queryFn: () => fetchPostBySlug(supabase, slug!),
    enabled: !!supabase && !!slug,
  });

  const publishedDate = post?.published_at ? new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : null;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* You'll likely want to add your site Header here */}
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="outline" className="text-quantum-dark hover:bg-gray-100">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {isLoading && (
            <div className="space-y-6">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <div className="space-y-3 mt-4">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-5/6" />
                <Skeleton className="h-5 w-full mt-4" />
                <Skeleton className="h-5 w-3/4" />
              </div>
            </div>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error Loading Post</AlertTitle>
              <AlertDescription>
                Could not load the blog post. It might not exist or there was an issue fetching it. (Details: {error.message})
              </AlertDescription>
            </Alert>
          )}

          {!isLoading && !error && !post && (
            <Alert>
              <AlertTitle>Post Not Found</AlertTitle>
              <AlertDescription>
                The blog post you are looking for could not be found. It might have been moved or deleted.
              </AlertDescription>
            </Alert>
          )}
          
          {!isLoading && !error && post && (
            <article className="prose prose-lg lg:prose-xl max-w-none prose-headings:font-serif prose-headings:text-quantum-dark prose-a:text-quantum-accent hover:prose-a:underline prose-img:rounded-lg prose-img:shadow-md">
              <h1 className="mb-4">{post.title}</h1>
              <div className="flex items-center space-x-4 text-gray-500 mb-6 text-base">
                {publishedDate && (
                  <span className="flex items-center">
                    <CalendarDays className="mr-2 h-5 w-5" /> {publishedDate}
                  </span>
                )}
                {/* Future: Add Author, Tags/Categories here */}
              </div>
              
              {post.featured_image_url && (
                <img 
                  src={post.featured_image_url} 
                  alt={`Featured image for ${post.title}`} 
                  className="w-full h-auto object-cover rounded-md mb-8 shadow-lg"
                />
              )}

              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </article>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;

