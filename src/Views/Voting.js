import React, { useState, useEffect } from 'react'
import './Voting.css';
import Rating from '../Components/Rating'
import { Link } from 'react-router-dom'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listGames } from '../graphql/queries'
import { createRating } from '../graphql/mutations'
import awsExports from "../aws-exports"
Amplify.configure(awsExports)

function Voting() {
  const [ratings, setRatings] = useState({})
  const [currentGame, setCurrentGame] = useState({})

  // eslint-disable-next-line
  useEffect(() => {getGames()}, [])

  function findMostRecentGame(games) {
    return games[0]
  }

  async function getGames() {
    try {
      const gamesData = await API.graphql(graphqlOperation(listGames))
      const games = gamesData.data.listGames.items
      const currentGame = findMostRecentGame(games)
      currentGame.formattedDate = new Date(currentGame.date)
      currentGame.month = currentGame.formattedDate.getMonth()
      currentGame.gameDate = currentGame.formattedDate.getDate()
      setCurrentGame(currentGame)
    } catch (err) { console.log('error fetching games') }
  }

  // async function addGame(game) {
  //   try {
  //     await API.graphql(graphqlOperation(createGame, {input: game}))
  //   } catch (err) {
  //     console.log('error creating game:', err)
  //   }
  // }

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
        gameID: currentGame.id
      }
      addRating(submission)
    }
  }

  return (
    <div className="VotingDiv">
    <p>Vs. {currentGame.opponent} {currentGame.month}/{currentGame.gameDate}</p>
      <Rating name='Giannis Antetokounmpo' id="Giannis" rating={ratings} setRating={setRatings}/>
      <Rating name='Khris Middleton' id="Khris" rating={ratings} setRating={setRatings}/>
      <Rating name='Jrue Holiday' id="Jrue" rating={ratings} setRating={setRatings}/>
      <Rating name='Brook Lopez' id="Brook" rating={ratings} setRating={setRatings}/>
      <Rating name='Donte DiVincenzo' id="Donte" rating={ratings} setRating={setRatings}/>
      <Rating name='D.J. Augustin' id="Augustin" rating={ratings} setRating={setRatings}/>
      <Rating name='Bobby Portis' id="Portis" rating={ratings} setRating={setRatings}/>
      <Rating name='Pat Connaughton' id="Pat" rating={ratings} setRating={setRatings}/>
      <Rating name='D.J. Wilson' id="DJ" rating={ratings} setRating={setRatings}/>
      <Rating name='Bryn Forbes' id="Forbes" rating={ratings} setRating={setRatings}/>
      <Rating name='Thanasis Antetokounmpo' id="Thanasis" rating={ratings} setRating={setRatings}/>
      <Rating name='Torrey Craig' id="Craig" rating={ratings} setRating={setRatings}/>
      <Rating name='Jordan Nwora' id="Nwora" rating={ratings} setRating={setRatings}/>
      <Rating name='Sam Merrill' id="Merrill" rating={ratings} setRating={setRatings}/>
      <br/>
      <Link to="/results">
        <button onClick={submitRatings}>Submit!</button>
      </Link>
    </div>
  );
}

export default Voting;
