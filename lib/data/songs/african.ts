// Update African songs collection with more entries
import { SongCollection } from './types';

export const africanSongs: SongCollection = {
  'west-african': {
    'griot-traditions': [
      // Existing songs remain...
      {
        id: 'jarabi',
        title: 'Jarabi',
        artist: 'Kasse Mady Diabaté',
        country: 'Mali',
        category: 'african-folk',
        subcategory: 'griot-traditions',
        culturalContext: 'A classic love song in the griot tradition, emphasizing emotions and storytelling through music.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Love', 'Tradition', 'Storytelling'],
        musicalElements: {
          instruments: ['Kora', 'Voice', 'Balafon'],
          rhythm: 'Traditional Malian'
        }
      },
      {
        id: 'kaira',
        title: 'Kaira',
        artist: 'Toumani Diabaté',
        country: 'Mali',
        category: 'african-folk',
        subcategory: 'griot-traditions',
        culturalContext: 'A symbolic piece of hope and peace, showcasing the intricate melodies of the kora.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Peace', 'Hope', 'Spirituality'],
        musicalElements: {
          instruments: ['Kora'],
          rhythm: 'Traditional Malian'
        }
      }
    ],
    'afrobeat': [
      {
        id: 'zombie',
        title: 'Zombie',
        artist: 'Fela Kuti',
        country: 'Nigeria',
        category: 'african-folk',
        subcategory: 'afrobeat',
        culturalContext: 'A politically charged Afrobeat anthem criticizing military oppression in Nigeria.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Politics', 'Resistance', 'Social Commentary'],
        musicalElements: {
          instruments: ['Saxophone', 'Drums', 'Guitar', 'Horns'],
          rhythm: 'Afrobeat'
        }
      },
      {
        id: 'water-no-get-enemy',
        title: 'Water No Get Enemy',
        artist: 'Fela Kuti',
        country: 'Nigeria',
        category: 'african-folk',
        subcategory: 'afrobeat',
        culturalContext: 'A philosophical and socially conscious Afrobeat track highlighting the necessity of water and peace in human life.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Philosophy', 'Nature', 'Life'],
        musicalElements: {
          instruments: ['Saxophone', 'Drums', 'Guitar', 'Horns'],
          rhythm: 'Afrobeat'
        }
      }
    ]
  },
  'east-african': {
    'taarab': [
      {
        id: 'mwana-amani',
        title: 'Mwana Amani',
        artist: 'Bi Kidude',
        country: 'Tanzania',
        category: 'african-folk',
        subcategory: 'taarab',
        culturalContext: 'A classic Taarab song blending Swahili poetry with traditional and Arabic musical influences.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Peace', 'Unity', 'Culture'],
        musicalElements: {
          instruments: ['Oud', 'Violin', 'Qanun', 'Percussion'],
          rhythm: 'Taarab'
        }
      },
      {
        id: 'ya-laiti',
        title: 'Ya Laiti',
        artist: 'Culture Musical Club',
        country: 'Tanzania',
        category: 'african-folk',
        subcategory: 'taarab',
        culturalContext: 'A quintessential example of Zanzibar\'s Taarab music, reflecting themes of love and longing in poetic Swahili lyrics.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Love', 'Longing', 'Poetry'],
        musicalElements: {
          instruments: ['Oud', 'Violin', 'Accordion', 'Percussion'],
          rhythm: 'Taarab'
        }
      }
    ]
  }
};