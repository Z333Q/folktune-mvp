import { Category } from '../types';

export const africanFolk: Category = {
  id: 'african-folk',
  name: 'African Folk Music',
  description: 'Traditional music from various African regions',
  region: 'Africa',
  image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5',
  subcategories: [
    {
      id: 'west-african',
      name: 'West African Folk',
      description: 'Rich musical traditions from West African countries',
      region: 'West Africa',
      styles: [
        {
          id: 'griot-traditions',
          name: 'Griot Traditions',
          description: 'Storytelling musicians who preserve history through song',
          songs: [
            {
              id: 'djougouya-magni',
              title: 'Djougouya Magni',
              artist: 'Toumani Diabaté',
              country: 'Mali',
              spotifyUrl: 'spotify:track:xxx',
              youtubeUrl: 'https://youtube.com/xxx',
              culturalContext: 'Reflects the mastery of kora, a traditional harp-lute, in Malian oral history and storytelling.'
            },
            {
              id: 'mali-sadio',
              title: 'Mali Sadio',
              artist: 'Bassekou Kouyaté',
              country: 'Mali',
              spotifyUrl: 'spotify:track:xxx',
              youtubeUrl: 'https://youtube.com/xxx',
              culturalContext: 'A traditional narrative that symbolizes harmony between humans and animals.'
            }
          ]
        },
        {
          id: 'highlife',
          name: 'Highlife',
          description: 'A music genre from Ghana featuring jazzy horns and multiple guitars',
          songs: [
            {
              id: 'sweet-mother',
              title: 'Sweet Mother',
              artist: 'Prince Nico Mbarga',
              country: 'Nigeria',
              spotifyUrl: 'spotify:track:xxx',
              youtubeUrl: 'https://youtube.com/xxx',
              culturalContext: "One of Africa's best-loved Highlife tracks, celebrating motherhood and familial love."
            },
            {
              id: 'guitar-boy',
              title: 'Guitar Boy',
              artist: 'Sir Victor Uwaifo',
              country: 'Nigeria',
              spotifyUrl: 'spotify:track:xxx',
              youtubeUrl: 'https://youtube.com/xxx',
              culturalContext: 'A Highlife classic blending traditional storytelling with modern melodies.'
            }
          ]
        }
      ]
    },
    {
      id: 'east-african',
      name: 'East African Folk',
      description: 'Traditional music from East African nations',
      region: 'East Africa',
      styles: [
        {
          id: 'taarab',
          name: 'Taarab',
          description: 'Swahili music genre combining African, Arabic, and Indian influences',
          songs: [
            {
              id: 'mwana-amani',
              title: 'Mwana Amani',
              artist: 'Bi Kidude',
              country: 'Tanzania',
              spotifyUrl: 'spotify:track:xxx',
              youtubeUrl: 'https://youtube.com/xxx',
              culturalContext: 'A classic Taarab song blending Swahili poetry with traditional and Arabic musical influences.'
            }
          ]
        }
      ]
    }
  ],
  culturalContext: {
    history: 'African folk music traditions span thousands of years...',
    significance: 'Music plays a central role in African social life...',
    instruments: [
      {
        name: 'Kora',
        description: '21-string bridge-harp used by griots'
      },
      {
        name: 'Talking Drum',
        description: 'Hour-glass shaped drum that can mimic speech tones'
      }
    ],
    traditions: [
      'Oral history preservation',
      'Ceremonial music',
      'Social commentary',
      'Dance traditions'
    ]
  }
};