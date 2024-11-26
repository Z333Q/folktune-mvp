import { SongCollection } from './types';

export const additionalSongs: SongCollection = {
  'work-songs': {
    'sea-shanties': [
      {
        id: 'drunken-sailor',
        title: 'Drunken Sailor',
        artist: 'Traditional',
        country: 'United Kingdom',
        category: 'additional',
        subcategory: 'sea-shanties',
        culturalContext: 'A popular sea shanty sung during heavy work on ships, particularly for coordinating tasks.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Work', 'Sea Life', 'Humor'],
        musicalElements: {
          instruments: ['Voice'],
          rhythm: 'Work rhythm',
          scale: 'Major'
        }
      }
    ],
    'field-hollers': [
      {
        id: 'levee-camp-holler',
        title: 'Levee Camp Holler',
        artist: 'Alan Lomax Recordings',
        country: 'United States',
        category: 'additional',
        subcategory: 'field-hollers',
        culturalContext: 'A traditional African American work song used for communication during labor.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Work', 'Communication', 'Hardship'],
        musicalElements: {
          instruments: ['Voice'],
          rhythm: 'Free rhythm'
        }
      }
    ]
  },
  'lullabies': {
    'european': [
      {
        id: 'brahms-lullaby',
        title: 'Wiegenlied: Guten Abend, gute Nacht',
        artist: 'Johannes Brahms',
        country: 'Germany',
        category: 'additional',
        subcategory: 'lullabies',
        culturalContext: 'A classical lullaby composed by Johannes Brahms, beloved worldwide.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Sleep', 'Comfort', 'Childhood'],
        musicalElements: {
          instruments: ['Voice', 'Piano'],
          rhythm: 'Gentle',
          scale: 'Major'
        }
      }
    ]
  }
};