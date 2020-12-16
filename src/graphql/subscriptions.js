/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating {
    onCreateRating {
      id
      ratee
      rating
      gameID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating {
    onUpdateRating {
      id
      ratee
      rating
      gameID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating {
    onDeleteRating {
      id
      ratee
      rating
      gameID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
      id
      opponent
      date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Ratings {
        items {
          id
          ratee
          rating
          gameID
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
  }
`;
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
      id
      opponent
      date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Ratings {
        items {
          id
          ratee
          rating
          gameID
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
  }
`;
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
      id
      opponent
      date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Ratings {
        items {
          id
          ratee
          rating
          gameID
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
  }
`;
