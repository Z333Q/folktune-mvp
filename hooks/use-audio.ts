"use client";

import { useState, useEffect, useRef } from 'react';

export function useAudio(url: string) {
  const audio = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    audio.current = new Audio(url);
    
    audio.current.addEventListener('loadedmetadata', () => {
      setDuration(audio.current?.duration || 0);
    });

    audio.current.addEventListener('timeupdate', () => {
      setCurrentTime(audio.current?.currentTime || 0);
    });

    audio.current.addEventListener('ended', () => {
      setPlaying(false);
      setCurrentTime(0);
    });

    return () => {
      if (audio.current) {
        audio.current.pause();
        audio.current = null;
      }
    };
  }, [url]);

  const togglePlay = () => {
    if (audio.current) {
      if (playing) {
        audio.current.pause();
      } else {
        audio.current.play();
      }
      setPlaying(!playing);
    }
  };

  const seek = (time: number) => {
    if (audio.current) {
      audio.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  return {
    playing,
    duration,
    currentTime,
    togglePlay,
    seek,
  };
}