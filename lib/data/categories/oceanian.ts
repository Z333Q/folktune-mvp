import { Category } from '../types';

export const oceanianFolk: Category = {
  id: 'oceanian-folk',
  name: 'Oceanian Folk Music',
  description: 'Traditional music from the Pacific Islands and Australasia.',
  region: 'Oceania',
  image: 'https://images.unsplash.com/photo-1578559284795-c9f77e5df1c9',
  subcategories: [
    {
      id: 'aboriginal',
      name: 'Aboriginal Music',
      description: 'Traditional music of Indigenous Australians',
      region: 'Australia',
      styles: [
        {
          id: 'songlines',
          name: 'Songlines',
          description: 'Traditional songs mapping the landscape.',
          songs: [
            {
              id: 'treaty',
              title: 'Treaty',
              artist: 'Yothu Yindi',
              country: 'Australia',
              spotifyUrl: 'spotify:track:xxx',
              youtubeUrl: 'https://youtube.com/xxx',
              culturalContext: 'A protest song blending traditional Aboriginal music with modern rock.'
            }
          ]
        }
      ]
    }
  ],
  culturalContext: {
    history: 'Oceanian folk music traditions are deeply connected to the land and sea...',
    significance: 'These musical traditions play a vital role in cultural preservation and identity...',
    instruments: [
      {
        name: 'Didgeridoo',
        description: 'Traditional Aboriginal wind instrument',
        origin: 'Australia',
        type: 'Wind'
      }
    ],
    traditions: [
      'Ceremonial music',
      'Navigation songs',
      'Creation stories',
      'Dance music'
    ]
  }
};