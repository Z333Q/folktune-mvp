import { SongCollection } from './types';

export const religiousSongs: SongCollection = {
  'christian-chants': {
    'gregorian': [
      {
        id: 'dies-irae',
        title: 'Dies Irae',
        artist: 'Traditional',
        country: 'Vatican',
        category: 'religious-chants',
        subcategory: 'gregorian',
        culturalContext: 'A medieval chant reflecting on the Last Judgment, widely used in liturgical music.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Judgment', 'Faith', 'Eternity'],
        musicalElements: {
          instruments: ['Voice'],
          rhythm: 'Free rhythm',
          scale: 'Dorian mode'
        }
      }
    ]
  },
  'buddhist-chants': {
    'sutras': [
      {
        id: 'heart-sutra',
        title: 'Heart Sutra',
        artist: 'Imee Ooi',
        country: 'Various',
        category: 'religious-chants',
        subcategory: 'buddhist',
        culturalContext: 'A fundamental Buddhist text on emptiness and wisdom, chanted in meditation.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Wisdom', 'Emptiness', 'Enlightenment'],
        musicalElements: {
          instruments: ['Bell', 'Voice', 'Wooden Fish'],
          rhythm: 'Meditative'
        }
      }
    ]
  }
};