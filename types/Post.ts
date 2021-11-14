import { Category } from "./Category";
interface Author {
  bio: string;
  name: string;
  id: string;
  photo: {
    url: string;
  };
}

interface FeaturedImage {
  url: string;
}

export interface Post {
  author: Author;
  categories: Category[];
  createdAt: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  slug: string;
  title: string;
  content: {
    html: string;
  };
}
