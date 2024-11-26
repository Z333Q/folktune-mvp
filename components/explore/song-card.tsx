"use client";

import { Song } from '@/lib/data/types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface SongCardProps {
  song: Song;
}

export function SongCard({ song }: SongCardProps) {
  return (
    <Card className="overflow-hidden">
      {song.youtubeUrl && (
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${song.youtubeUrl.split('v=')[1]}`}
            title={song.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{song.title}</h3>
        <p className="text-muted-foreground mb-1">{song.artist}</p>
        <p className="text-sm text-muted-foreground mb-4">{song.origin}</p>
        
        <p className="text-muted-foreground mb-6">{song.description}</p>
        
        <div className="flex gap-4">
          {song.spotifyUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={song.spotifyUrl} target="_blank" rel="noopener noreferrer">
                Listen on Spotify <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
          <Button size="sm">
            <Play className="mr-2 h-4 w-4" /> Learn This Song
          </Button>
        </div>
      </div>
    </Card>
  );
}