// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Rating } = initSchema(schema);

export {
  Rating
};