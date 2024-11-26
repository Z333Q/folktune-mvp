'use client';

import { useCallback } from 'react';
import { songs } from '@/lib/data/songs';
import { Song } from '@/lib/data/songs/types';
import { getSongById, searchSongs, getSongsByCategory, getSongsBySubcategory } from '@/lib/data/songs/utils';

export function useSongs() {
  const getSong = useCallback((id: string): Song | undefined => {
    return getSongById(songs, id);
  }, []);

  const search = useCallback((query: string): Song[] => {
    return searchSongs(songs, query);
  }, []);

  const getSongsForCategory = useCallback((categoryId: string): Song[] => {
    return getSongsByCategory(songs, categoryId);
  }, []);

  const getSongsForSubcategory = useCallback(
    (categoryId: string, subcategoryId: string): Song[] => {
      return getSongsBySubcategory(songs, categoryId, subcategoryId);
    },
    []
  );

  return {
    getSong,
    search,
    getSongsForCategory,
    getSongsForSubcategory,
  };
}