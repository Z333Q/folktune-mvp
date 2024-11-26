import { Category } from '../types';

export const southAmericanFolk: Category = {
  id: 'south-american-folk',
  name: 'South American Folk Music',
  description: 'Rich musical traditions from across South America, blending indigenous, European, and African influences.',
  region: 'South America',
  image: 'https://images.unsplash.com/photo-1583309219338-22fb14722a30',
  subcategories: [
    {
      id: 'andean-music',
      name: 'Andean Music',
      description: 'Traditional music from the Andes mountains',
      region: 'Andes',
      styles: [
        {
          id: 'huayno',
          name: 'Huayno',
          description: 'Indigenous Quechua music with Spanish influences.',
          songs: [
            {
              id: 'el-condor-pasa',
              title: 'El Condor Pasa',
              artist: 'Daniel Alomía Robles',
              country: 'Peru',
              spotifyUrl: 'spotify:track:xxx',
              youtubeUrl: 'https://youtube.com/xxx',
              culturalContext: 'A world-renowned Andean melody symbolizing Peruvian identity.'
            }
          ]
        }
      ]
    }
  ],
  culturalContext: {
    history: 'South American folk music represents a unique fusion of indigenous, European, and African traditions...',
    significance: 'These musical traditions maintain strong connections to cultural identity and social movements...',
    instruments: [
      {
        name: 'Charango',
        description: 'Small Andean stringed instrument',
        origin: 'Andes Mountains',
        type: 'String'
      }
    ],
    traditions: [
      'Festival music',
      'Religious ceremonies',
      'Social dances',
      'Protest songs'
    ]
  }
};