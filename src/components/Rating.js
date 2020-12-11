import React, { useState } from 'react'
import './Rating.css'

const Rating = ({ name }) => {
    const [rating, setRating] = useState(5)

    async function handleClick(e) {
        setRating(parseInt(e.target.value))
    }
    return (
        <div className="RatingDiv">
            <header>{name}</header>
            <input className="RadioInput" value="1" type="radio" id={`${name}-1`} checked={rating === 1} onChange={handleClick}/>
            <label id={`${name}-1`}>1</label>

            <input className="RadioInput" value="2" type="radio" id={`${name}-2`} checked={rating === 2} onChange={handleClick}/>
            <label id={`${name}-2`}>2</label>

            <input className="RadioInput" value="3" type="radio" id={`${name}-3`} checked={rating === 3} onChange={handleClick}/>
            <label id={`${name}-3`}>3</label>

            <input className="RadioInput" value="4" type="radio" id={`${name}-4`} checked={rating === 4} onChange={handleClick}/>
            <label id={`${name}-4`}>4</label>

            <input className="RadioInput" value="5" type="radio" id={`${name}-5`} checked={rating === 5} onChange={handleClick}/>
            <label id={`${name}-5`}>5</label>

            <input className="RadioInput" value="6" type="radio" id={`${name}-6`} checked={rating === 6} onChange={handleClick}/>
            <label id={`${name}-6`}>6</label>

            <input className="RadioInput" value="7" type="radio" id={`${name}-7`} checked={rating === 7} onChange={handleClick}/>
            <label id={`${name}-7`}>7</label>

            <input className="RadioInput" value="8" type="radio" id={`${name}-8`} checked={rating === 8} onChange={handleClick}/>
            <label id={`${name}-8`}>8</label>

            <input className="RadioInput" value="9" type="radio" id={`${name}-9`} checked={rating === 9} onChange={handleClick}/>
            <label id={`${name}-9`}>9</label>

            <input className="RadioInput" value="10" type="radio" id={`${name}-10`} checked={rating === 10} onChange={handleClick}/>
            <label id={`${name}-10`}>10</label>
        </div>
    )
}

export default Rating