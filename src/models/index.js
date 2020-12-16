// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Rating, Game } = initSchema(schema);

export {
  Rating,
  Game
};