import React from 'react'
import { Link } from 'react-router-dom'
import games from '../Constants/games'
import './Games.css'
const today = new Date()

function Games({ setGame }) {
    const handleClick = game => () => {
        setGame(game)
    }

    return (
        <div className="ListDiv">
            <ul>
                {games.map(game => (
                    <div className="GameEntry"><li>{game.date.getMonth()+1}/{game.date.getDate()+1} - {game.opponent} {game.date < today && <Link to="/results"><button onClick={handleClick(game)}>Results</button></Link>}</li></div>
                ))}
            </ul>
        </div>
        
    )
}

export default Games