import Voting from './Views/Voting'
import Summary from './Views/Summary'
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
            <Summary />
          </Route>
        </Switch>
      </Router>
      <p className="Subtext">Shadow Company LLC</p>
    </div>
  )
}

export default App;
