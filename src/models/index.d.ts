import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Rating {
  readonly id: string;
  readonly ratee: string;
  readonly rating: number;
  readonly gameId: string;
  constructor(init: ModelInit<Rating>);
  static copyOf(source: Rating, mutator: (draft: MutableModel<Rating>) => MutableModel<Rating> | void): Rating;
}