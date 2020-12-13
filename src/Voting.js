import React, { useState } from 'react'
import './Voting.css';
import Rating from './Components/Rating'

function App({ setView }) {
  const [allRating, setAllRating] = useState({
    Giannis: 5,
    Khris: 5,
    Jrue: 5,
    Brook: 5,
    Donte: 5,
    Augustin: 5,
    Portis: 5,
    Pat: 5,
    DJ: 5,
    Forbes: 5,
    Thanasis: 5,
    Craig: 5,
    Nwora: 5,
    Merrill: 5
  })

  function handleClick(e) {
    console.log(allRating)
    setView(true)
  }
  return (
    <div>
      <p>Welcome to Milwaukee Bucks Ratings!</p>
      <Rating name='Giannis Antetokounmpo' id="Giannis" rating={allRating} setRating={setAllRating}/>
      <Rating name='Khris Middleton' id="Khris" rating={allRating} setRating={setAllRating}/>
      <Rating name='Jrue Holiday' id="Jrue" rating={allRating} setRating={setAllRating}/>
      <Rating name='Brook Lopez' id="Brook" rating={allRating} setRating={setAllRating}/>
      <Rating name='Donte DiVincenzo' id="Donte" rating={allRating} setRating={setAllRating}/>
      <Rating name='D.J. Augustin' id="Augustin" rating={allRating} setRating={setAllRating}/>
      <Rating name='Bobby Portis' id="Poris" rating={allRating} setRating={setAllRating}/>
      <Rating name='Pat Connaughton' id="Pat" rating={allRating} setRating={setAllRating}/>
      <Rating name='D.J. Wilson' id="DJ" rating={allRating} setRating={setAllRating}/>
      <Rating name='Bryn Forbes' id="Forbes" rating={allRating} setRating={setAllRating}/>
      <Rating name='Thanasis Antetokounmpo' id="Thanasis" rating={allRating} setRating={setAllRating}/>
      <Rating name='Torrey Craig' id="Craig" rating={allRating} setRating={setAllRating}/>
      <Rating name='Jordan Nwora' id="Nwora" rating={allRating} setRating={setAllRating}/>
      <Rating name='Sam Merrill' id="Merrill" rating={allRating} setRating={setAllRating}/>
      <br/>
      <button onClick={handleClick}>Submit!</button>
    </div>
  );
}

export default App;
