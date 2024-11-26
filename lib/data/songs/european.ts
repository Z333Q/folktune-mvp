import { SongCollection } from './types';

export const europeanSongs: SongCollection = {
  'northern-europe': {
    'british-ballads': [
      {
        id: 'scarborough-fair',
        title: 'Scarborough Fair',
        artist: 'Traditional',
        country: 'England',
        category: 'european-folk',
        subcategory: 'british-ballads',
        culturalContext: 'A traditional English ballad exploring themes of love and impossible tasks.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Love', 'Magic', 'Medieval life'],
        musicalElements: {
          instruments: ['Voice', 'Guitar'],
          rhythm: 'Compound meter',
          scale: 'Dorian mode'
        }
      }
    ],
    'celtic-music': [
      {
        id: 'danny-boy',
        title: 'Danny Boy',
        artist: 'Traditional',
        country: 'Ireland',
        category: 'european-folk',
        subcategory: 'celtic-music',
        culturalContext: 'A beloved Irish ballad often associated with emigration and longing.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Love', 'Separation', 'Emigration'],
        musicalElements: {
          instruments: ['Voice', 'Piano'],
          rhythm: 'Slow air',
        }
      }
    ]
  }
  // Add more regions and styles...
};