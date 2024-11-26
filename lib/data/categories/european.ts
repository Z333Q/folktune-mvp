import { Category } from '../types';

export const europeanFolk: Category = {
  id: 'european-folk',
  name: 'European Folk Music',
  description: 'Rich traditions of folk music from across Europe, featuring diverse regional styles and instruments.',
  region: 'Europe',
  image: 'https://images.unsplash.com/photo-1528728935509-22fb14722a30',
  subcategories: [
    {
      id: 'northern-europe',
      name: 'Northern European Folk',
      description: 'Traditional music from Northern European countries',
      region: 'Northern Europe',
      styles: [
        {
          id: 'british-ballads',
          name: 'British Ballads',
          description: 'Narrative songs telling stories of love, history, and legend.',
          songs: [
            {
              id: 'scarborough-fair',
              title: 'Scarborough Fair',
              artist: 'Traditional',
              country: 'England',
              spotifyUrl: 'spotify:track:xxx',
              youtubeUrl: 'https://youtube.com/xxx',
              culturalContext: 'A traditional English ballad exploring themes of love and impossible tasks.'
            }
          ]
        },
        {
          id: 'celtic-music',
          name: 'Celtic Music',
          description: 'Traditional Irish and Scottish music with fiddles and bagpipes.',
          songs: [
            {
              id: 'danny-boy',
              title: 'Danny Boy',
              artist: 'Traditional',
              country: 'Ireland',
              spotifyUrl: 'spotify:track:xxx',
              youtubeUrl: 'https://youtube.com/xxx',
              culturalContext: 'A beloved Irish ballad often associated with emigration and longing.'
            }
          ]
        }
      ]
    }
  ],
  culturalContext: {
    history: 'European folk music traditions reflect centuries of cultural exchange...',
    significance: 'These musical traditions have influenced classical and modern popular music...',
    instruments: [
      {
        name: 'Fiddle',
        description: 'Traditional folk violin',
        origin: 'Various regions',
        type: 'String'
      }
    ],
    traditions: [
      'Ballad singing',
      'Dance music',
      'Maritime songs',
      'Epic poetry'
    ]
  }
};