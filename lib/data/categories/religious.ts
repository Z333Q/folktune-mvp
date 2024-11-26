import { Category } from '../types';

export const religiousChants: Category = {
  id: 'religious-chants',
  name: 'Religious and Spiritual Chants',
  description: 'Sacred musical traditions from various religious and spiritual practices worldwide.',
  region: 'Global',
  image: 'https://images.unsplash.com/photo-1543169108-32ac15c11e02',
  subcategories: [
    {
      id: 'christian-chants',
      name: 'Christian Chants',
      description: 'Sacred music from Christian traditions',
      region: 'Global',
      styles: [
        {
          id: 'gregorian',
          name: 'Gregorian Chant',
          description: 'Monophonic sacred songs of the Roman Catholic Church.',
          songs: [
            {
              id: 'dies-irae',
              title: 'Dies Irae',
              artist: 'Traditional',
              country: 'Vatican',
              spotifyUrl: 'spotify:track:xxx',
              youtubeUrl: 'https://youtube.com/xxx',
              culturalContext: 'A medieval chant reflecting on the Last Judgment.'
            }
          ]
        }
      ]
    }
  ],
  culturalContext: {
    history: 'Religious chants have been integral to spiritual practices throughout human history...',
    significance: 'These sacred musical traditions serve both spiritual and communal functions...',
    instruments: [
      {
        name: 'Organ',
        description: 'Traditional church instrument',
        origin: 'Europe',
        type: 'Keyboard'
      }
    ],
    traditions: [
      'Liturgical music',
      'Meditation chants',
      'Prayer songs',
      'Ceremonial music'
    ]
  }
};