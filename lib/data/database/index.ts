import { Database } from './schema';
import { categories } from './categories';
import { songs } from './songs';

export const database: Database = {
  categories,
  songs,
  version: '1.0.0',
  lastUpdated: new Date().toISOString(),
};

// Helper functions for accessing the database
export function getCategoryById(id: string) {
  return database.categories.find(c => c.id === id);
}

export function getSubcategoryById(categoryId: string, subcategoryId: string) {
  const category = getCategoryById(categoryId);
  return category?.subcategories.find(s => s.id === subcategoryId);
}

export function getSongById(id: string) {
  return database.songs.find(s => s.id === id);
}

export function searchDatabase(query: string) {
  const normalizedQuery = query.toLowerCase();
  
  const matchingSongs = database.songs.filter(song => 
    song.title.toLowerCase().includes(normalizedQuery) ||
    song.artist.toLowerCase().includes(normalizedQuery) ||
    song.description.toLowerCase().includes(normalizedQuery) ||
    song.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
  );

  const matchingCategories = database.categories.filter(category =>
    category.name.toLowerCase().includes(normalizedQuery) ||
    category.description.toLowerCase().includes(normalizedQuery) ||
    category.subcategories.some(sub => 
      sub.name.toLowerCase().includes(normalizedQuery) ||
      sub.description.toLowerCase().includes(normalizedQuery)
    )
  );

  return {
    songs: matchingSongs,
    categories: matchingCategories,
  };
}

export function getSongsByCategory(categoryId: string) {
  return database.songs.filter(song => song.category === categoryId);
}

export function getSongsBySubcategory(categoryId: string, subcategoryId: string) {
  return database.songs.filter(
    song => song.category === categoryId && song.subcategory === subcategoryId
  );
}

export function getRelatedSongs(songId: string, limit = 5) {
  const song = getSongById(songId);
  if (!song) return [];

  return database.songs
    .filter(s => 
      s.id !== songId && 
      (s.category === song.category || 
       s.tags.some(tag => song.tags.includes(tag)))
    )
    .slice(0, limit);
}

export * from './schema';