
export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  categories: string[];
  rating: number;
  pageCount: number;
  language: string;
  publicationDate: string;
  isFeatured: boolean;
  isAvailable: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  bookCount: number;
}
