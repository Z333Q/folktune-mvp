// Update Asian songs collection with more entries
import { SongCollection } from './types';

export const asianSongs: SongCollection = {
  'east-asian': {
    'minyo': [
      // Existing songs remain...
      {
        id: 'sakura-sakura',
        title: 'Sakura Sakura',
        artist: 'Traditional',
        country: 'Japan',
        category: 'asian-folk',
        subcategory: 'minyo',
        culturalContext: 'A well-known Japanese folk song celebrating cherry blossoms, symbolizing the beauty and fleeting nature of life.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Nature', 'Beauty', 'Impermanence'],
        musicalElements: {
          instruments: ['Koto', 'Shakuhachi', 'Voice'],
          rhythm: 'Traditional Japanese',
          scale: 'Japanese pentatonic'
        }
      },
      {
        id: 'tanko-bushi',
        title: 'Tankō Bushi',
        artist: 'Traditional',
        country: 'Japan',
        category: 'asian-folk',
        subcategory: 'minyo',
        culturalContext: 'A coal miner\'s work song from Kyushu, often performed with traditional instruments.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Work', 'Community', 'Daily Life'],
        musicalElements: {
          instruments: ['Shamisen', 'Taiko', 'Voice'],
          rhythm: 'Traditional Japanese'
        }
      }
    ],
    'nanyin': [
      {
        id: 'guanju',
        title: 'Guanju',
        artist: 'Traditional',
        country: 'China',
        category: 'asian-folk',
        subcategory: 'nanyin',
        culturalContext: 'A classical Nanyin piece often performed with the pipa and flute, reflecting themes of love and harmony.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Love', 'Harmony', 'Nature'],
        musicalElements: {
          instruments: ['Pipa', 'Dizi', 'Erhu'],
          rhythm: 'Traditional Chinese',
          scale: 'Chinese pentatonic'
        }
      }
    ]
  },
  'south-asian': {
    'bhajans': [
      {
        id: 'raghupati-raghav',
        title: 'Raghupati Raghav Raja Ram',
        artist: 'Traditional',
        country: 'India',
        category: 'asian-folk',
        subcategory: 'bhajans',
        culturalContext: 'A devotional song popularized by Mahatma Gandhi, symbolizing peace and harmony.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Devotion', 'Peace', 'Unity'],
        musicalElements: {
          instruments: ['Harmonium', 'Tabla', 'Voice'],
          rhythm: 'Bhajan'
        }
      }
    ]
  }
};