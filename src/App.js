import React, { useState } from 'react'
import Voting from './Views/Voting'
import Results from './Views/Results'
import Success from './Views/Success'
import Games from './Views/Games'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import games from './games'
const today = new Date()

function App() {
  function findCurrentGame(gameArray) {
    let earliestGame
    gameArray.forEach(game => {
      if(game.date < today) {
        earliestGame = game
      }
    })
    return earliestGame
  }
  const currentGame = findCurrentGame(games)
  const [selectedGame, setSelectedGame] = useState(currentGame)

  return (
    <div className="App">
      <header className="App-header">Milwaukee Bucks Ratings</header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Voting currentGame={selectedGame} setGame={setSelectedGame} />
          </Route>
          <Route path="/results">
            <Results currentGame={selectedGame} setGame={setSelectedGame}/>
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/games">
            <Games setGame={setSelectedGame}/>
          </Route>
        </Switch>
      </Router>
      <p className="Subtext">Shadow Company LLC</p>
    </div>
  )
}

export default App;
