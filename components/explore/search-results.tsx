"use client";

import { useState, useEffect } from 'react';
import { Song, Category, searchFolkMusic } from '@/lib/data/categories';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface SearchResultsProps {
  query: string;
}

export function SearchResults({ query }: SearchResultsProps) {
  const [results, setResults] = useState<{
    categories: Category[];
    songs: (Song & { category: string; subcategory: string })[];
  }>({ categories: [], songs: [] });

  const [playing, setPlaying] = useState<string | null>(null);

  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchFolkMusic(query);
      setResults(searchResults);
    } else {
      setResults({ categories: [], songs: [] });
    }
  }, [query]);

  const handlePlayPause = (audioUrl: string) => {
    if (playing === audioUrl) {
      setPlaying(null);
    } else {
      setPlaying(audioUrl);
    }
  };

  if (!query.trim()) {
    return null;
  }

  return (
    <div className="space-y-8">
      {results.categories.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.categories.map((category, index) => (
              <Link 
                key={index}
                href={`/explore/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="block"
              >
                <Card className="p-6 hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold mb-2">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {results.songs.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Songs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.songs.map((song, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold mb-1">{song.title}</h3>
                    {song.artist && (
                      <p className="text-sm text-muted-foreground mb-1">{song.artist}</p>
                    )}
                    <p className="text-sm text-muted-foreground">
                      {song.category} • {song.subcategory}
                    </p>
                  </div>
                  {song.audioUrl && (
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handlePlayPause(song.audioUrl!)}
                    >
                      {playing === song.audioUrl ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {results.categories.length === 0 && results.songs.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No results found for "{query}"</p>
        </div>
      )}
    </div>
  );
}