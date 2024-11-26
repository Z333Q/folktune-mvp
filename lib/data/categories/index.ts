import { Category } from '../types';

// Import all category files
import { africanFolk } from './african';
import { asianFolk } from './asian';
import { europeanFolk } from './european';
import { northAmericanFolk } from './north-american';
import { southAmericanFolk } from './south-american';
import { oceanianFolk } from './oceanian';
import { religiousChants } from './religious';
import { additionalCategories } from './additional';

export const categories: Category[] = [
  africanFolk,
  asianFolk,
  europeanFolk,
  northAmericanFolk,
  southAmericanFolk,
  oceanianFolk,
  religiousChants,
  additionalCategories
];

export * from '../types';