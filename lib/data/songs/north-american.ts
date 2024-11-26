import { SongCollection } from './types';

export const northAmericanSongs: SongCollection = {
  'native-american': {
    'powwow-songs': [
      {
        id: 'intertribal-song',
        title: 'Intertribal Song',
        artist: 'Black Lodge Singers',
        country: 'United States',
        category: 'north-american-folk',
        subcategory: 'powwow-songs',
        culturalContext: 'A traditional powwow song performed during intertribal gatherings, emphasizing unity and celebration.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Unity', 'Celebration', 'Tradition'],
        musicalElements: {
          instruments: ['Drum', 'Voice'],
          rhythm: 'Traditional Powwow'
        }
      },
      {
        id: 'kiowa-flag-song',
        title: 'Kiowa Flag Song',
        artist: 'Cozad Singers',
        country: 'United States',
        category: 'north-american-folk',
        subcategory: 'powwow-songs',
        culturalContext: 'A ceremonial song honoring veterans and warriors, performed at Powwows.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Honor', 'Patriotism', 'Ceremony'],
        musicalElements: {
          instruments: ['Drum', 'Voice'],
          rhythm: 'Traditional Kiowa'
        }
      }
    ],
    'ceremonial-chants': [
      {
        id: 'navajo-night-chant',
        title: 'Navajo Night Chant',
        artist: 'Traditional',
        country: 'United States',
        category: 'north-american-folk',
        subcategory: 'ceremonial-chants',
        culturalContext: 'A sacred healing ceremony performed to restore balance and harmony.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Healing', 'Spirituality', 'Balance'],
        musicalElements: {
          instruments: ['Rattle', 'Voice', 'Drum'],
          rhythm: 'Ceremonial'
        }
      }
    ]
  },
  'appalachian': {
    'old-time': [
      {
        id: 'man-of-constant-sorrow',
        title: 'Man of Constant Sorrow',
        artist: 'The Stanley Brothers',
        country: 'United States',
        category: 'north-american-folk',
        subcategory: 'appalachian',
        culturalContext: 'A melancholic folk song about hardship and wandering, deeply rooted in Appalachian tradition.',
        spotifyUrl: 'spotify:track:xxx',
        youtubeUrl: 'https://youtube.com/xxx',
        themes: ['Hardship', 'Travel', 'Loneliness'],
        musicalElements: {
          instruments: ['Guitar', 'Banjo', 'Fiddle'],
          rhythm: 'Old-time'
        }
      }
    ]
  }
};