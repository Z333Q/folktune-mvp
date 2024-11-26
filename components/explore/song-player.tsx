'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { formatDuration } from '@/lib/utils';

interface SongPlayerProps {
  title: string;
  artist: string;
  audioUrl: string;
  imageUrl?: string;
}

export function SongPlayer({ title, artist, audioUrl, imageUrl }: SongPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(audioUrl);
    
    const audio = audioRef.current;
    
    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
      setCurrentTime(audio.currentTime);
    });

    audio.addEventListener('ended', () => {
      setIsPlaying(false);
      setCurrentTime(0);
    });

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  const handleVolumeChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.volume = value;
      setVolume(value);
      setIsMuted(value === 0);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const newMuted = !isMuted;
      audioRef.current.volume = newMuted ? 0 : volume;
      setIsMuted(newMuted);
    }
  };

  return (
    <Card className="p-4">
      <div className="flex items-center space-x-4">
        {imageUrl && (
          <div className="w-16 h-16 rounded-md overflow-hidden">
            <img 
              src={imageUrl} 
              alt={`${title} by ${artist}`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{artist}</p>
          
          <div className="mt-2 space-y-2">
            <div className="flex items-center space-x-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
              
              <div className="flex-1">
                <Slider
                  value={[currentTime]}
                  max={duration}
                  step={1}
                  onValueChange={([value]) => handleTimeChange(value)}
                />
              </div>
              
              <span className="text-sm text-muted-foreground w-20 text-right">
                {formatDuration(currentTime)} / {formatDuration(duration)}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleMute}
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </Button>
              
              <div className="w-24">
                <Slider
                  value={[isMuted ? 0 : volume]}
                  max={1}
                  step={0.1}
                  onValueChange={([value]) => handleVolumeChange(value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}