import React, { useState, useEffect } from 'react'
import './PlayerRatings.css'
import { Link } from 'react-router-dom'
import players from '../Constants/players'
import {
    ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  } from 'recharts';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listRatings } from '../graphql/queries'
import awsExports from "../aws-exports"
Amplify.configure(awsExports)

function PlayerRatings() {
    const [selectedPlayer, setSelectedPlayer] = useState(players.find(player => player.id === 'Giannis'))
    const [playerRatings, setPlayerRatings] = useState([])
    const [averageRatings, setAverageRatings] = useState([])
    async function handleClick(e) {
        const foundPlayer = players.find(player => player.name === e.target.value)
        setSelectedPlayer(foundPlayer)
    }

    useEffect(() => {getRatings()}, [selectedPlayer])

    function groupBy(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };

    async function getRatings() {
        setAverageRatings([])
        try {
            const ratingsData = await API.graphql(graphqlOperation(listRatings, {
              filter: {
                  ratee: {
                      eq: selectedPlayer.id
                  }
              }, limit: 2000
          }))
            const ratings = ratingsData.data.listRatings.items
            console.log(ratings)
            setPlayerRatings(ratings)
            const groupedRatings = groupBy(ratings, 'gameId')
            for(var game in groupedRatings) {
                const average = groupedRatings[game].reduce((total, next) => total + next.rating, 0) / groupedRatings[game].length;
                const roundedAverage = Math.round(average * 10) / 10
                setAverageRatings(averageRatings => [...averageRatings, {gameId: game, rating: roundedAverage}])
            }
            console.log(averageRatings)
          } catch (err) { console.log('error fetching ratings') }
    }

    return (
        <div>
            <select name="players" id="players" onChange={handleClick}>
                {players.map(player => (
                        <option value={player.name}>{player.name}</option>
                    ))}
            </select>     
            <div className="RechartsDiv">
                <ResponsiveContainer width={"95%"} height={"100%"}>
                    <LineChart
                    data={averageRatings}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey='gameId'/>
                        <YAxis type="number" domain={[0, 10]} />
                        <Line type="monotone" dataKey="rating" stroke="#8884d8" />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <br/>
            <Link to="/results">
                <button>Back</button>
            </Link>
        </div>
    )
}

export default PlayerRatings