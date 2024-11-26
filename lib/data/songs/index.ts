import { africanSongs } from './african';
import { asianSongs } from './asian';
import { europeanSongs } from './european';
import { northAmericanSongs } from './north-american';
import { southAmericanSongs } from './south-american';
import { oceanianSongs } from './oceanian';
import { religiousSongs } from './religious';
import { additionalSongs } from './additional';

export const songs = {
  african: africanSongs,
  asian: asianSongs,
  european: europeanSongs,
  northAmerican: northAmericanSongs,
  southAmerican: southAmericanSongs,
  oceanian: oceanianSongs,
  religious: religiousSongs,
  additional: additionalSongs,
};

export * from './types';