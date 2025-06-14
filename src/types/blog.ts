
export interface Post {
  id: string;
  created_at: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string | null;
  featured_image_url?: string | null;
  published_at?: string | null;
  status: 'published' | 'draft';
}

