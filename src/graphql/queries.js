/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
      id
      ratee
      rating
      gameId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ratee
        rating
        gameId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRatings = /* GraphQL */ `
  query SyncRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRatings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ratee
        rating
        gameId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
