
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Post } from '@/types/blog';
import { ArrowRight } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const displayExcerpt = post.excerpt || post.content.substring(0, 150) + (post.content.length > 150 ? '...' : '');
  const publishedDate = post.published_at ? new Date(post.published_at).toLocaleDateString() : 'Not published';

  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-serif text-quantum-dark group-hover:text-quantum-accent transition-colors">
          <Link to={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm text-gray-500">
          Published on: {publishedDate}
        </CardDescription>
      </CardHeader>
      {post.featured_image_url && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={post.featured_image_url} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <CardContent className="flex-grow pt-4">
        <p className="text-gray-700 leading-relaxed">{displayExcerpt}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="text-quantum-accent p-0 hover:underline">
          <Link to={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

