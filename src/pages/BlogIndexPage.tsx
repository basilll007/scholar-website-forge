
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSupabaseClient } from '@/hooks/useSupabaseClient';
import { Post } from '@/types/blog';
import PostCard from '@/components/blog/PostCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BookOpen } from 'lucide-react';
import Footer from '@/components/Footer'; 
// Assuming you might want a consistent footer. Create a generic Header if needed.

const fetchPublishedPosts = async (supabase: any): Promise<Post[]> => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    throw new Error(error.message);
  }
  return data || [];
};

const BlogIndexPage: React.FC = () => {
  const { supabase } = useSupabaseClient();
  const { data: posts, isLoading, error } = useQuery<Post[], Error>({
    queryKey: ['publishedPosts'],
    queryFn: () => fetchPublishedPosts(supabase),
    enabled: !!supabase, // Only run query if supabase client is available
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* You'll likely want to add your site Header here */}
      {/* For now, it's not included as Header.tsx is read-only */}
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <div className="mb-12 text-center">
          <h1 className="section-title">Blog</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Thoughts, research, and updates on science, technology, and more.
          </p>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-[200px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-8 w-1/4 mt-2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <Alert variant="destructive" className="max-w-xl mx-auto">
            <BookOpen className="h-4 w-4" />
            <AlertTitle>Error Fetching Posts</AlertTitle>
            <AlertDescription>
              Could not load blog posts at this time. Please try again later. (Details: {error.message})
            </AlertDescription>
          </Alert>
        )}

        {!isLoading && !error && posts && posts.length === 0 && (
          <div className="text-center py-10">
            <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-xl text-gray-600">No blog posts published yet.</p>
            <p className="text-gray-500">Check back soon for new content!</p>
          </div>
        )}

        {!isLoading && !error && posts && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>
      <Footer /> {/* Assuming Footer is a global component you want on this page */}
    </div>
  );
};

export default BlogIndexPage;
