import { FolkSong } from '@/lib/data/database/schema';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SongPlayer } from './song-player';
import { Music, Globe, BookOpen, Heart } from 'lucide-react';

interface SongDetailsProps {
  song: FolkSong;
}

export function SongDetails({ song }: SongDetailsProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-8">
        {song.imageUrl && (
          <div className="w-64 h-64 rounded-lg overflow-hidden">
            <img
              src={song.imageUrl}
              alt={song.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{song.title}</h1>
          <p className="text-xl text-muted-foreground mb-4">{song.artist}</p>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>{song.country}</span>
            </div>
            <div className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              <span>{song.difficulty}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>{song.duration}</span>
            </div>
          </div>
          
          {song.audioPreviewUrl && (
            <SongPlayer
              title={song.title}
              artist={song.artist}
              audioUrl={song.audioPreviewUrl}
              imageUrl={song.imageUrl}
            />
          )}
          
          <div className="flex gap-4 mt-6">
            {song.spotifyUrl && (
              <Button variant="outline" asChild>
                <a href={song.spotifyUrl} target="_blank" rel="noopener noreferrer">
                  Listen on Spotify
                </a>
              </Button>
            )}
            <Button>
              <Heart className="mr-2 h-4 w-4" />
              Save to Favorites
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="about" className="space-y-4">
        <TabsList>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="lyrics">Lyrics</TabsTrigger>
          <TabsTrigger value="musical">Musical Elements</TabsTrigger>
          <TabsTrigger value="cultural">Cultural Context</TabsTrigger>
        </TabsList>

        <TabsContent value="about">
          <Card className="p-6">
            <p className="text-lg leading-relaxed">{song.description}</p>
          </Card>
        </TabsContent>

        <TabsContent value="lyrics">
          <Card className="p-6">
            {song.lyrics ? (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Original</h3>
                  <pre className="whitespace-pre-wrap font-sans">
                    {song.lyrics.original}
                  </pre>
                </div>
                {song.lyrics.translation && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Translation</h3>
                    <pre className="whitespace-pre-wrap font-sans">
                      {song.lyrics.translation}
                    </pre>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-muted-foreground">Lyrics not available.</p>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="musical">
          <Card className="p-6">
            {song.musicalElements && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Instruments</h3>
                  <ul className="list-disc list-inside">
                    {song.musicalElements.instruments.map((instrument, index) => (
                      <li key={index}>{instrument}</li>
                    ))}
                  </ul>
                </div>
                
                {song.musicalElements.scale && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Scale</h3>
                    <p>{song.musicalElements.scale}</p>
                  </div>
                )}
                
                {song.musicalElements.rhythm && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Rhythm</h3>
                    <p>{song.musicalElements.rhythm}</p>
                  </div>
                )}
              </div>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="cultural">
          <Card className="p-6">
            <p className="text-lg leading-relaxed">{song.culturalContext}</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}