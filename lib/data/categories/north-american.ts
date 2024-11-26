import { Category } from '../types';

export const northAmericanFolk: Category = {
  id: 'north-american-folk',
  name: 'North American Folk Music',
  description: 'Traditional music from indigenous peoples and settler communities of North America.',
  region: 'North America',
  image: 'https://images.unsplash.com/photo-1519064438923-de4d8acfa4d6',
  subcategories: [
    {
      id: 'native-american',
      name: 'Native American Music',
      description: 'Traditional music of indigenous peoples',
      region: 'North America',
      styles: [
        {
          id: 'powwow-songs',
          name: 'Powwow Songs',
          description: 'Social dance songs performed at gatherings.',
          songs: [
            {
              id: 'intertribal-song',
              title: 'Intertribal Song',
              artist: 'Black Lodge Singers',
              country: 'United States',
              spotifyUrl: 'spotify:track:xxx',
              youtubeUrl: 'https://youtube.com/xxx',
              culturalContext: 'A traditional powwow song performed during intertribal gatherings.'
            }
          ]
        }
      ]
    }
  ],
  culturalContext: {
    history: 'North American folk music represents a fusion of indigenous and immigrant traditions...',
    significance: 'These musical traditions reflect the diverse cultural heritage of the continent...',
    instruments: [
      {
        name: 'Native American Flute',
        description: 'Traditional wooden flute',
        origin: 'Various tribes',
        type: 'Wind'
      }
    ],
    traditions: [
      'Ceremonial music',
      'Social dances',
      'Storytelling songs',
      'Work songs'
    ]
  }
};