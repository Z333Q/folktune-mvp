// Define the core database schema types
export interface FolkSong {
  id: string;
  title: string;
  artist: string;
  country: string;
  category: string;
  subcategory: string;
  description: string;
  culturalContext: string;
  year?: string;
  language?: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
  imageUrl?: string;
  audioPreviewUrl?: string;
  lyrics?: {
    original: string;
    translation?: string;
    transliteration?: string;
  };
  musicalElements?: {
    instruments: string[];
    scale?: string;
    rhythm?: string;
    tempo?: string;
  };
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  tags: string[];
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
  region: string;
  imageUrl?: string;
  culturalContext: string;
  songs: FolkSong[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  region: string;
  imageUrl: string;
  subcategories: Subcategory[];
  culturalContext: {
    history: string;
    significance: string;
    instruments: {
      name: string;
      description: string;
      imageUrl?: string;
    }[];
    traditions: string[];
    socialContext?: string;
    modernInfluence?: string;
  };
}

export interface Database {
  categories: Category[];
  songs: FolkSong[];
  version: string;
  lastUpdated: string;
}