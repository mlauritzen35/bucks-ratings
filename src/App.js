import React from 'react'
import Voting from './Views/Voting'
import Results from './Views/Results'
import Success from './Views/Success'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">Milwaukee Bucks Ratings</header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Voting />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
      </Router>
      <p className="Subtext">Shadow Company LLC</p>
    </div>
  )
}

export default App;
