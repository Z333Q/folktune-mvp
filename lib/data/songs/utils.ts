import { Song, SongCollection } from './types';

export function getSongById(songs: SongCollection, id: string): Song | undefined {
  for (const category of Object.values(songs)) {
    for (const subcategory of Object.values(category)) {
      const song = subcategory.find(s => s.id === id);
      if (song) return song;
    }
  }
  return undefined;
}

export function searchSongs(songs: SongCollection, query: string): Song[] {
  const results: Song[] = [];
  const normalizedQuery = query.toLowerCase();

  for (const category of Object.values(songs)) {
    for (const subcategory of Object.values(category)) {
      const matches = subcategory.filter(song => 
        song.title.toLowerCase().includes(normalizedQuery) ||
        song.artist.toLowerCase().includes(normalizedQuery) ||
        song.country.toLowerCase().includes(normalizedQuery) ||
        song.culturalContext.toLowerCase().includes(normalizedQuery)
      );
      results.push(...matches);
    }
  }

  return results;
}

export function getSongsByCategory(songs: SongCollection, categoryId: string): Song[] {
  return songs[categoryId] ? Object.values(songs[categoryId]).flat() : [];
}

export function getSongsBySubcategory(
  songs: SongCollection,
  categoryId: string,
  subcategoryId: string
): Song[] {
  return songs[categoryId]?.[subcategoryId] || [];
}

export function generateSongId(title: string, artist: string): string {
  return `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${artist.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}