import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Rating {
  readonly id: string;
  readonly ratee: string;
  readonly rating: number;
  readonly gameID: string;
  constructor(init: ModelInit<Rating>);
  static copyOf(source: Rating, mutator: (draft: MutableModel<Rating>) => MutableModel<Rating> | void): Rating;
}

export declare class Game {
  readonly id: string;
  readonly opponent: string;
  readonly date: string;
  readonly Ratings?: (Rating | null)[];
  constructor(init: ModelInit<Game>);
  static copyOf(source: Game, mutator: (draft: MutableModel<Game>) => MutableModel<Game> | void): Game;
}