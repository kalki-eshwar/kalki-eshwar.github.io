export interface ArticleData {
  slug: string;
  content: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  author: string;
}

export interface ArticlesDataFile {
  articles: ArticleData[];
  generated: string;
  count: number;
}