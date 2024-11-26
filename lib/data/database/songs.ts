import { FolkSong } from './schema';

export const songs: FolkSong[] = [
  // African Folk Songs
  {
    id: "djougouya-magni",
    title: "Djougouya Magni",
    artist: "Toumani Diabaté",
    country: "Mali",
    category: "african-folk",
    subcategory: "griot-traditions",
    description: "A masterful kora performance showcasing the griot storytelling tradition",
    culturalContext: "Reflects the mastery of kora, a traditional harp-lute, in Malian oral history and storytelling.",
    difficulty: "Advanced",
    duration: "8:23",
    tags: ["griot", "kora", "mali", "traditional"],
    musicalElements: {
      instruments: ["kora"],
      rhythm: "Traditional Malian",
      scale: "Pentatonic"
    }
  },
  {
    id: "mali-sadio",
    title: "Mali Sadio",
    artist: "Bassekou Kouyaté",
    country: "Mali",
    category: "african-folk",
    subcategory: "griot-traditions",
    description: "A traditional narrative performed on the ngoni",
    culturalContext: "A traditional narrative that symbolizes harmony between humans and animals, performed by a renowned ngoni player.",
    difficulty: "Intermediate",
    duration: "6:45",
    tags: ["griot", "ngoni", "mali", "traditional"],
    musicalElements: {
      instruments: ["ngoni", "vocals"],
      rhythm: "Traditional Malian"
    }
  },

  // Asian Folk Songs
  {
    id: "soran-bushi",
    title: "Soran Bushi",
    artist: "Traditional",
    country: "Japan",
    category: "asian-folk",
    subcategory: "minyo",
    description: "A traditional Japanese fishing song",
    culturalContext: "A traditional Japanese work song from Hokkaido, reflecting the hard labor of herring fishermen.",
    difficulty: "Intermediate",
    duration: "4:15",
    tags: ["minyo", "work song", "japan", "traditional"],
    musicalElements: {
      instruments: ["taiko", "shamisen", "vocals"],
      rhythm: "Traditional Japanese"
    }
  },

  // European Folk Songs
  {
    id: "scarborough-fair",
    title: "Scarborough Fair",
    artist: "Traditional",
    country: "England",
    category: "european-folk",
    subcategory: "british-ballads",
    description: "A traditional English ballad about love and impossible tasks",
    culturalContext: "A medieval English ballad that tells a tale of lost love through symbolic impossible tasks.",
    difficulty: "Beginner",
    duration: "3:45",
    tags: ["ballad", "england", "traditional", "love song"],
    musicalElements: {
      instruments: ["voice", "guitar"],
      scale: "Dorian mode"
    }
  }
];

// Helper functions
export function getSongsByCategory(categoryId: string): FolkSong[] {
  return songs.filter(song => song.category === categoryId);
}

export function getSongsBySubcategory(categoryId: string, subcategoryId: string): FolkSong[] {
  return songs.filter(song => 
    song.category === categoryId && song.subcategory === subcategoryId
  );
}

export function searchSongs(query: string): FolkSong[] {
  const normalizedQuery = query.toLowerCase();
  return songs.filter(song =>
    song.title.toLowerCase().includes(normalizedQuery) ||
    song.artist.toLowerCase().includes(normalizedQuery) ||
    song.description.toLowerCase().includes(normalizedQuery) ||
    song.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
  );
}

export function getSongById(id: string): FolkSong | undefined {
  return songs.find(song => song.id === id);
}

export function getRelatedSongs(songId: string, limit: number = 5): FolkSong[] {
  const song = getSongById(songId);
  if (!song) return [];

  return songs
    .filter(s => 
      s.id !== songId && 
      (s.category === song.category || 
       s.tags.some(tag => song.tags.includes(tag)))
    )
    .slice(0, limit);
}