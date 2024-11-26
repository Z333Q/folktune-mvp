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

export interface Subcategory {
  id: string;
  name: string;
  description: string;
  region: string;
  image?: string;
  culturalContext?: string;
  songs?: Song[];
  styles?: {
    id: string;
    name: string;
    description: string;
    songs: Song[];
  }[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  region: string;
  image: string;
  subcategories: Subcategory[];
  culturalContext?: {
    history?: string;
    significance?: string;
    instruments?: {
      name: string;
      description: string;
      image?: string;
    }[];
    traditions?: string[];
    socialContext?: string;
    modernInfluence?: string;
  };
}