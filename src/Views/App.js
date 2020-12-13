import React, { useState } from 'react'
import Voting from './Voting'
import Summary from './Summary'

function App() {
  const [summaryView, setSummaryView] = useState(false)
  if(summaryView) {
    return (
      <div className="App">
        <header className="App-header">Milwaukee Bucks Ratings</header>
        <Summary/>
        <p className="Subtext">Shadow Company LLC</p>
      </div>
      )
  } 
  else
  return (
    <div className="App">
      <header className="App-header">Milwaukee Bucks Ratings</header>
      <Voting setView={setSummaryView}/>
      <br/>
      <p className="Subtext">Shadow Company LLC</p>
    </div>
    
  );
}

export default App;
