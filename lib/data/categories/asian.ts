import { Category } from '../types';

export const asianFolk: Category = {
  id: 'asian-folk',
  name: 'Asian Folk Music',
  description: 'Traditional music from various Asian regions',
  region: 'Asia',
  image: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4',
  subcategories: [
    {
      id: 'east-asian',
      name: 'East Asian Folk',
      description: 'Traditional music from East Asian countries',
      region: 'East Asia',
      styles: [
        {
          id: 'minyo',
          name: 'Min'yō',
          description: 'Traditional Japanese folk songs',
          songs: [
            {
              id: 'soran-bushi',
              title: 'Sōran Bushi',
              artist: 'Traditional',
              country: 'Japan',
              spotifyUrl: 'spotify:track:xxx',
              youtubeUrl: 'https://youtube.com/xxx',
              culturalContext: 'A traditional Japanese work song from Hokkaido, reflecting the hard labor of herring fishermen.'
            },
            {
              id: 'sakura-sakura',
              title: 'Sakura Sakura',
              artist: 'Traditional',
              country: 'Japan',
              spotifyUrl: 'spotify:track:xxx',
              youtubeUrl: 'https://youtube.com/xxx',
              culturalContext: 'A well-known Japanese folk song celebrating cherry blossoms, symbolizing the beauty and fleeting nature of life.'
            }
          ]
        },
        {
          id: 'pansori',
          name: 'Pansori',
          description: 'Korean epic storytelling through song',
          songs: [
            {
              id: 'chunhyangga',
              title: 'Chunhyangga',
              artist: 'Traditional',
              country: 'Korea',
              spotifyUrl: 'spotify:track:xxx',
              youtubeUrl: 'https://youtube.com/xxx',
              culturalContext: 'A traditional Korean epic tale that narrates the love story between Chunhyang and Mongryong.'
            }
          ]
        }
      ]
    },
    {
      id: 'south-asian',
      name: 'South Asian Folk',
      description: 'Traditional music from South Asian countries',
      region: 'South Asia',
      styles: [
        {
          id: 'bhajans',
          name: 'Bhajans',
          description: 'Devotional songs expressing love for the divine',
          songs: [
            {
              id: 'raghupati-raghav',
              title: 'Raghupati Raghav Raja Ram',
              artist: 'Traditional',
              country: 'India',
              spotifyUrl: 'spotify:track:xxx',
              youtubeUrl: 'https://youtube.com/xxx',
              culturalContext: 'A devotional song popularized by Mahatma Gandhi, symbolizing peace and harmony.'
            }
          ]
        }
      ]
    }
  ],
  culturalContext: {
    history: 'Asian folk music traditions span thousands of years...',
    significance: 'These traditions are deeply intertwined with cultural practices...',
    instruments: [
      {
        name: 'Shamisen',
        description: 'A three-stringed traditional Japanese lute'
      },
      {
        name: 'Gayageum',
        description: 'A Korean zither-like string instrument'
      }
    ],
    traditions: [
      'Court music',
      'Religious ceremonies',
      'Folk festivals',
      'Traditional theater'
    ]
  }
};