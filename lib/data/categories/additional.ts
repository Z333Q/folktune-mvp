import { Category } from '../types';

export const additionalCategories: Category = {
  id: 'additional-categories',
  name: 'Additional Folk Song Categories',
  description: 'Additional categories of folk music including work songs, lullabies, and more.',
  region: 'Global',
  image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
  subcategories: [
    {
      id: 'work-songs',
      name: 'Work Songs',
      description: 'Songs traditionally sung during manual labor',
      region: 'Global',
      styles: [
        {
          id: 'sea-shanties',
          name: 'Sea Shanties',
          description: 'Maritime work songs sung to coordinate labor aboard ships.',
          songs: [
            {
              id: 'drunken-sailor',
              title: 'Drunken Sailor',
              artist: 'Traditional',
              country: 'United Kingdom',
              spotifyUrl: 'spotify:track:xxx',
              youtubeUrl: 'https://youtube.com/xxx',
              culturalContext: 'A popular sea shanty sung during heavy work on ships.'
            }
          ]
        }
      ]
    }
  ],
  culturalContext: {
    history: 'These additional categories represent specialized forms of folk music...',
    significance: 'These traditions often served practical purposes in addition to entertainment...',
    instruments: [
      {
        name: 'Work Tools',
        description: 'Various tools used as percussion instruments',
        origin: 'Global',
        type: 'Percussion'
      }
    ],
    traditions: [
      'Labor coordination',
      'Children\'s songs',
      'Social commentary',
      'Protest music'
    ]
  }
};