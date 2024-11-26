export interface Song {
  id: string;
  title: string;
  artist: string;
  country: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
  culturalContext: string;
  category: string;
  subcategory: string;
  year?: string;
  language?: string;
  themes?: string[];
  audioUrl?: string;
  imageUrl?: string;
  description?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  duration?: string;
  lyrics?: {
    original?: string;
    translation?: string;
    transliteration?: string;
  };
  musicalElements?: {
    instruments?: string[];
    rhythm?: string;
    scale?: string;
    key?: string;
  };
}

export interface SongCollection {
  [categoryId: string]: {
    [subcategoryId: string]: Song[];
  };
}