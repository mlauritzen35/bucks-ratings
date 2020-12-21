import React, { useState } from 'react'
import './Voting.css';
import Rating from '../Components/Rating'
import { Link } from 'react-router-dom'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createRating } from '../graphql/mutations'
import awsExports from "../aws-exports"
import players from '../Constants/players'
Amplify.configure(awsExports)

function Voting({ currentGame }) {
  const [ratings, setRatings] = useState({})

    async function addRating(rating) {
    try {
      await API.graphql(graphqlOperation(createRating, {input: rating}))
    } catch (err) {
      console.log('error creating game:', err)
    }
  }
  

  function submitRatings(e) {
    for(var rating in ratings) {
      const submission = {
        ratee: rating,
        rating: ratings[rating],
        gameId: currentGame.id
      }
      if(submission.rating !== null) {
        addRating(submission)
      }
    }
  }

  return (
    <div className="VotingDiv">
      <p>Submit your ratings for the Bucks versus the {currentGame.opponent} on {currentGame.date.getMonth() + 1}/{currentGame.date.getDate() + 1}!</p>
      {players.map(player => (
        <Rating name={player.name} id={player.id} rating={ratings} setRating={setRatings}/>
      ))}
      <br/>
      <div className="LinksDiv">
        <Link to="/results">
          <button className="LinkButton" onClick={submitRatings}>Submit!</button>
        </Link>
        <Link to="/results">
          <button className="LinkButton">View Results</button>
        </Link>
        <Link to="/playerRatings">
          <button className="LinkButton">Historical Ratings</button>
        </Link>
      </div>
    </div>
  );
}

export default Voting
