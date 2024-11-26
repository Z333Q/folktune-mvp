import { Song } from '@/lib/data/categories';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';
import { useAudio } from '@/hooks/use-audio';

interface SongListProps {
  songs: Song[];
}

export function SongList({ songs }: SongListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {songs.map((song, index) => (
        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
          {song.image && (
            <div className="aspect-video relative">
              <img
                src={song.image}
                alt={song.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{song.title}</h3>
            {song.artist && (
              <p className="text-muted-foreground mb-1">{song.artist}</p>
            )}
            <p className="text-sm text-muted-foreground mb-4">{song.origin}</p>
            {song.description && (
              <p className="text-muted-foreground mb-4">{song.description}</p>
            )}
            <div className="flex justify-between items-center">
              <Button variant="outline" size="sm">
                Learn More
              </Button>
              {song.audioUrl && (
                <Button size="icon" variant="ghost">
                  <Play className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}