import React, { useState } from 'react'
import './Voting.css';
import Rating from '../Components/Rating'
import { Link } from 'react-router-dom'

function App() {
  const [allRating, setAllRating] = useState({
    Giannis: null,
    Khris: null,
    Jrue: null,
    Brook: null,
    Donte: null,
    Augustin: null,
    Portis: null,
    Pat: null,
    DJ: null,
    Forbes: null,
    Thanasis: null,
    Craig: null,
    Nwora: null,
    Merrill: null
  })

  return (
    <div className="VotingDiv">
      <Rating name='Giannis Antetokounmpo' id="Giannis" rating={allRating} setRating={setAllRating}/>
      <Rating name='Khris Middleton' id="Khris" rating={allRating} setRating={setAllRating}/>
      <Rating name='Jrue Holiday' id="Jrue" rating={allRating} setRating={setAllRating}/>
      <Rating name='Brook Lopez' id="Brook" rating={allRating} setRating={setAllRating}/>
      <Rating name='Donte DiVincenzo' id="Donte" rating={allRating} setRating={setAllRating}/>
      <Rating name='D.J. Augustin' id="Augustin" rating={allRating} setRating={setAllRating}/>
      <Rating name='Bobby Portis' id="Portis" rating={allRating} setRating={setAllRating}/>
      <Rating name='Pat Connaughton' id="Pat" rating={allRating} setRating={setAllRating}/>
      <Rating name='D.J. Wilson' id="DJ" rating={allRating} setRating={setAllRating}/>
      <Rating name='Bryn Forbes' id="Forbes" rating={allRating} setRating={setAllRating}/>
      <Rating name='Thanasis Antetokounmpo' id="Thanasis" rating={allRating} setRating={setAllRating}/>
      <Rating name='Torrey Craig' id="Craig" rating={allRating} setRating={setAllRating}/>
      <Rating name='Jordan Nwora' id="Nwora" rating={allRating} setRating={setAllRating}/>
      <Rating name='Sam Merrill' id="Merrill" rating={allRating} setRating={setAllRating}/>
      <br/>
      <Link to="/results">
        <button>Submit!</button>
      </Link>
    </div>
  );
}

export default App;
