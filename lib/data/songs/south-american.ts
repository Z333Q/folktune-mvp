import { SongCollection } from './types';

export const southAmericanSongs: SongCollection = {
  'andean-music': {
    'huayno': [
      {
        id: 'el-condor-pasa',
        title: 'El Condor Pasa',
        artist: 'Daniel Alomía Robles',
        country: 'Peru',
        category: 'south-american-folk',
        subcategory: 'huayno',
        culturalContext: 'A world-renowned Andean melody symbolizing Peruvian identity and the majesty of the Andes.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Nature', 'Freedom', 'Identity'],
        musicalElements: {
          instruments: ['Quena', 'Charango', 'Zampoña'],
          rhythm: 'Huayno'
        }
      }
    ],
    'sikuri': [
      {
        id: 'sikuriadas',
        title: 'Sikuriadas',
        artist: 'Sukay',
        country: 'Bolivia',
        category: 'south-american-folk',
        subcategory: 'sikuri',
        culturalContext: 'Traditional Andean piece highlighting communal music-making with pan flutes.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Community', 'Tradition', 'Celebration'],
        musicalElements: {
          instruments: ['Siku', 'Bombo', 'Charango'],
          rhythm: 'Sikuri'
        }
      }
    ]
  },
  'brazilian': {
    'samba': [
      {
        id: 'aquarela-do-brasil',
        title: 'Aquarela do Brasil',
        artist: 'Ary Barroso',
        country: 'Brazil',
        category: 'south-american-folk',
        subcategory: 'samba',
        culturalContext: 'A patriotic samba celebrating Brazilian culture and landscapes.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Patriotism', 'Culture', 'Celebration'],
        musicalElements: {
          instruments: ['Cavaquinho', 'Pandeiro', 'Surdo'],
          rhythm: 'Samba'
        }
      }
    ]
  }
};