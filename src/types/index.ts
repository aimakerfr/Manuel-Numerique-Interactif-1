export interface Section {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  color: string;
}

export interface SubSection {
  id: string;
  title: string;
  content: string;
  expanded?: boolean;
}

export interface SearchResult {
  id: string;
  title: string;
  section: string;
  excerpt: string;
  path: string;
}

export interface Favorite {
  id: string;
  title: string;
  section: string;
  path: string;
  addedAt: Date;
}
