import { SongCollection } from './types';

export const oceanianSongs: SongCollection = {
  'aboriginal': {
    'songlines': [
      {
        id: 'treaty',
        title: 'Treaty',
        artist: 'Yothu Yindi',
        country: 'Australia',
        category: 'oceanian-folk',
        subcategory: 'aboriginal',
        culturalContext: 'A protest song blending traditional Aboriginal music with rock, advocating for Indigenous rights.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Rights', 'Justice', 'Reconciliation'],
        musicalElements: {
          instruments: ['Didgeridoo', 'Clapsticks', 'Guitar'],
          rhythm: 'Traditional Aboriginal'
        }
      }
    ]
  },
  'maori': {
    'waiata': [
      {
        id: 'poi-e',
        title: 'Poi E',
        artist: 'Patea Māori Club',
        country: 'New Zealand',
        category: 'oceanian-folk',
        subcategory: 'maori',
        culturalContext: 'A popular waiata blending traditional Māori music with contemporary pop.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Culture', 'Pride', 'Unity'],
        musicalElements: {
          instruments: ['Guitar', 'Voice', 'Poi'],
          rhythm: 'Contemporary Māori'
        }
      }
    ]
  }
};